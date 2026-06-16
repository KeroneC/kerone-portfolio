import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: {
    absolute: "Kerone Creary | Software Developer",
  },
  description:
    "Kerone Creary is a software developer focused on .NET, SQL, automation tools, and full-stack applications that help people and teams work better.",
  openGraph: {
    title: "Kerone Creary | Software Developer",
    description:
      "Software developer focused on .NET, SQL, automation tools, and full-stack applications that help people and teams work better.",
  },
  twitter: {
    title: "Kerone Creary | Software Developer",
    description:
      "Software developer focused on .NET, SQL, automation tools, and full-stack applications that help people and teams work better.",
  },
};

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
