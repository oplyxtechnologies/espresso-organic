import AboutHero from "@/components/About/AboutHero";
import AboutPurpose from "@/components/About/AboutPurpose";
import CafeGlimpse from "@/components/About/CafeGlimpse";
import MissionVision from "@/components/About/MissionVision";
import TeamSection from "@/components/About/TeamSection";
import WhatWeBelieve from "@/components/About/WhatWeBelieve";
import WhoStarted from "@/components/About/Whostarted";
import WhyChoose from "@/components/About/WhyChoose";
import FooterCTA from "@/components/Home/HomeCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Espresso Organic Coffee",
  description:
    "Learn more about Espresso Organic Coffee, our mission, vision, team, and what makes us unique.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <WhoStarted />
      <MissionVision />
      <AboutPurpose />
      <WhyChoose />
      <CafeGlimpse />
      <TeamSection />
      <WhatWeBelieve />
      <FooterCTA />
    </>
  );
}
