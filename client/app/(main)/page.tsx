import HomeHero from "@/components/Home/HomeHero";
import OurJourney from "@/components/Home/OurJourney";
import BaristatrainingSlider from "@/components/slider/BaristatrainingSlider";
import CafeSection from "@/components/Home/CafeSection";
import FarmVisitSection from "@/components/Home/FarmVisitSection";
import TestimonialsSection from "@/components/Home/CommunityTestimonials";
import BlogPreview from "@/components/Home/BlogPreview";
import FooterCTA from "@/components/Home/HomeCTA";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden text-[color:var(--color-black)]">
      {/* Hero Section */}
      <HomeHero />

      {/* Our Journey Timeline */}
      <section className="py-20 px-4 md:px-8">
        <OurJourney />
      </section>

      {/* Barista Courses Slider */}
      <section className="py-20 px-4 md:px-8 bg-[#FFFAF3]">
        <BaristatrainingSlider />
      </section>

      {/* Café Showcase */}
      <section className="py-20 px-4 md:px-8">
        <CafeSection />
      </section>

      {/* Farm Visit Experience */}
      <section className="py-20 px-4 md:px-8 bg-[#FFFAF3]">
        <FarmVisitSection />
      </section>

      {/* Community Testimonials */}
      <section className="py-20 px-4 md:px-8">
        <TestimonialsSection />
      </section>

      {/* Blog Preview */}
      <section className="py-20 px-4 md:px-8 bg-[#FFFAF3]">
        <BlogPreview />
      </section>

      {/* Final Call To Action */}
      <section className="py-20 px-4 md:px-8">
        <FooterCTA />
      </section>
    </main>
  );
}
