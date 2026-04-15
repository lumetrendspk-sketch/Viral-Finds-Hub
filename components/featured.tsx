"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function Featured() {
  const { ref: contentRef, isVisible: contentVisible } =
    useScrollAnimation<HTMLDivElement>();
  const { ref: imageRef, isVisible: imageVisible } =
    useScrollAnimation<HTMLDivElement>();

  return (
    <section className="py-24 md:py-32 bg-primary text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div
            ref={imageRef}
            className={`relative transition-all duration-1000 ${
              imageVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="relative aspect-[4/5] max-w-lg mx-auto lg:mx-0">
              <div className="absolute -inset-4 bg-accent/20 -z-10 transform -rotate-3" />
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-14%20at%2011.25.40%20PM-RUS3iOga3471CkZmwjpktR7Uxki52E.jpeg"
                  alt="Rang-e-Bahar Collection - Black Floral Embroidered Suit"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            ref={contentRef}
            className={`text-center lg:text-left transition-all duration-1000 ${
              contentVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-primary-foreground/70 mb-4">
              Featured Collection
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
              Maria.b
              <span className="block text-2xl md:text-3xl font-normal mt-2 text-primary-foreground/80">
                Unstitched Embroidered Lawn Vol. II
              </span>
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-md mx-auto lg:mx-0 mb-8 leading-relaxed">
              Experience the essence of spring with our exclusive embroidered
              lawn collection. Each piece tells a story of craftsmanship and
              elegance, perfect for the modern woman.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="https://www.instagram.com/lumetrends?igsh=amhscmNzYWo5YXRo"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 bg-primary-foreground text-primary px-8 py-4 text-sm font-medium tracking-wide transition-all duration-300 hover:bg-accent hover:text-accent-foreground hover:scale-105"
              >
                <Instagram className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                Order Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
