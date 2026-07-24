"use client";

import { FormEvent, useState } from "react";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { personal } from "@/data";
import { FadeIn } from "@/components/ui/FadeIn";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const company = data.get("company") as string;
    const budget = data.get("budget") as string;
    const message = data.get("message") as string;

    const subject = encodeURIComponent(`SEO Inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany/Website: ${company || "N/A"}\nBudget: ${budget || "Not specified"}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const socialLinks = [
    personal.social.linkedin,
    personal.social.whatsapp,
    personal.social.email,
  ];

  return (
    <>
      <section className="pt-40 pb-16">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.2em] text-accent">Contact</p>
            <h1 className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-5xl text-cream md:text-6xl">
              Let&apos;s discuss your organic growth goals
            </h1>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted">
              Ready to dominate local search, scale e-commerce revenue, or establish
              AI search visibility? Reach out for a complimentary strategy session.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="editorial-grid gap-12">
            <FadeIn className="col-span-12 lg:col-span-5">
              <div className="space-y-8">
                <div>
                  <p className="mb-6 text-xs uppercase tracking-[0.2em] text-accent">
                    Direct Contact
                  </p>
                  <div className="space-y-5">
                    <a
                      href={`mailto:${personal.email}`}
                      className="flex items-center gap-4 text-sm text-muted transition-colors hover:text-cream"
                    >
                      <Mail size={18} className="text-accent" />
                      {personal.email}
                    </a>
                    <a
                      href={personal.phoneHref}
                      className="flex items-center gap-4 text-sm text-muted transition-colors hover:text-cream"
                    >
                      <Phone size={18} className="text-accent" />
                      {personal.phone}
                    </a>
                    <a
                      href={personal.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 text-sm text-muted transition-colors hover:text-cream"
                    >
                      <Phone size={18} className="text-accent" />
                      WhatsApp: {personal.phone}
                    </a>
                    <p className="flex items-center gap-4 text-sm text-muted">
                      <MapPin size={18} className="text-accent" />
                      {personal.location}
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-border/60 p-6">
                  <p className="text-xs uppercase tracking-wider text-accent">
                    Social Links
                  </p>
                  <ul className="mt-4 space-y-3">
                    {socialLinks.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                          rel={
                            link.href.startsWith("mailto:")
                              ? undefined
                              : "noopener noreferrer"
                          }
                          className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
                        >
                          {link.label}
                          <ArrowRight size={14} />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1} className="col-span-12 lg:col-span-7">
              <div className="rounded-3xl border border-border/60 bg-elevated/30 p-8 md:p-10">
                <h2 className="font-[family-name:var(--font-display)] text-2xl text-cream">
                  Send a message
                </h2>
                <p className="mt-2 text-sm text-muted">
                  Form opens your email client addressed to {personal.email}.
                </p>

                {submitted ? (
                  <p className="mt-8 text-sm text-accent">
                    Your email client should open shortly. If it didn&apos;t, email directly
                    at{" "}
                    <a href={`mailto:${personal.email}`} className="underline">
                      {personal.email}
                    </a>
                    .
                  </p>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                    <div className="grid gap-5 md:grid-cols-2">
                      <div>
                        <label
                          htmlFor="contact-name"
                          className="mb-1.5 block text-xs uppercase tracking-wider text-muted"
                        >
                          Name
                        </label>
                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          required
                          placeholder="Your name"
                          className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-cream placeholder:text-muted/50 outline-none transition-colors focus:border-accent/50"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="contact-email"
                          className="mb-1.5 block text-xs uppercase tracking-wider text-muted"
                        >
                          Email
                        </label>
                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          required
                          placeholder="you@company.com"
                          className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-cream placeholder:text-muted/50 outline-none transition-colors focus:border-accent/50"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="contact-company"
                        className="mb-1.5 block text-xs uppercase tracking-wider text-muted"
                      >
                        Company / Website
                      </label>
                      <input
                        id="contact-company"
                        name="company"
                        type="text"
                        placeholder="yourcompany.com"
                        className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-cream placeholder:text-muted/50 outline-none transition-colors focus:border-accent/50"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-budget"
                        className="mb-1.5 block text-xs uppercase tracking-wider text-muted"
                      >
                        Monthly SEO Budget
                      </label>
                      <select
                        id="contact-budget"
                        name="budget"
                        className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-cream outline-none transition-colors focus:border-accent/50"
                      >
                        <option value="">Select range</option>
                        <option value="500-1000">$500 — $1,000</option>
                        <option value="1000-2500">$1,000 — $2,500</option>
                        <option value="2500-5000">$2,500 — $5,000</option>
                        <option value="5000+">$5,000+</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="contact-message"
                        className="mb-1.5 block text-xs uppercase tracking-wider text-muted"
                      >
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={5}
                        required
                        placeholder="Describe your business, current SEO challenges, and goals..."
                        className="w-full resize-none rounded-lg border border-border bg-surface px-4 py-3 text-sm text-cream placeholder:text-muted/50 outline-none transition-colors focus:border-accent/50"
                      />
                    </div>
                    <button
                      type="submit"
                      className="rounded-lg bg-accent px-7 py-3.5 text-sm font-medium text-ink transition-opacity hover:opacity-90"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
