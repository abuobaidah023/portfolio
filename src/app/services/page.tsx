import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/data";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Services — M Abuobaida Nasir",
  description:
    "Deep-dive SEO services: GMB optimization, Local SEO, Technical Audits, Organic Lead Strategies, and GEO/AIO.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="pt-40 pb-16">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.2em] text-accent">Services</p>
            <h1 className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-5xl text-cream md:text-6xl">
              SEO services engineered for commercial outcomes
            </h1>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted">
              From Google Maps dominance to AI search visibility — each service is
              structured around measurable KPIs and sustainable white-hat methodology.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="space-y-16">
            {services.map((service, i) => (
              <FadeIn key={service.id} delay={i * 0.05}>
                <div
                  id={service.id}
                  className="scroll-mt-40 rounded-3xl border border-border/60 bg-elevated/20 p-8 md:p-12"
                >
                  <div className="editorial-grid">
                    <div className="col-span-12 lg:col-span-5">
                      <p className="text-xs uppercase tracking-[0.2em] text-accent">
                        {service.subtitle}
                      </p>
                      <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl text-cream md:text-4xl">
                        {service.title}
                      </h2>
                      <p className="mt-4 text-sm leading-relaxed text-muted">
                        {service.description}
                      </p>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {service.highlights.map((h) => (
                          <span
                            key={h}
                            className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="col-span-12 mt-8 lg:col-span-7 lg:mt-0">
                      <div className="grid gap-8 md:grid-cols-2">
                        <div>
                          <p className="mb-4 text-xs uppercase tracking-wider text-cream">
                            Deliverables
                          </p>
                          <ul className="space-y-2">
                            {service.deliverables.map((d) => (
                              <li
                                key={d}
                                className="flex items-start gap-2 text-sm text-muted"
                              >
                                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                                {d}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="mb-4 text-xs uppercase tracking-wider text-cream">
                            Process
                          </p>
                          <ol className="space-y-3">
                            {service.process.map((step, idx) => (
                              <li key={step} className="flex items-start gap-3 text-sm text-muted">
                                <span className="font-[family-name:var(--font-display)] text-accent">
                                  {String(idx + 1).padStart(2, "0")}
                                </span>
                                {step}
                              </li>
                            ))}
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-surface/30 py-20">
        <div className="mx-auto max-w-7xl px-6 text-center md:px-8">
          <FadeIn>
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-cream">
              Ready to grow organically?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm text-muted">
              Book a complimentary strategy session and receive a free initial SEO audit
              and GBP assessment.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-lg bg-accent px-8 py-3.5 text-sm font-medium text-ink transition-opacity hover:opacity-90"
            >
              Book a Call
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
