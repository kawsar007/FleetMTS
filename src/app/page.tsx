import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Benefits } from "@/components/sections/Benefits";
import { BrandTagline } from "@/components/sections/BrandTagline";
import { Contact } from "@/components/sections/Contact";
import { Features } from "@/components/sections/Features";
import { Hero } from "@/components/sections/Hero";
import { OurTeam } from "@/components/sections/OurTeam";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { Reviews } from "@/components/sections/Reviews";
import { UseCases } from "@/components/sections/UseCases";
import { WhyUs } from "@/components/sections/WhyUs";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <BrandTagline />
        <ProductShowcase />
        <Benefits />
        <UseCases />
        <Features />
        <WhyUs />
        <Reviews />
        <OurTeam />
        <Contact />

      </main>
      <Footer />
    </>
  );
}
