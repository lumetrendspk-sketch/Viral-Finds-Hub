"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  PRODUCT_CATEGORIES,
  type Product,
  type ProductCategory,
} from "@/lib/products";

function formatPrice(price: number | null): string {
  if (price === null) {
    return "Price on store";
  }

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(price);
}

export function AffiliateLanding({ products }: { products: Product[] }) {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>("Bags");
  const [search, setSearch] = useState("");

  const categoryCounts = useMemo(() => {
    return PRODUCT_CATEGORIES.reduce<Record<ProductCategory, number>>(
      (counts, category) => {
        counts[category] = products.filter(
          (product) => product.category === category,
        ).length;
        return counts;
      },
      {
        Bags: 0,
        Shoes: 0,
        Beauty: 0,
        Jewelry: 0,
        Clothes: 0,
      },
    );
  }, [products]);

  const filteredProducts = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    const byCategory = products.filter(
      (product) => product.category === activeCategory,
    );

    const bySearch =
      normalizedSearch.length === 0
        ? byCategory
        : byCategory.filter((product) =>
            product.title.toLowerCase().includes(normalizedSearch),
          );

    return bySearch;
  }, [activeCategory, products, search]);

  return (
    <main className="min-h-screen bg-white text-black">
      <header className="border-b border-black/20 bg-white">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-6 md:px-8">
          <div className="flex items-center gap-3">
            <Image
              src="/viral-find-hub-logo.png"
              alt="Viral Find Hub logo"
              width={48}
              height={48}
              className="h-12 w-12 rounded-full border border-black/20 object-cover"
              priority
            />
            <span className="font-sans text-xl font-medium tracking-wide text-black">
              Viral Finds Hub
            </span>
          </div>
          <nav className="flex flex-wrap gap-2">
            {PRODUCT_CATEGORIES.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-none border px-4 py-2 text-sm tracking-wide transition-colors ${
                    isActive
                      ? "border-black bg-black text-white"
                      : "border-black/30 bg-white text-black hover:border-black"
                  }`}
                >
                  {category} ({categoryCounts[category]})
                </button>
              );
            })}
          </nav>
        </div>
      </header>

      <section className="mx-auto w-full max-w-7xl px-4 py-8 md:px-8">
        <div className="mb-8">
          <label className="block">
            <span className="mb-2 block text-sm text-black/70">Search</span>
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder={`Search ${activeCategory}`}
              className="w-full border border-black/30 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-black"
            />
          </label>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="border border-black/20 px-6 py-10 text-center text-black/70">
            No items found. Try another search or category.
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <article
                key={product.id}
                className="group overflow-hidden border border-black/20 bg-white"
              >
                <div className="relative aspect-[4/5] overflow-hidden border-b border-black/15">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="space-y-3 p-4">
                  <h2 className="line-clamp-2 font-serif text-lg leading-tight">
                    {product.title}
                  </h2>
                  <p className="text-sm text-black/75">{formatPrice(product.price)}</p>
                  <Link
                    href={product.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center border border-black px-4 py-2 text-sm uppercase tracking-wider transition-colors hover:bg-black hover:text-white"
                  >
                    Shop Now
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
