import { PageContainer } from "@/components/layout/PageContainer";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { features } from "@/config/features";

export function Features() {
  return (
    <section id="features" className="bg-paper py-24 sm:py-28">
      <PageContainer>
        <AnimatedSection>
          <SectionHeading
            align="center"
            eyebrow="Platform capabilities"
            title="Everything a modern fleet needs"
            description="The features under both VTS and VMS, working together as one connected system rather than two separate tools."
            className="mx-auto"
          />
        </AnimatedSection>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ id, icon: Icon, title, description }, i) => (
            <AnimatedSection key={id} delay={i * 0.06}>
              <div className="group h-full rounded-xl2 border border-line bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-signal/20 bg-signal-soft text-signal transition-colors duration-300 group-hover:bg-signal group-hover:text-white">
                  <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink">
                  {title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-slate">
                  {description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
