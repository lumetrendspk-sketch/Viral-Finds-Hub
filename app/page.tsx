import { AffiliateLanding } from "@/components/affiliate-landing";
import { getProducts } from "@/lib/products";

export default async function Home() {
  const products = await getProducts();
  return <AffiliateLanding products={products} />;
}
