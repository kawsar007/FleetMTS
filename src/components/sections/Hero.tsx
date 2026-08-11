import { PageContainer } from "@/components/layout/PageContainer";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { SecondaryButton } from "@/components/ui/SecondaryButton";
import { ClientLogos } from "./ClientLogos";
import { HeroVisual } from "./HeroVisual";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-10 pt-36 sm:pb-14 sm:pt-44">
      {/* Ambient backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-grid-light bg-[length:36px_36px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />
      <div className="pointer-events-none absolute left-1/2 top-[-10%] h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-signal/10 blur-[100px]" />

      <PageContainer className="relative grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        <div>
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 rounded-full border border-signal/20 bg-signal-soft px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-signal-dim">
              <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden="true" />
              Fleet intelligence platform
            </span>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.06] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
              Smarter fleet management.
              <br />
              <span className="text-signal">Complete control.</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.16}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate">
              Track, manage, and optimize your entire vehicle fleet from one
              connected platform, real-time GPS visibility, streamlined
              operations, and the data to run a more efficient business.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.24}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <PrimaryButton href="#products" withArrow>
                Explore Our Solutions
              </PrimaryButton>
              <SecondaryButton href="#contact">Talk to Our Team</SecondaryButton>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.32}>
            <dl className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-line pt-6">
              <div>
                <dt className="font-mono text-xs uppercase tracking-wide text-slate-dim">
                  Vehicles tracked
                </dt>
                <dd className="mt-1 font-display text-2xl font-semibold text-ink">
                  12k+
                </dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase tracking-wide text-slate-dim">
                  Uptime
                </dt>
                <dd className="mt-1 font-display text-2xl font-semibold text-ink">
                  99.9%
                </dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase tracking-wide text-slate-dim">
                  Fleet operators
                </dt>
                <dd className="mt-1 font-display text-2xl font-semibold text-ink">
                  400+
                </dd>
              </div>
            </dl>
          </AnimatedSection>
        </div>

        <AnimatedSection direction="left" delay={0.2} className="relative">
          <HeroVisual />
        </AnimatedSection>
      </PageContainer>

      <PageContainer>
        {/* Trusted by / client logos */}
        <AnimatedSection delay={0.4} className="relative mt-16 sm:mt-20">

          <p className="text-center font-mono text-xs uppercase tracking-[0.14em] text-slate-dim sm:text-left">
            Trusted by fleets at
          </p>

          <div className="mt-6">
            <ClientLogos />
          </div>
        </AnimatedSection>
      </PageContainer>
    </section>
  );
}