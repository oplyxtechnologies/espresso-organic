"use client";

import Image from "next/image";

export default function MissionVision() {
  return (
    <section className="bg-[#FFF8F2] px-4 md:px-10 lg:px-20 py-16">
      <div className="bg-[#FFEFD9] rounded-2xl max-w-6xl mx-auto p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center">
        {/* Image */}
        <div className="relative w-full md:w-1/2 aspect-[4/3] rounded-xl overflow-hidden">
          <Image
            src="/farm-visit.jpg" // Make sure this image exists in your /public folder
            alt="Chairman with coffee"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 text-[#2B1E17] space-y-6">
          <div>
            <h3 className="font-reporter text-xl md:text-2xl mb-1">Mission</h3>
            <p className="text-[#2B1E17] text-sm md:text-base leading-relaxed">
              To empower aspiring baristas through hands-on, real café training.
              <br />
              We&apos;re committed to delivering quality education rooted in
              organic, ethical coffee practices.
            </p>
          </div>

          <div>
            <h3 className="font-reporter text-xl md:text-2xl mb-1">Vision</h3>
            <p className="text-[#2B1E17] text-sm md:text-base leading-relaxed">
              To become a global leader in sustainable coffee education.
              <br />
              We aim to build a community where craft, conscience, and coffee
              come together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
