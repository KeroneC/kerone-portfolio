import { BeyondCodeSection } from "@/components/BeyondCodeSection";
import { ContactCTA } from "@/components/ContactCTA";
import { CurrentFocusSection } from "@/components/CurrentFocusSection";
import { ExperienceSnapshot } from "@/components/ExperienceSnapshot";
import { FeaturedWorkSection } from "@/components/FeaturedWorkSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { JourneyTimeline } from "@/components/JourneyTimeline";
import { StatsSection } from "@/components/StatsSection";
import { ValuesSection } from "@/components/ValuesSection";
import { WhatIBuildSection } from "@/components/WhatIBuildSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <WhatIBuildSection />
        <FeaturedWorkSection />
        <JourneyTimeline />
        <ExperienceSnapshot />
        <ValuesSection />
        <BeyondCodeSection />
        <CurrentFocusSection />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
