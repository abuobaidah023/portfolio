import { ScrollHeroSection } from "@/components/sections/ScrollHeroSection";
import { IntroSection } from "@/components/sections/IntroSection";
import {
  FeatureScrollSection,
  ServicesScrollSection,
} from "@/components/sections/HorizontalScrollSections";
import { StaggeredGridSection } from "@/components/sections/StaggeredGridSection";

export default function HomePage() {
  return (
    <>
      <ScrollHeroSection />
      <IntroSection />
      <FeatureScrollSection />
      <ServicesScrollSection />
      <StaggeredGridSection />
    </>
  );
}
