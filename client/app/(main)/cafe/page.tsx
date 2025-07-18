import ContactAndLocationSection from "@/components/cafe/ContactAndLocation";
import CafeGallerySection from "@/components/cafe/CafeGallery";
import CafeHero from "@/components/cafe/CafeHero";
import FreshBitesSection from "@/components/cafe/FreshBitesSection";
import OurJourneySection from "@/components/cafe/OurJourneySection";
import SignatureBrewsSection from "@/components/cafe/SignatureBrewsSection";

export default function CafePage() {
  return (
    <>
      <CafeHero />
      <OurJourneySection />
      <SignatureBrewsSection />
      <FreshBitesSection />
      <CafeGallerySection />
      <ContactAndLocationSection />
    </>
  );
}
