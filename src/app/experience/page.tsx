"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { experience, caseStudies } from "@/data";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

export default function ExperiencePage() {
  const [expandedCase, setExpandedCase] = useState<string | null>(null);

  return (
    <>
      <section className="pt-40 pb-16">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.2em] text-accent">Experience</p>
            <h1 className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-5xl text-cream md:text-6xl">
              Proven track record in organic growth
            </h1>
          </FadeIn>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <FadeIn>
            <p className="mb-8 text-xs uppercase tracking-[0.2em] text-accent">Timeline</p>
          </FadeIn>
          <div className="relative space-y-0">
            {experience.map((item, i) => (
              <FadeIn key={item.id} delay={i * 0.1}>
                <div className="relative border-l border-border/60 pb-12 pl-8 last:pb-0">
                  <div className="absolute -left-1.5 top-1 h-3 w-3 rounded-full border-2 border-accent bg-ink" />
                  <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="font-[family-name:var(--font-display)] text-2xl text-cream">
                        {item.role}
                      </h3>
                      <p className="mt-1 text-sm text-accent">{item.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted">{item.period}</p>
                      <p className="text-xs uppercase tracking-wider text-muted/60">
                        {item.type}
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {item.achievements.map((a) => (
                      <li key={a} className="flex items-start gap-2 text-sm text-muted">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-surface/30 py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.2em] text-accent">Case Studies</p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl text-cream">
              Problem · Solution · Results
            </h2>
          </FadeIn>

          <StaggerContainer className="mt-12 space-y-4">
            {caseStudies.map((study) => (
              <StaggerItem key={study.id}>
                <div className="overflow-hidden rounded-2xl border border-border/60 bg-elevated/30">
                  <button
                    onClick={() =>
                      setExpandedCase(expandedCase === study.id ? null : study.id)
                    }
                    className="flex w-full items-center justify-between p-6 text-left md:p-8"
                  >
                    <div>
                      <span className="text-xs uppercase tracking-wider text-muted">
                        {study.industry}
                      </span>
                      <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl text-cream">
                        {study.client}
                      </h3>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="hidden text-right sm:block">
                        <p className="font-[family-name:var(--font-display)] text-2xl text-accent">
                          {study.metric}
                        </p>
                        <p className="text-xs text-muted">{study.metricLabel}</p>
                      </div>
                      <ChevronDown
                        size={20}
                        className={`text-muted transition-transform ${
                          expandedCase === study.id ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </button>
                  <AnimatePresence>
                    {expandedCase === study.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-border/40 px-6 pb-8 pt-4 md:px-8">
                          <div className="grid gap-6 md:grid-cols-3">
                            <div>
                              <p className="mb-2 text-xs uppercase tracking-wider text-accent">
                                Problem
                              </p>
                              <p className="text-sm leading-relaxed text-muted">
                                {study.problem}
                              </p>
                            </div>
                            <div>
                              <p className="mb-2 text-xs uppercase tracking-wider text-accent">
                                Solution
                              </p>
                              <p className="text-sm leading-relaxed text-muted">
                                {study.solution}
                              </p>
                            </div>
                            <div>
                              <p className="mb-2 text-xs uppercase tracking-wider text-accent">
                                Results
                              </p>
                              <ul className="space-y-2">
                                {study.results.map((r) => (
                                  <li
                                    key={r}
                                    className="flex items-start gap-2 text-sm text-cream"
                                  >
                                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                                    {r}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 text-center md:px-8">
          <FadeIn>
            <Link
              href="/contact"
              className="inline-flex rounded-lg border border-border px-8 py-3.5 text-sm text-cream transition-colors hover:border-accent/40"
            >
              Discuss your project
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
