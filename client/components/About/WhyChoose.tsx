// components/WhyChoose.tsx

import { GraduationCap, Leaf, MessageCircle, Scissors } from "lucide-react";

export default function WhyChoose() {
  return (
    <section className="bg-[#FFF8F2] py-20 px-4 md:px-10 lg:px-20 text-center">
      {/* Title */}
      <div className="max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-reporter text-[#2B1E17] mb-4">
          Why Choose Espresso Organic
        </h2>
        <p className="text-[#5C4A3C] text-lg md:text-base">
          Since 2013, we’ve believed that great coffee starts with care — in
          sourcing, training, and serving. What began as a simple workshop now
          empowers aspiring baristas with real-world, organic café experience.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        <div className="border border-[#E9691D] rounded-md py-8 px-6 bg-white">
          <GraduationCap size={40} className="text-[#E32B2B] mx-auto mb-4" />
          <h3 className="text-[#E32B2B] font-bold text-lg mb-1">
            Café-Based Learning
          </h3>
          <p className="text-[#8B7766] text-sm">
            Real-world training, not just theory.
          </p>
        </div>

        <div className="border border-[#E9691D] rounded-md py-8 px-6 bg-white">
          <Leaf size={40} className="text-[#E32B2B] mx-auto mb-4" />
          <h3 className="text-[#E32B2B] font-bold text-lg mb-1">
            Certified Organic Only
          </h3>
          <p className="text-[#8B7766] text-sm">No compromise on purity.</p>
        </div>

        <div className="border border-[#E9691D] rounded-md py-8 px-6 bg-white">
          <MessageCircle size={40} className="text-[#E32B2B] mx-auto mb-4" />
          <h3 className="text-[#E32B2B] font-bold text-lg mb-1">
            Community Driven
          </h3>
          <p className="text-[#8B7766] text-sm">
            We’re more than coffee, we’re connection.
          </p>
        </div>

        <div className="border border-[#E9691D] rounded-md py-8 px-6 bg-white">
          <Scissors size={40} className="text-[#E32B2B] mx-auto mb-4" />
          <h3 className="text-[#E32B2B] font-bold text-lg mb-1">
            Proven Craft
          </h3>
          <p className="text-[#8B7766] text-sm">
            A decade of hands-on experience.
          </p>
        </div>
      </div>
    </section>
  );
}
