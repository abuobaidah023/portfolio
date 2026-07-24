"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, personal } from "@/data";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-9 z-50">
      <div className="glass mx-4 rounded-2xl md:mx-8">
        <div className="flex items-center justify-between px-6 py-4">
          <Link href="/" className="group flex flex-col">
            <span className="font-[family-name:var(--font-display)] text-lg tracking-wide text-cream">
              {personal.shortName}
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-muted transition-colors group-hover:text-accent">
              SEO Specialist
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs uppercase tracking-[0.15em] transition-colors ${
                  pathname === link.href
                    ? "text-accent"
                    : "text-muted hover:text-cream"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden rounded-lg bg-accent px-5 py-2.5 text-xs font-medium uppercase tracking-wider text-ink transition-opacity hover:opacity-90 sm:block"
            >
              Book a Call
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="rounded-lg p-2 text-cream lg:hidden"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="glass mx-4 mt-2 overflow-hidden rounded-2xl lg:hidden"
          >
            <nav className="flex flex-col gap-1 p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-lg px-4 py-3 text-sm transition-colors ${
                    pathname === link.href
                      ? "bg-accent/10 text-accent"
                      : "text-muted hover:bg-elevated hover:text-cream"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 rounded-lg bg-accent px-4 py-3 text-center text-sm font-medium text-ink"
              >
                Book a Call
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
