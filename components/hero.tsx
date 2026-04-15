"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowDown, Instagram } from "lucide-react";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(180,150,120,0.15),transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(180,150,120,0.1),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <p
              className={`text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              Luxury Lawn Collection 2026
            </p>

            <h1
              className={`font-serif text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] text-foreground mb-6 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <span className="block text-balance">Made for</span>
              <span className="block text-accent">Comfort</span>
            </h1>

            <p
              className={`text-lg md:text-xl text-muted-foreground max-w-md mx-auto lg:mx-0 mb-8 leading-relaxed transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              Discover the latest Pakistani designer lawn collections including
              Maria B and other top brands. Premium quality, trendy designs,
              affordable prices.
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: "800ms" }}
            >
              <Link
                href="https://www.instagram.com/lumetrends?igsh=amhscmNzYWo5YXRo"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-sm font-medium tracking-wide transition-all duration-300 hover:bg-accent hover:scale-105 hover:shadow-lg"
              >
                <Instagram className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                Start Order Now
              </Link>
              <Link
                href="#collection"
                className="inline-flex items-center justify-center gap-2 border border-primary text-primary px-8 py-4 text-sm font-medium tracking-wide transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
              >
                Explore Collection
              </Link>
            </div>
          </div>

          {/* Hero Video */}
          <div
            className={`relative order-1 lg:order-2 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:max-w-none">
              <div className="absolute -inset-4 bg-accent/10 -z-10 transform rotate-3" />
              <div className="relative w-full h-full bg-muted overflow-hidden">
                <iframe
                  src="https://player.cloudinary.com/embed/?cloud_name=dxpflbirm&public_id=WhatsApp_Video_2026-04-14_at_11.25.51_PM_ay1w4k"
                  title="Lume Trends hero video"
                  className="w-full h-full border-0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-accent/30" />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/5" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "1000ms" }}
        >
          <Link
            href="#collection"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="text-xs uppercase tracking-[0.2em]">
              Scroll to explore
            </span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </Link>
        </div>
      </div>
    </section>
  );
}
