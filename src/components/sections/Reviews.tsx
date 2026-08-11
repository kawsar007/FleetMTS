import { PageContainer } from "@/components/layout/PageContainer";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StarRating } from "@/components/ui/StarRating";
import { testimonials } from "@/config/testimonials";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function Reviews() {
  return (
    <section id="reviews" className="bg-mist py-24 sm:py-28">
      <PageContainer>
        <AnimatedSection>
          <SectionHeading
            align="center"
            eyebrow="Trusted by fleets"
            title="What fleet teams say after switching"
            description="Real operators, real logistics teams, running their day-to-day on Fleetline."
            className="mx-auto"
          />
        </AnimatedSection>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.id} delay={i * 0.06}>
              <figure className="flex h-full flex-col rounded-xl2 border border-line bg-white p-7 shadow-card">
                <StarRating rating={t.rating} />

                <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-ink/85">
                  “{t.quote}”
                </blockquote>

                <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-signal-soft font-mono text-xs font-semibold text-signal-dim"
                    aria-hidden="true"
                  >
                    {initials(t.name)}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">{t.name}</p>
                    <p className="text-xs text-slate-dim">
                      {t.role}, {t.company}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </AnimatedSection>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
