export const tools = [
  {
    id: "ahrefs",
    name: "Ahrefs",
    abbr: "Ah",
    description: "Backlink analysis, keyword research, and competitive gap mapping.",
    color: "#ff6b35",
  },
  {
    id: "semrush",
    name: "Semrush",
    abbr: "Sm",
    description: "Site audits, rank tracking, and market intelligence.",
    color: "#ff642d",
  },
  {
    id: "gsc",
    name: "Google Search Console",
    abbr: "GSC",
    description: "Indexation monitoring, query performance, and crawl diagnostics.",
    color: "#4285f4",
  },
  {
    id: "ga4",
    name: "Google Analytics",
    abbr: "GA4",
    description: "Traffic attribution, conversion tracking, and audience insights.",
    color: "#e37400",
  },
  {
    id: "smm",
    name: "Social Media Marketing & Ad Management",
    abbr: "SMM",
    description: "Organic social strategy and paid campaign coordination.",
    color: "#c9a962",
  },
  {
    id: "ecom",
    name: "E-commerce & Web Basics",
    abbr: "Web",
    description: "Platform fundamentals, UX considerations, and conversion pathways.",
    color: "#a1a1aa",
  },
] as const;

export const heroToolIcons = tools.filter((t) =>
  ["ahrefs", "semrush", "gsc", "ga4"].includes(t.id)
);
