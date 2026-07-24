import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { personal, aboutJourney } from "@/data";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "About — M Abuobaida Nasir",
  description:
    "Journey from Dars-e-Nizami Islamic studies and pharmacy to SEO specialist — Local SEO, GBP, and GEO/AIO expertise.",
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-40 pb-16">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.2em] text-accent">About</p>
            <h1 className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-5xl text-cream md:text-6xl">
              A unique path to precision SEO
            </h1>
          </FadeIn>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="editorial-grid items-start gap-12">
            <FadeIn className="col-span-12 lg:col-span-5">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-border/60">
                <Image
                  src={personal.profileImage}
                  alt={personal.fullName}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 400px"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.1} className="col-span-12 lg:col-span-7">
              <div className="space-y-6 text-sm leading-relaxed text-muted">
                <p>
                  I&apos;m <strong className="text-cream">{personal.fullName}</strong>, born{" "}
                  {personal.dob}. My journey spans rigorous Islamic education, healthcare
                  practice, and now specialized SEO and organic marketing — a path that
                  shaped my analytical, methodical approach to search optimization.
                </p>
                <p>
                  Currently serving as SEO Specialist at{" "}
                  <strong className="text-cream">Ranktude</strong> (Dec 2025 — Present)
                  while maintaining an independent consulting practice since May 2025.
                  This dual perspective gives me both agency-scale systems and direct
                  client relationship depth.
                </p>
                <p>
                  Local businesses trust me to dominate Google Maps. E-commerce brands rely
                  on me for organic revenue. Forward-thinking companies engage me for GEO/AIO
                  — ensuring visibility in ChatGPT, Perplexity, and AI-powered answer engines.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={personal.social.linkedin.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-border px-5 py-2.5 text-xs uppercase tracking-wider text-muted transition-colors hover:border-accent/40 hover:text-cream"
                >
                  LinkedIn Profile
                </a>
                <Link
                  href="/contact"
                  className="rounded-lg bg-accent px-5 py-2.5 text-xs uppercase tracking-wider text-ink transition-opacity hover:opacity-90"
                >
                  Get in Touch
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-surface/30 py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.2em] text-accent">Journey</p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl text-cream">
              Education & career evolution
            </h2>
          </FadeIn>
          <StaggerContainer className="mt-12 space-y-6">
            {aboutJourney.map((item) => (
              <StaggerItem
                key={item.phase}
                className="rounded-2xl border border-border/60 p-8 md:p-10"
              >
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-accent">
                      {item.phase}
                    </p>
                    <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl text-cream">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted">{item.period}</p>
                </div>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted">
                  {item.body}
                </p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.2em] text-accent">Background</p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl text-cream">
              Core qualifications
            </h2>
          </FadeIn>
          <StaggerContainer className="mt-12 grid gap-4 md:grid-cols-2">
            {personal.background.map((item) => (
              <StaggerItem
                key={item}
                className="flex items-start gap-3 rounded-xl border border-border/60 p-6"
              >
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                <p className="text-sm text-muted">{item}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
