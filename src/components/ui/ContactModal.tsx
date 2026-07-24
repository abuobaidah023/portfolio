"use client";

import { createContext, useContext, useState, useCallback, ReactNode, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { personal } from "@/data";

type ContactModalContextType = {
  openContact: () => void;
  closeContact: () => void;
  isOpen: boolean;
};

const ContactModalContext = createContext<ContactModalContextType | null>(null);

export function useContactModal() {
  const ctx = useContext(ContactModalContext);
  if (!ctx) throw new Error("useContactModal must be used within ContactModalProvider");
  return ctx;
}

export function ContactModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openContact = useCallback(() => setIsOpen(true), []);
  const closeContact = useCallback(() => setIsOpen(false), []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const service = data.get("service") as string;
    const message = data.get("message") as string;

    const subject = encodeURIComponent(`SEO Inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nService: ${service}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    closeContact();
  };

  return (
    <ContactModalContext.Provider value={{ openContact, closeContact, isOpen }}>
      {children}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeContact}
              className="fixed inset-0 z-[100] bg-ink/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-x-4 top-[12vh] z-[101] mx-auto max-w-lg md:inset-x-auto"
            >
              <div className="glass rounded-2xl p-8 shadow-2xl">
                <div className="mb-6 flex items-start justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-accent">Get in Touch</p>
                    <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl text-cream">
                      Start Your Growth Conversation
                    </h3>
                  </div>
                  <button
                    onClick={closeContact}
                    className="rounded-full p-2 text-muted transition-colors hover:bg-elevated hover:text-cream"
                    aria-label="Close modal"
                  >
                    <X size={18} />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-xs uppercase tracking-wider text-muted">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="w-full rounded-lg border border-border bg-elevated px-4 py-3 text-sm text-cream placeholder:text-muted/50 outline-none transition-colors focus:border-accent/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-xs uppercase tracking-wider text-muted">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@company.com"
                      className="w-full rounded-lg border border-border bg-elevated px-4 py-3 text-sm text-cream placeholder:text-muted/50 outline-none transition-colors focus:border-accent/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="mb-1.5 block text-xs uppercase tracking-wider text-muted">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full rounded-lg border border-border bg-elevated px-4 py-3 text-sm text-cream outline-none transition-colors focus:border-accent/50"
                    >
                      <option value="gbp">Google Business Profile</option>
                      <option value="local">Local SEO</option>
                      <option value="ecommerce">E-commerce SEO</option>
                      <option value="geo">GEO / AIO</option>
                      <option value="technical">Technical SEO</option>
                      <option value="audit">SEO Audit</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-xs uppercase tracking-wider text-muted">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      placeholder="Tell me about your business and goals..."
                      className="w-full resize-none rounded-lg border border-border bg-elevated px-4 py-3 text-sm text-cream placeholder:text-muted/50 outline-none transition-colors focus:border-accent/50"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-accent px-6 py-3.5 text-sm font-medium tracking-wide text-ink transition-opacity hover:opacity-90"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </ContactModalContext.Provider>
  );
}
