"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const products = [
  {
    id: 1,
    name: "Purple Floral Print",
    category: "Maria B Lawn 3pc",
    media:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%209.43.28%20PM-9EFSKlA5Fx25UWfEOHbUQFnl5GOnxA.jpeg",
    link: "https://www.instagram.com/lumetrends?igsh=amhscmNzYWo5YXRo&product=1",
  },
  {
    id: 2,
    name: "Magenta Bandhani",
    category: "Maria B Lawn 3pc",
    media:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%209.43.27%20PM-mAMYg4yvUcIoF6Ej8aH9WNSnxbYcMi.jpeg",
    link: "https://www.instagram.com/lumetrends?igsh=amhscmNzYWo5YXRo&product=2",
  },
  {
    id: 3,
    name: "Beige Floral Garden",
    category: "Maria B Lawn 3pc",
    media:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%209.43.26%20PM-mOLmAEwPuOoPFgaj5QtJiMASQe5CHK.jpeg",
    link: "https://www.instagram.com/lumetrends?igsh=amhscmNzYWo5YXRo&product=3",
  },
  {
    id: 4,
    name: "Pink Blossom",
    category: "Maria B Lawn 3pc",
    media:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%209.43.29%20PM-t5Wkicwfeh3TdNVqr2eNV2I4Ow7ove.jpeg",
    link: "https://www.instagram.com/lumetrends?igsh=amhscmNzYWo5YXRo&product=4",
  },
  {
    id: 5,
    name: "Purple Embroidered",
    category: "Maria B Unstitched",
    media: "/maria-b-purple-embroidered.png",
    link: "https://www.instagram.com/lumetrends?igsh=amhscmNzYWo5YXRo&product=5",
  },
  {
    id: 6,
    name: "Red Royal Embroidered",
    category: "Premium Collection",
    media:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-14%20at%2010.02.32%20PM-FvAWn0JZCRfuWuM31Yw48YQnFLGCxk.jpeg",
    link: "https://www.instagram.com/lumetrends?igsh=amhscmNzYWo5YXRo&product=6",
  },
  {
    id: 7,
    name: "Teal Tropical Paradise",
    category: "Designer Lawn",
    media:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-14%20at%209.58.52%20PM-MCi3t4tmIIm3vYacqBLDYJhBPJigtE.jpeg",
    link: "https://www.instagram.com/lumetrends?igsh=amhscmNzYWo5YXRo&product=7",
  },
  {
    id: 8,
    name: "Black Floral Art",
    category: "Designer Collection",
    media:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-14%20at%2011.25.40%20PM-RUS3iOga3471CkZmwjpktR7Uxki52E.jpeg",
    link: "https://www.instagram.com/lumetrends?igsh=amhscmNzYWo5YXRo&product=8",
  },
  {
    id: 9,
    name: "Black Embroidered",
    category: "Maria B Unstitched",
    media: "/maria-b-black-embroidered.png",
    link: "https://www.instagram.com/lumetrends?igsh=amhscmNzYWo5YXRo&product=9",
  },
  {
    id: 10,
    name: "Blue Embroidered",
    category: "Maria B Unstitched",
    media: "/maria-b-blue-embroidered.png",
    link: "https://www.instagram.com/lumetrends?igsh=amhscmNzYWo5YXRo&product=10",
  },
];

function ProductCard({
  product,
  index,
}: {
  product: (typeof products)[0];
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      className={`group transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-muted mb-4">
        <Image
          src={product.media}
          alt={product.name}
          fill
          className="object-cover transition-all duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-all duration-500" />

        {/* Quick Order Button */}
        <Link
          href={product.link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-4 left-4 right-4 flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 text-sm font-medium opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500"
        >
          <Instagram className="w-4 h-4" />
          Order Now
        </Link>
      </div>

      <div className="space-y-1">
        <p className="text-xs uppercase tracking-wider text-muted-foreground">
          {product.category}
        </p>
        <h3 className="font-serif text-lg font-medium text-foreground group-hover:text-accent transition-colors duration-300">
          {product.name}
        </h3>
        <Link
          href={product.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors duration-300"
        >
          <Instagram className="w-4 h-4" />
          View Product Link
        </Link>
      </div>
    </div>
  );
}

export function Collection() {
  const { ref: headerRef, isVisible: headerVisible } =
    useScrollAnimation<HTMLDivElement>();

  return (
    <section id="collection" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-3">
            New Arrivals
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Latest Collection
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Explore our curated selection of premium Pakistani designer lawn
            suits, featuring exquisite embroidery and timeless elegance.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-16">
          <Link
            href="https://www.instagram.com/lumetrends?igsh=amhscmNzYWo5YXRo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-b-2 border-primary text-primary pb-1 text-sm font-medium tracking-wide transition-all duration-300 hover:border-accent hover:text-accent hover:gap-4"
          >
            View More Designs
            <span className="transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
