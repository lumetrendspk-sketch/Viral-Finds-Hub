import productsFromJson from "@/data/products.json";

export const PRODUCT_CATEGORIES = [
  "Bags",
  "Shoes",
  "Beauty",
  "Jewelry",
  "Clothes",
] as const;

export type ProductCategory = (typeof PRODUCT_CATEGORIES)[number];

export type Product = {
  id: string;
  category: ProductCategory;
  title: string;
  price: number | null;
  image: string;
  affiliateUrl: string;
};

function normalizeProducts(items: Product[]): Product[] {
  return items.filter((item) => PRODUCT_CATEGORIES.includes(item.category));
}

async function fetchGoogleSheetProducts(): Promise<Product[]> {
  const endpoint = process.env.GOOGLE_SHEET_PRODUCTS_API_URL;
  if (!endpoint) {
    return [];
  }

  try {
    const response = await fetch(endpoint, { next: { revalidate: 300 } });
    if (!response.ok) {
      return [];
    }

    const data = (await response.json()) as Product[];
    return normalizeProducts(data);
  } catch {
    return [];
  }
}

export async function getProducts(): Promise<Product[]> {
  const source = process.env.PRODUCT_SOURCE ?? "json";

  if (source === "google-sheet") {
    const sheetProducts = await fetchGoogleSheetProducts();
    if (sheetProducts.length > 0) {
      return sheetProducts;
    }
  }

  return normalizeProducts(productsFromJson as Product[]);
}
