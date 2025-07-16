"use client";

import { Coffee, Leaf, Users, Recycle } from "lucide-react";

export default function WhyTrainSection() {
  return (
    <section className="bg-[#FFF8F2] py-20 px-4 md:px-10 lg:px-20">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-reporter text-[#2B1E17] mb-4">
          Why Train With Espresso Organic
        </h2>
        <p className="text-[#6F5A48]">
          Our programs are designed for real-world café experience not just
          theory. We focus on hands-on skills, organic quality, and ethical
          learning practices that prepare you for real success behind the bar.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="bg-[#FFF1E6] p-5 rounded-md border border-[#FFD6C2]">
          <div className="flex items-center gap-2 mb-2 text-[#CB5B2C]">
            <Coffee size={18} />
            <h4 className="font-semibold text-sm">Hands-On Café Learning</h4>
          </div>
          <p className="text-sm text-[#6F5A48]">
            We use only certified organic coffee beans, grown without harmful
            chemicals or pesticides.
          </p>
        </div>

        <div className="bg-[#FFF1E6] p-5 rounded-md border border-[#FFD6C2]">
          <div className="flex items-center gap-2 mb-2 text-[#CB5B2C]">
            <Leaf size={18} />
            <h4 className="font-semibold text-sm">100% Organic Beans</h4>
          </div>
          <p className="text-sm text-[#6F5A48]">
            Our beans are sourced directly from responsible farms that
            prioritize fair wages and eco-conscious farming.
          </p>
        </div>

        <div className="bg-[#FFF1E6] p-5 rounded-md border border-[#FFD6C2]">
          <div className="flex items-center gap-2 mb-2 text-[#CB5B2C]">
            <Users size={18} />
            <h4 className="font-semibold text-sm">Small Group Mentorship</h4>
          </div>
          <p className="text-sm text-[#6F5A48]">
            From compostable cups to minimal waste practices, our packaging
            choices are made with the planet in mind.
          </p>
        </div>

        <div className="bg-[#FFF1E6] p-5 rounded-md border border-[#FFD6C2] sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-2 mb-2 text-[#CB5B2C]">
            <Recycle size={18} />
            <h4 className="font-semibold text-sm">
              Sustainability-Focused Curriculum
            </h4>
          </div>
          <p className="text-sm text-[#6F5A48]">
            From compostable cups to minimal waste practices, our packaging
            choices are made with the planet in mind.
          </p>
        </div>
      </div>
    </section>
  );
}
