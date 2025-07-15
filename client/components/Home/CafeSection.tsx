"use client";

import Image from "next/image";
import Link from "next/link";

const cafeHighlights = [
  {
    title: "Espresso",
    description: "Rich, bold, and balanced. The essence of our organic craft.",
  },
  {
    title: "Latte",
    description:
      "Smooth, steamed milk with a perfect espresso base topped with handcrafted art.",
  },
  {
    title: "Pour-over",
    description:
      "Slow-brewed to extract deep flavors, made with freshly ground organic beans.",
  },
];

export default function CafeSection() {
  return (
    <section className="bg-[#FFFAF3] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:items-center">
        {/* Image */}
        <div className="w-full h-[320px] sm:h-[400px] lg:h-[460px] relative rounded-md overflow-hidden">
          <Image
            src="/cafe-interior.jpg" // replace with your actual path
            alt="Cafe Interior"
            fill
            className="object-cover rounded-md"
            priority
          />
        </div>

        {/* Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-reporter text-gray-900 mb-4">
            Our Café
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl">
            Enjoy rich, organic coffee brewed by skilled baristas in a warm,
            welcoming space.
          </p>

          <div className="space-y-4 mb-8">
            {cafeHighlights.map((item, idx) => (
              <div key={idx} className="bg-[#FFF1DC] p-4 rounded-md text-left ">
                <h4 className="text-base font-semibold text-gray-800 mb-1">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

          <Link
            href="/cafe"
            className="inline-block text-red-600 border border-red-500 px-6 py-2 rounded-md hover:bg-red-500 hover:text-white transition text-sm font-medium"
          >
            Visit Our Café
          </Link>
        </div>
      </div>
    </section>
  );
}
