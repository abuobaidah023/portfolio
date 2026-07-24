"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { featureCards, services } from "@/data";

type HorizontalScrollProps = {
  direction: "left" | "right";
  title: string;
  subtitle: string;
  items: readonly { id: string; title: string; description: string }[];
};

function HorizontalScrollRow({
  direction,
  title,
  subtitle,
  items,
}: HorizontalScrollProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "right" ? ["5%", "-35%"] : ["-35%", "5%"]
  );

  return (
    <section ref={ref} className="overflow-hidden py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <p className="text-xs uppercase tracking-[0.2em] text-accent">{subtitle}</p>
        <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl text-cream md:text-4xl">
          {title}
        </h2>
      </div>

      <motion.div style={{ x }} className="mt-12 flex gap-5 px-6 md:px-8">
        {items.map((item, i) => (
          <div
            key={item.id}
            className="w-[280px] shrink-0 rounded-2xl border border-border/60 bg-elevated/30 p-6 md:w-[320px]"
          >
            <span className="font-[family-name:var(--font-display)] text-3xl text-accent/50">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-4 font-[family-name:var(--font-display)] text-xl text-cream">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

export function FeatureScrollSection() {
  return (
    <HorizontalScrollRow
      direction="right"
      title="Core capabilities"
      subtitle="Expertise"
      items={featureCards}
    />
  );
}

export function ServicesScrollSection() {
  const items = services.slice(0, 5).map((s) => ({
    id: s.id,
    title: s.title,
    description: s.description,
  }));

  return (
    <div className="border-y border-border/40 bg-surface/20">
      <HorizontalScrollRow
        direction="left"
        title="Services & case focus"
        subtitle="Services"
        items={items}
      />
    </div>
  );
}
