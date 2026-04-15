"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Sparkles, Truck, ShieldCheck, Clock } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Premium Quality",
    description: "Only authentic designer fabrics from trusted brands",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Quick and reliable shipping across Pakistan",
  },
  {
    icon: ShieldCheck,
    title: "Genuine Products",
    description: "100% original designer lawn collections",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Always here to help with your orders",
  },
];

export function About() {
  const { ref: headerRef, isVisible: headerVisible } =
    useScrollAnimation<HTMLDivElement>();

  return (
    <section id="about" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-3">
            Why Choose Us
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-6">
            About Lumetrends
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We bring you the latest Pakistani designer lawn collections
            including Maria B and other top brands. Premium quality unstitched
            suits, trendy designs, and affordable prices - all in one place.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      className={`group text-center p-8 bg-card border border-border/50 transition-all duration-700 hover:border-accent/30 hover:shadow-lg ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary mb-6 transition-all duration-500 group-hover:bg-accent/10 group-hover:scale-110">
        <feature.icon className="w-7 h-7 text-accent" />
      </div>
      <h3 className="font-serif text-xl font-semibold text-foreground mb-3 transition-colors duration-300 group-hover:text-accent">
        {feature.title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {feature.description}
      </p>
    </div>
  );
}
