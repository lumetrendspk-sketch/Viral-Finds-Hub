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
    <main className="min-h-screen bg-white text-black antialiased">
      <header className="bg-white">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-6 py-4 md:px-8">
          <div className="flex items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Image
                src="/viral-find-hub-logo.png"
                alt="Viral Finds Hub logo"
                width={40}
                height={40}
                className="h-10 w-10 shrink-0 rounded-full object-cover"
                priority
              />
              <span className="font-nav text-3xl font-semibold tracking-tight text-black">
                Viral Finds Hub
              </span>
            </div>
            <nav className="hidden items-center gap-8 md:flex" aria-label="Top navigation">
              {["Bags", "Shoes", "Beauty", "Jewelry"].map((item) => (
                <span
                  key={item}
                  className="font-nav text-[11px] font-medium uppercase tracking-[0.22em] text-neutral-700"
                >
                  {item}
                </span>
              ))}
              <span className="text-lg text-neutral-700">⌕</span>
            </nav>
          </div>

          <nav
            className="flex flex-wrap items-center gap-2"
            aria-label="Categories"
          >
            {PRODUCT_CATEGORIES.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-sm border px-4 py-2 font-nav text-[13px] font-medium tracking-wide transition-colors ${
                    isActive
                      ? "border-black bg-black text-white"
                      : "border-neutral-200 bg-white text-black hover:border-neutral-400"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </nav>
        </div>
      </header>

      <section className="mx-auto w-full max-w-7xl px-6 pb-28 pt-8 md:px-8">
        <div className="mb-12 text-center md:mb-16">
          <h1 className="font-display text-5xl font-medium tracking-tight md:text-7xl">
            Discover Trending Finds
          </h1>
          <p className="mt-5 font-nav text-lg tracking-[0.04em] text-neutral-500 md:text-3xl">
            Handpicked viral products you'll love <span className="text-boutique-gold">☆</span>
          </p>
          <button className="mt-8 rounded-full bg-black px-10 py-3 font-nav text-base font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-neutral-800 md:text-lg">
            Explore Now
          </button>
        </div>

        <div className="mb-10">
          <label className="block">
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search"
              className="w-full rounded-xl border border-neutral-200 bg-white py-4 pl-12 pr-4 font-nav text-base tracking-[0.02em] text-black placeholder:text-neutral-400 outline-none transition-colors focus:border-neutral-400"
            />
            <span className="pointer-events-none relative -top-11 left-4 block w-fit text-neutral-400">⌕</span>
          </label>
        </div>

        {filteredProducts.length === 0 ? (
          <p className="max-w-md font-display text-xl font-normal leading-relaxed text-neutral-500">
            No pieces match your search. Try another term or category.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 md:gap-8 lg:grid-cols-4 lg:gap-10">
            {filteredProducts.map((product) => (
              <article
                key={product.id}
                className="group overflow-hidden border border-neutral-200/80 bg-white"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center transition-transform duration-700 ease-out will-change-transform group-hover:scale-[1.03]"
                  />
                </div>

                <div className="flex min-h-[174px] flex-col p-5">
                  <h2 className="min-h-[58px] line-clamp-2 font-display text-xl font-medium leading-snug tracking-[0.01em] text-black md:text-2xl">
                    {product.title}
                  </h2>
                  <p className="mt-2 font-nav text-sm tracking-[0.06em] text-neutral-500">
                    {formatPrice(product.price)}
                  </p>
                  <div className="mt-auto pt-5">
                    <Link
                      href={product.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center border border-black bg-transparent px-5 py-3 font-nav text-[11px] font-semibold uppercase tracking-[0.26em] text-black transition-colors duration-300 hover:bg-black hover:text-white"
                    >
                      SHOP NOW
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
