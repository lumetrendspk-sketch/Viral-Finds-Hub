import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Collection } from "@/components/collection";
import { HowToOrder } from "@/components/how-to-order";
import { Featured } from "@/components/featured";
import { About } from "@/components/about";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Collection />
      <HowToOrder />
      <Featured />
      <About />
      <Footer />
    </main>
  );
}
