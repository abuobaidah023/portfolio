"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { personal, stats } from "@/data";

export function IntroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.6, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);

  return (
    <section ref={ref} className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="editorial-grid items-center gap-12">
          <motion.div style={{ opacity, y }} className="col-span-12 lg:col-span-6">
            <p className="text-xs uppercase tracking-[0.2em] text-accent">Introduction</p>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl text-cream md:text-5xl">
              {personal.fullName}
            </h2>
            <p className="mt-2 text-sm text-muted">{personal.title}</p>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted">
              From six years of Dars-e-Nizami Islamic studies and pharmacy practice to
              specialized SEO and organic marketing — I bring analytical precision and
              methodical strategy to every engagement. Currently at Ranktude while
              maintaining an independent consulting practice.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-border/60 p-4"
                >
                  <p className="font-[family-name:var(--font-display)] text-2xl text-accent">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[10px] uppercase tracking-wider text-muted">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            style={{ opacity, scale: imageScale }}
            className="col-span-12 lg:col-span-6"
          >
            <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-2xl border border-border/60">
              <Image
                src={personal.profileImage}
                alt={`${personal.fullName} — SEO Specialist`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-[family-name:var(--font-display)] text-xl text-cream">
                  {personal.shortName}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-accent">
                  SEO & Organic Marketing Consultant
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
