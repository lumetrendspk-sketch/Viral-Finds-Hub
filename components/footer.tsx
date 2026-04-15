"use client";

import Link from "next/link";
import { Instagram } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function Footer() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });

  return (
    <footer
      ref={ref}
      className={`py-16 md:py-20 bg-primary text-primary-foreground transition-all duration-700 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h2 className="font-serif text-3xl font-semibold mb-4">
              LUME<span className="text-accent">TRENDS</span>
            </h2>
            <p className="text-primary-foreground/70 leading-relaxed mb-6 max-w-sm">
              Your destination for premium Pakistani designer lawn collections.
              Quality, style, and elegance delivered to your doorstep.
            </p>
            <Link
              href="https://www.instagram.com/lumetrends?igsh=amhscmNzYWo5YXRo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary-foreground hover:text-accent transition-colors duration-300"
            >
              <Instagram className="w-5 h-5" />
              @lumetrends.pk
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-3">
              <Link
                href="#collection"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
              >
                Collection
              </Link>
              <Link
                href="#how-to-order"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
              >
                How to Order
              </Link>
              <Link
                href="#about"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
              >
                About Us
              </Link>
              <Link
                href="https://www.instagram.com/lumetrends?igsh=amhscmNzYWo5YXRo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">
              Get in Touch
            </h3>
            <p className="text-primary-foreground/70 mb-6 leading-relaxed">
              Ready to order? Send us a message on Instagram and we&apos;ll get
              back to you quickly.
            </p>
            <Link
              href="https://www.instagram.com/lumetrends?igsh=amhscmNzYWo5YXRo"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-primary-foreground text-primary px-6 py-3 text-sm font-medium transition-all duration-300 hover:bg-accent hover:text-accent-foreground hover:scale-105"
            >
              <Instagram className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
              Start Order
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} Lumetrends. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/50">
            <Link
              href="#"
              className="hover:text-primary-foreground transition-colors duration-300"
            >
              Terms & Support
            </Link>
            <Link
              href="#"
              className="hover:text-primary-foreground transition-colors duration-300"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
