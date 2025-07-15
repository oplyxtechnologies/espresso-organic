"use client";

import Image from "next/image";

const burgerImages = [
  { src: "/burger/top-bun.jpeg", alt: "Top Bun" },
  { src: "/burger/lettuce.jpeg", alt: "Lettuce Layer" },
  { src: "/burger/bottom-bun.jpeg", alt: "Bottom Bun" },
];

export default function CafeGlimpse() {
  return (
    <section className="bg-[#fff2e3] py-32 px-4 md:px-10 lg:px-20">
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-reporter text-[#2B1E17] mb-2">
          Glimpse of Our Café
        </h2>
        <p className="text-[#2B1E17] font-semibold mb-2">
          More than coffee — it&apos;s a crafted experience.
        </p>
        <p className="text-[#8B7766] max-w-3xl mx-auto text-base md:text-lg">
          Step inside our café and you&apos;ll find more than just espresso.
          From handcrafted drinks to wholesome bites, every detail is designed
          to reflect our love for quality, community, and organic ingredients.
          Whether you&apos;re here to sip, study, or connect, this is a space
          where passion brews in every corner.
        </p>
      </div>

      {/* Burger Image Layout */}
      <div className="max-w-4xl mx-auto flex px-22 flex-col opacity-90 gap-4 items-center">
        {burgerImages.map((img, i) => {
          const isTop = i === 0;
          const isMiddle = i === 1;
          const isBottom = i === 2;

          return (
            <div
              key={i}
              className={`relative overflow-hidden ${
                isMiddle
                  ? "w-[120%] md:w-[130%] h-48 rounded-lg " // Wider lettuce layer
                  : "w-[100%] md:w-[110%] h-48 "
              } ${
                isTop
                  ? "rounded-t-[100px] md:rounded-t-[140px]"
                  : isBottom
                  ? "rounded-b-[100px] md:rounded-b-[140px]"
                  : "rounded-none"
              } aspect-[5/1]`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
