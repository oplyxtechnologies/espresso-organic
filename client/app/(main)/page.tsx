import HomeHero from "@/components/Home/HomeHero";
import OurJourney from "@/components/Home/OurJourney";
import BaristatrainingSlider from "@/components/slider/BaristatrainingSlider";
import CafeSection from "@/components/Home/CafeSection";
import FarmVisitSection from "@/components/Home/FarmVisitSection";
import TestimonialsSection from "@/components/Home/CommunityTestimonials";
import BlogPreview from "@/components/Home/BlogPreview";
import FooterCTA from "@/components/Home/HomeCTA";
import BlogSection from "@/components/Blogs/BlogSection";

export default function Home() {
  return (
    <main className="w-full md:space-y-16 overflow-x-hidden text-[color:var(--color-black)]">
      {/* Hero Section */}
      <HomeHero />

      {/* Barista Courses Slider */}
      <section className=" px-4 md:px-8 bg-[#FFFAF3]">
        <BaristatrainingSlider />
      </section>

      {/* Our Journey Timeline */}
      <section className=" px-4 md:px-8">
        <OurJourney />
      </section>

      {/* Café Showcase */}
      <section className=" px-4 md:px-8">
        <CafeSection />
      </section>

      {/* Farm Visit Experience */}
      <section className=" px-4 md:px-8 bg-[#FFFAF3]">
        <FarmVisitSection />
      </section>

      {/* Community Testimonials */}
      <section className=" px-4 md:px-8">
        <TestimonialsSection />
      </section>

      {/* Blog Preview */}
      <section className=" px-4 md:px-8 bg-[#FFFAF3]">
        <BlogPreview />
      </section>

      {/* Final Call To Action */}
      <section className=" px-4 md:px-8">
        <FooterCTA />
      </section>
    </main>
  );
}
