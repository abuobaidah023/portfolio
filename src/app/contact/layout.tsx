import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — M Abuobaida Nasir",
  description:
    "Book a strategy call or send a message to M Abuobaida Nasir for SEO and organic growth consulting.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
