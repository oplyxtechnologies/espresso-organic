"use client";

import Image from "next/image";

export default function BaristaHero() {
  return (
    <section className="relative mt-16 bg-[#FFF8F2] overflow-hidden py-20 px-4 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Text Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-reporter text-[#2B1E17] leading-tight mb-6">
            Craft Your Journey as a Skilled Barista
          </h1>
          <p className="text-[#6F5A48] text-lg mb-8">
            Learn the art of coffee from bean to brew. Our hands-on training is
            designed for aspiring baristas who want to master espresso
            techniques, latte art, customer service, and café operations — all
            rooted in organic values.
          </p>
          <div className="flex gap-4">
            <button className="bg-[#2B1E17] text-white px-6 py-3 rounded-sm hover:bg-opacity-90 transition">
              Enroll Now
            </button>
            <button className="border border-[#2B1E17] text-[#2B1E17] px-6 py-3 rounded-sm hover:bg-[#2B1E17] hover:text-white transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/hero/barista-training-hero.jpeg"
            alt="Barista Training"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
