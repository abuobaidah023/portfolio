"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { skillCards, tools } from "@/data";
import { StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

export function StaggeredGridSection() {
  const allCards = [
    ...skillCards.map((s) => ({ ...s, type: "skill" as const })),
    ...tools.map((t) => ({
      id: t.id,
      title: t.name,
      description: t.description,
      type: "tool" as const,
      abbr: t.abbr,
      color: t.color,
    })),
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-accent">Capabilities</p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl text-cream">
            Skills & tools at your service
          </h2>
        </motion.div>

        <StaggerContainer className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {allCards.map((card) => (
            <StaggerItem key={card.id}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="h-full rounded-2xl border border-border/60 bg-elevated/20 p-6"
              >
                {"abbr" in card && card.abbr ? (
                  <span
                    className="inline-flex h-8 w-8 items-center justify-center rounded-md text-[10px] font-semibold text-ink"
                    style={{ backgroundColor: card.color }}
                  >
                    {card.abbr}
                  </span>
                ) : (
                  <span className="inline-block h-1 w-8 rounded-full bg-accent" />
                )}
                <h3 className="mt-4 font-[family-name:var(--font-display)] text-lg text-cream">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{card.description}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-flex rounded-lg border border-border px-7 py-3 text-sm tracking-wide text-cream transition-colors hover:border-accent/40 hover:bg-elevated"
          >
            Start a conversation
          </Link>
        </div>
      </div>
    </section>
  );
}
