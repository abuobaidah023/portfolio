import Link from "next/link";
import { navLinks, personal } from "@/data";

const socialLinks = [
  personal.social.linkedin,
  personal.social.whatsapp,
  personal.social.email,
];

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="font-[family-name:var(--font-display)] text-2xl text-cream">
              {personal.fullName}
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
              {personal.title}. Delivering measurable organic growth through Local SEO,
              Google Business Profile optimization, and Generative Engine Optimization.
            </p>
            <p className="mt-4 text-xs text-muted">{personal.location}</p>
          </div>

          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-accent">Navigation</p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-cream"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-accent">Connect</p>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                    className="text-sm text-muted transition-colors hover:text-cream"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${personal.email}`}
                  className="text-sm text-muted transition-colors hover:text-cream"
                >
                  {personal.email}
                </a>
              </li>
              <li>
                <a
                  href={personal.phoneHref}
                  className="text-sm text-muted transition-colors hover:text-cream"
                >
                  {personal.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/40 pt-8 sm:flex-row">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} {personal.fullName}. All rights reserved.
          </p>
          <p className="text-xs text-muted">
            <a
              href={personal.developerCredit.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-accent"
            >
              {personal.developerCredit.text}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
