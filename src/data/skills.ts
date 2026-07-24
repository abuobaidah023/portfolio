export const skills = [
  "Local SEO",
  "Technical SEO",
  "On-Page SEO",
  "Google Maps Ranking / GMB Optimization",
  "E-commerce SEO",
  "SEO Audits",
  "GEO/AIO (Generative Engine Optimization)",
] as const;

export const skillCards = skills.map((skill, index) => ({
  id: `skill-${index}`,
  title: skill,
  description: getSkillDescription(skill),
}));

function getSkillDescription(skill: string): string {
  const descriptions: Record<string, string> = {
    "Local SEO":
      "Hyperlocal keyword targeting, service-area architecture, and competitive gap analysis for location-based lead generation.",
    "Technical SEO":
      "Crawl efficiency, indexation control, Core Web Vitals, and site architecture built for scalable organic performance.",
    "On-Page SEO":
      "Title tags, heading hierarchy, internal linking, and content optimization aligned with search intent.",
    "Google Maps Ranking / GMB Optimization":
      "Category selection, geo-grid tracking, review velocity, and citation alignment for Map Pack dominance.",
    "E-commerce SEO":
      "Product page optimization, category hubs, schema deployment, and organic revenue attribution.",
    "SEO Audits":
      "Comprehensive technical, on-page, and off-page audits with prioritized remediation roadmaps.",
    "GEO/AIO (Generative Engine Optimization)":
      "Entity authority, citation engineering, and brand visibility across ChatGPT, Perplexity, and AI answer engines.",
  };
  return descriptions[skill] ?? "Strategic SEO capability delivering measurable organic outcomes.";
}

export const heroFloatingCards = [
  {
    id: "card-local",
    side: "left" as const,
    title: "Local Dominance",
    body: "Google Maps & GBP strategies that convert searches into direction requests and phone calls.",
  },
  {
    id: "card-technical",
    side: "left" as const,
    title: "Technical Precision",
    body: "Site audits and remediation that unlock crawl efficiency and indexation at scale.",
  },
  {
    id: "card-geo",
    side: "right" as const,
    title: "GEO / AIO Ready",
    body: "Entity-first content and citation networks for generative search visibility.",
  },
  {
    id: "card-ecom",
    side: "right" as const,
    title: "E-commerce Growth",
    body: "Category architecture and product optimization engineered for organic revenue.",
  },
] as const;
