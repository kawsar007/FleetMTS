import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { UseCases } from "@/components/sections/UseCases";
import { Features } from "@/components/sections/Features";
import { WhyUs } from "@/components/sections/WhyUs";
import { Reviews } from "@/components/sections/Reviews";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <ProductShowcase />
        <UseCases />
        <Features />
        <WhyUs />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
