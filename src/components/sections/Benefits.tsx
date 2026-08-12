import { PageContainer } from "@/components/layout/PageContainer";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Benefit, benefits } from "@/config/benefits";
import { MapPin } from "lucide-react";
import Image from "next/image";

// Unsplash images for each benefit
const benefitImages: Record<string, string> = {
  "vehicle-management": "https://plus.unsplash.com/premium_photo-1740893252858-62755ad9204f?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "live-tracking": "https://images.unsplash.com/photo-1625217527288-93919c99650a?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "reports": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center&auto=format",
  "apps": "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&crop=center&auto=format",
  "alerts": "https://plus.unsplash.com/premium_photo-1719491716646-9525cc8bdc3b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "overspeed": "https://plus.unsplash.com/premium_photo-1671462506019-42c8876119e0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

function BenefitCard({ benefit }: { benefit: Benefit }) {
  const imageUrl = benefitImages[benefit.id];

  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-xl2 border border-line bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
      {/* Top-edge accent line, matches ProductCard's hover treatment */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-signal/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      />

      {/* Visual panel with full image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-mist">
        <Image
          src={imageUrl}
          alt={benefit.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          unoptimized
        />
        {/* Overlay gradients for consistent design */}
        <div
          className="absolute inset-0 bg-grid-light bg-[length:24px_24px] opacity-70 mix-blend-overlay"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-br from-signal-soft/60 via-transparent to-live/10"
          aria-hidden="true"
        />
      </div>

      {/* Copy */}
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="font-display text-lg font-semibold text-ink sm:text-xl">
          {benefit.title}
        </h3>
        <p className="mt-2.5 text-[15px] leading-relaxed text-slate">
          {benefit.description}
        </p>
      </div>
    </div>
  );
}

export function Benefits() {
  return (
    <section id="benefits" className="bg-paper py-24 sm:py-28">
      <PageContainer>
        <AnimatedSection>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl lg:text-[2.75rem]">
              Benefits of Our Fleet Tracking Platform
            </h2>

            {/* Decorative line–icon–line divider */}
            <div className="mt-6 flex items-center justify-center gap-4" aria-hidden="true">
              <span className="h-px w-14 bg-line sm:w-24" />
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-signal-soft text-signal">
                <MapPin className="h-4 w-4" strokeWidth={1.75} />
              </span>
              <span className="h-px w-14 bg-line sm:w-24" />
            </div>
          </div>
        </AnimatedSection>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {benefits.map((benefit, i) => (
            <AnimatedSection key={benefit.id} delay={i * 0.08}>
              <BenefitCard benefit={benefit} />
            </AnimatedSection>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}