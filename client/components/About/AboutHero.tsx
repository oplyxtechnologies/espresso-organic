export default function AboutHero() {
  return (
    <section
      className="relative bg-[#FFF8F2] min-h-screen flex items-center justify-center mt-16 px-4 md:px-10 lg:px-20 py-20"
      style={{
        backgroundImage: "url('/hero/abouthero.jpg')", // replace with your actual path
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#120905]/95 from-40% via-[#120905]/90 via-65% to-transparent to-100% z-0  " />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-reporter text-white mb-6">
          Our Story Begins with a Brew
        </h1>
        <p className="text-[#F3EDE9] max-w-2xl mx-auto text-lg md:text-xl mb-8">
          At Espresso Organic, coffee is more than a drink—it&apos;s a ritual of
          passion, sustainability, and community. Every bean tells a story of
          origin, care, and flavor.
        </p>
        <a
          href="#journey"
          className="inline-block bg-[#E9691D] hover:bg-[#cf5611] text-white font-semibold px-6 py-3 rounded-sm transition"
        >
          Discover Our Journey
        </a>
      </div>
    </section>
  );
}
