import { PageContainer } from "@/components/layout/PageContainer";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { reasons, trustStats } from "@/config/why-us";

export function WhyUs() {
  return (
    <section id="why-us" className="relative overflow-hidden bg-ink-soft py-24 sm:py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[360px] w-[640px] -translate-x-1/2 rounded-full bg-signal/15 blur-[110px]" />

      <PageContainer className="relative grid gap-14 lg:grid-cols-[1fr_0.85fr] lg:gap-10">
        <div>
          <AnimatedSection>
            <SectionHeading
              tone="dark"
              eyebrow="Why FleetMTS"
              title="The details that make fleets trust their data"
              description="Anyone can show a map with dots on it. Here's what actually holds up once your operation depends on it."
            />
          </AnimatedSection>

          <div className="mt-10 space-y-7">
            {reasons.map(({ id, icon: Icon, title, description }, i) => (
              <AnimatedSection key={id} delay={i * 0.08} direction="right">
                <div className="flex gap-4">
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white">
                    <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-white">
                      {title}
                    </h3>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-slate-dim">
                      {description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        <AnimatedSection direction="left" delay={0.15}>
          <div className="relative overflow-hidden rounded-xl2 border border-white/10 bg-white/[0.03] p-7 sm:p-8">
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-signal/20 blur-2xl" />

            <div className="relative flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-live" aria-hidden="true" />
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-live">
                System status: All operational
              </span>
            </div>

            <p className="relative mt-4 text-sm leading-relaxed text-slate-dim">
              Live figures from fleets running on FleetMTS today.
            </p>

            <dl className="relative mt-8 grid grid-cols-2 gap-x-6 gap-y-8">
              {trustStats.map((stat) => (
                <div key={stat.label}>
                  <dt className="font-mono text-xs uppercase tracking-wide text-slate-dim">
                    {stat.label}
                  </dt>
                  <dd className="mt-1.5 font-display text-3xl font-semibold text-white">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="relative mt-8 border-t border-white/10 pt-6">
              <p className="text-sm text-slate-dim">
                Onboarding takes days, not months, with a dedicated specialist
                guiding your team through setup.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </PageContainer>
    </section>
  );
}
