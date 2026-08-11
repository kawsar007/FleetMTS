import { PageContainer } from "@/components/layout/PageContainer";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useCases } from "@/config/use-cases";

export function UseCases() {
  return (
    <section id="use-cases" className="relative overflow-hidden bg-ink py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-dark bg-[length:32px_32px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_0%,black,transparent)]" />
      <div className="pointer-events-none absolute right-[-10%] top-1/3 h-72 w-72 rounded-full bg-signal/15 blur-[100px]" />
      <div className="pointer-events-none absolute left-[-10%] bottom-0 h-64 w-64 rounded-full bg-live/10 blur-[100px]" />

      <PageContainer className="relative">
        <AnimatedSection>
          <SectionHeading
            tone="dark"
            eyebrow="Built for every fleet"
            title="One platform, wherever your vehicles work"
            description="FleetMTS adapts to how your industry actually moves, not the other way around."
          />
        </AnimatedSection>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {useCases.map(({ id, icon: Icon, title, description, metric }, i) => (
            <AnimatedSection key={id} delay={i * 0.08}>
              <div className="group relative flex h-full flex-col rounded-xl2 border border-white/10 bg-white/[0.03] p-7 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.05]">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-live/25 bg-live/10 text-live">
                  <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                </div>

                <h3 className="mt-5 font-display text-xl font-semibold text-white">
                  {title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-slate-dim">
                  {description}
                </p>

                <div className="mt-6 flex items-baseline gap-2 border-t border-white/10 pt-5">
                  <span className="font-mono text-lg font-semibold text-live">
                    {metric.value}
                  </span>
                  <span className="text-xs text-slate-dim">{metric.label}</span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
