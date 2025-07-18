"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function OurJourneySection() {
  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative w-full h-[360px] sm:h-[420px] md:h-[500px] rounded-xl overflow-hidden shadow-md"
        >
          <Image
            src="/cafe/our-journey.jpg" // Replace with your image path
            alt="Our café story"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-reporter text-[#2B1E17] mb-6">
            Our Journey
          </h2>
          <p className="text-[#3C2E29] text-lg mb-4 leading-relaxed max-w-xl">
            Espresso Organic Café began with a simple goal — to create a space
            where people could connect over high-quality, ethically sourced
            coffee.
          </p>
          <p className="text-[#6F5A48] text-base leading-relaxed max-w-xl">
            We started as a tiny counter with a passion for craft brewing and
            community. Today, we’re a vibrant neighborhood café serving organic
            brews, fresh bakes, and good vibes — one cup at a time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
