import { Mail, Phone, MessageCircle, Clock } from "lucide-react";
import { PageContainer } from "@/components/layout/PageContainer";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/config/site";
import { ContactForm } from "./ContactForm";

export function Contact() {
  const { email, phone, whatsapp, whatsappMessage } = siteConfig.contact;
  const whatsappHref = `https://wa.me/${whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="contact" className="bg-paper py-24 sm:py-28">
      <PageContainer>
        <AnimatedSection>
          <SectionHeading
            align="center"
            eyebrow="Get in touch"
            title="Let's talk about your fleet"
            description="Tell us a bit about your operation and we'll help you find the right fit, whether that's VTS, VMS, or both."
            className="mx-auto"
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="mt-14">
          <div className="grid overflow-hidden rounded-xl2 border border-line shadow-card lg:grid-cols-[0.85fr_1.15fr]">
            {/* Dark info panel */}
            <div className="relative flex flex-col justify-between overflow-hidden bg-ink p-8 sm:p-10">
              <div className="pointer-events-none absolute -right-14 -top-14 h-48 w-48 rounded-full bg-signal/20 blur-2xl" />

              <div className="relative">
                <h3 className="font-display text-2xl font-semibold text-white">
                  Talk to our team
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-dim">
                  Whether you&rsquo;re evaluating fleet software for the first
                  time or switching from something that isn&rsquo;t working,
                  we&rsquo;re glad to walk through it with you.
                </p>

                <ul className="mt-8 space-y-5">
                  <li>
                    <a
                      href={`mailto:${email}`}
                      className="group flex items-center gap-3 text-sm text-white transition-colors hover:text-live"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5">
                        <Mail className="h-4 w-4" aria-hidden="true" />
                      </span>
                      {email}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`tel:${phone.replace(/[^+\d]/g, "")}`}
                      className="group flex items-center gap-3 text-sm text-white transition-colors hover:text-live"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5">
                        <Phone className="h-4 w-4" aria-hidden="true" />
                      </span>
                      {phone}
                    </a>
                  </li>
                  <li>
                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 text-sm text-white transition-colors hover:text-live"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5">
                        <MessageCircle className="h-4 w-4" aria-hidden="true" />
                      </span>
                      Chat on WhatsApp
                    </a>
                  </li>
                </ul>
              </div>

              <div className="relative mt-10 flex items-center gap-3 border-t border-white/10 pt-6 text-xs text-slate-dim">
                <Clock className="h-4 w-4 shrink-0" aria-hidden="true" />
                Typical response time: under one business day
              </div>
            </div>

            {/* Light form panel */}
            <div className="bg-white p-8 sm:p-10">
              <ContactForm />
            </div>
          </div>
        </AnimatedSection>
      </PageContainer>
    </section>
  );
}
