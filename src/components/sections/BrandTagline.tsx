import { PageContainer } from "@/components/layout/PageContainer";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { OptimizedImage } from "../ui/OptimizedImage";

export function BrandTagline() {
  return (
    <section id="top" className="relative overflow-hidden pb-10 pt-16 sm:pb-14 sm:pt-20">
      {/* Ambient backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-grid-light bg-[length:36px_36px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />
      <div className="pointer-events-none absolute left-1/2 top-[-10%] h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-signal/10 blur-[100px]" />

      <PageContainer className="relative grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        <div className="relative h-[300px] w-full sm:h-[400px] md:h-[500px] lg:h-full lg:min-h-[500px]">
          <OptimizedImage
            src="/slogan.png"
            alt="FleetMTS live tracking preview showing a truck, van, car, motorbike, auto-rickshaw, and bus tracked on a city map"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-contain"
          />
        </div>

        {/* <div className="relative mx-auto aspect-[25/12] w-full max-w-[560px] sm:max-w-[640px] lg:max-w-none">
          <OptimizedImage
            src="/slogan2.jpeg"
            alt="FleetMTS live tracking preview showing a truck, van, car, motorbike, auto-rickshaw, and bus tracked on a city map"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-contain"
          />
        </div> */}
        <div>
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 rounded-full border border-signal/20 bg-signal-soft px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-signal-dim">
              <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden="true" />
              Fleet intelligence platform
            </span>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.06] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
              Fleet monitoring shouldn’t be complicated, it should be automated
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.16}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate">
              Managing a fleet of vehicles can be a complex task, but it doesn’t have to be. With the right tools and automation strategies, you can keep track of every detail surrounding your fleet and streamline operational process while improving efficiency.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.24}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <PrimaryButton href="#products" withArrow>
                Let's discuss
              </PrimaryButton>
              {/* <SecondaryButton href="#contact">Talk to Our Team</SecondaryButton> */}
            </div>
          </AnimatedSection>
        </div>


      </PageContainer>
    </section>
  );
}