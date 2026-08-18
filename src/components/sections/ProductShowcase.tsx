import { PageContainer } from "@/components/layout/PageContainer";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { products } from "@/config/products";
import { ProductCard } from "./ProductCard";

export function ProductShowcase() {
  return (
    <section id="products" className="bg-mist py-24 sm:py-28">
      <PageContainer>
        <AnimatedSection>
          <SectionHeading
            align="center"
            eyebrow="Our solutions"
            title="Two products. One connected fleet."
            description="VTS keeps your eyes on every vehicle in real time. VMS keeps every record, driver, and schedule organized. Together, they give you complete operational control."
            className="mx-auto"
          />
        </AnimatedSection>

        {/* Stack cards vertically with full width */}
        <div className="mt-14 flex flex-col gap-8 max-w-6xl mx-auto">
          {products.map((product, i) => (
            <AnimatedSection key={product.id} delay={i * 0.12} className="w-full">
              <ProductCard product={product} />
            </AnimatedSection>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}