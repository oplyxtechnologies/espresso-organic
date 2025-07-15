import AboutHero from "@/components/About/AboutHero";
import AboutPurpose from "@/components/About/AboutPurpose";
import CafeGlimpse from "@/components/About/CafeGlimpse";
import MissionVision from "@/components/About/MissionVision";
import TeamSection from "@/components/About/TeamSection";
import WhatWeBelieve from "@/components/About/WhatWeBelieve";
import WhoStarted from "@/components/About/Whostarted";
import WhyChoose from "@/components/About/WhyChoose";
import FooterCTA from "@/components/Home/HomeCTA";

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
