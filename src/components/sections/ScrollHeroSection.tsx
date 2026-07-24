"use client";

import dynamic from "next/dynamic";
import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { personal, heroFloatingCards, heroToolIcons } from "@/data";
import { useContactModal } from "@/components/ui/ContactModal";

const HelixCanvas = dynamic(() => import("@/components/three/HelixCanvas"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-28 w-28 rounded-full border border-border/40 bg-elevated/40" />
    </div>
  ),
});

function HelixWithScroll({ progress }: { progress: ReturnType<typeof useSpring> }) {
  const [value, setValue] = useState(0);
  useMotionValueEvent(progress, "change", setValue);
  return <HelixCanvas scrollProgress={value} className="absolute inset-0" />;
}

export function ScrollHeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { openContact } = useContactModal();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const heroOpacity = useTransform(smoothProgress, [0, 0.85, 1], [1, 1, 0]);
  const heroScale = useTransform(smoothProgress, [0, 1], [1, 0.94]);

  return (
    <section ref={containerRef} className="relative h-[280vh]">
      <motion.div
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="sticky top-0 flex h-screen flex-col overflow-hidden pt-36"
      >
        <div className="relative mx-auto flex h-full w-full max-w-7xl flex-1 items-center px-6 md:px-8">
          <div className="absolute left-6 top-1/2 z-10 hidden -translate-y-1/2 flex-col gap-4 lg:flex xl:left-8">
            {heroFloatingCards
              .filter((c) => c.side === "left")
              .map((card, i) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.12 }}
                  className="glass max-w-[200px] rounded-xl p-4 xl:max-w-[220px]"
                >
                  <p className="text-xs uppercase tracking-wider text-accent">{card.title}</p>
                  <p className="mt-2 text-[11px] leading-relaxed text-muted">{card.body}</p>
                </motion.div>
              ))}
          </div>

          <div className="relative mx-auto h-[50vh] w-full max-w-md md:h-[55vh] lg:max-w-lg">
            <HelixWithScroll progress={smoothProgress} />
          </div>

          <div className="absolute right-6 top-1/2 z-10 hidden -translate-y-1/2 flex-col gap-4 lg:flex xl:right-8">
            {heroFloatingCards
              .filter((c) => c.side === "right")
              .map((card, i) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35 + i * 0.12 }}
                  className="glass max-w-[200px] rounded-xl p-4 xl:max-w-[220px]"
                >
                  <p className="text-xs uppercase tracking-wider text-accent">{card.title}</p>
                  <p className="mt-2 text-[11px] leading-relaxed text-muted">{card.body}</p>
                </motion.div>
              ))}
          </div>

          <div className="pointer-events-none absolute inset-0 hidden lg:block">
            {heroToolIcons.map((tool, i) => {
              const positions = [
                "left-[18%] top-[22%]",
                "right-[18%] top-[28%]",
                "left-[22%] bottom-[28%]",
                "right-[22%] bottom-[22%]",
              ];
              return (
                <motion.div
                  key={tool.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className={`absolute ${positions[i]} glass flex items-center gap-2 rounded-lg px-3 py-2`}
                >
                  <span
                    className="flex h-7 w-7 items-center justify-center rounded-md text-[10px] font-semibold text-ink"
                    style={{ backgroundColor: tool.color }}
                  >
                    {tool.abbr}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-cream">
                    {tool.name.split(" ")[0]}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-12 md:px-8">
          <div className="flex flex-col items-center text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">{personal.title}</p>
            <h1 className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-4xl leading-[1.1] text-cream md:text-6xl">
              Organic visibility{" "}
              <span className="text-accent">engineered</span> for growth
            </h1>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button
                onClick={openContact}
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-sm font-medium tracking-wide text-ink transition-opacity hover:opacity-90"
              >
                Book a Call
                <ArrowRight size={16} />
              </button>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-7 py-3.5 text-sm tracking-wide text-cream transition-colors hover:border-accent/40 hover:bg-elevated"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink" />
      </motion.div>
    </section>
  );
}
