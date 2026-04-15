"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border py-3"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="group relative">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-14%20at%207.49.01%20PM-MzlvzVXLnqdeUVZvLk2EckPnpfzuCj.jpeg"
            alt="Lumetrends - Fashion & Style"
            width={120}
            height={60}
            className="h-12 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          <Link
            href="#collection"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
          >
            Collection
          </Link>
          <Link
            href="#how-to-order"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
          >
            How to Order
          </Link>
          <Link
            href="#about"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
          >
            About
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="https://www.instagram.com/lumetrends?igsh=amhscmNzYWo5YXRo"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium transition-all duration-300 hover:bg-accent hover:scale-105"
          >
            <Instagram className="w-4 h-4" />
            Order Now
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border transition-all duration-300 overflow-hidden",
          isMobileMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="container mx-auto px-6 py-6 flex flex-col gap-4">
          <Link
            href="#collection"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-lg font-medium text-foreground py-2 border-b border-border/50 transition-colors hover:text-accent"
          >
            Collection
          </Link>
          <Link
            href="#how-to-order"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-lg font-medium text-foreground py-2 border-b border-border/50 transition-colors hover:text-accent"
          >
            How to Order
          </Link>
          <Link
            href="#about"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-lg font-medium text-foreground py-2 border-b border-border/50 transition-colors hover:text-accent"
          >
            About
          </Link>
          <Link
            href="https://www.instagram.com/lumetrends?igsh=amhscmNzYWo5YXRo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-3 text-sm font-medium mt-2 transition-all duration-300 hover:bg-accent"
          >
            <Instagram className="w-4 h-4" />
            Order Now
          </Link>
        </nav>
      </div>
    </header>
  );
}
