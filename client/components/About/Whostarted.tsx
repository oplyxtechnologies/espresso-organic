// components/WhoStarted.tsx

export default function WhoStarted() {
  return (
    <section className="bg-[#FFF8F2] py-20 px-4 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-reporter text-[#2B1E17] mb-4">
            Meet the Visionary Behind the Brew
          </h2>
          <p className="text-[#8B7766] text-lg leading-relaxed mb-6">
            Espresso Organic was born out of a simple yet bold idea — to create
            a coffee culture rooted in passion, sustainability, and
            authenticity. What began as a humble venture in 2013 has now
            inspired thousands of aspiring baristas and coffee lovers across
            Nepal.
          </p>
          <p className="text-[#8B7766] text-lg leading-relaxed">
            Our founder and chairman, <strong>Man Bahadur Shrestha</strong>, a
            lifelong coffee enthusiast, envisioned a space where quality meets
            community. His commitment to education, organic sourcing, and
            genuine hospitality shaped Espresso Organic into what it is today.
          </p>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/images/chairman.jpeg" // Replace with your actual path
            alt="Man Bahadur Shrestha, Chairman of Espresso Organic"
            className="rounded-lg  max-w-sm md:max-w-md"
          />
        </div>
      </div>
    </section>
  );
}
