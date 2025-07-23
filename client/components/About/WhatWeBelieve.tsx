"use client";

import { motion } from "framer-motion";
import { Target, Leaf, Handshake, Globe2 } from "lucide-react";

const values = [
  {
    icon: <Target className="w-8 h-8 text-[#EF3E3E]" />,
    title: "Craftsmanship",
  },
  {
    icon: <Leaf className="w-8 h-8 text-[#EF3E3E]" />,
    title: "Organic First",
  },
  {
    icon: <Handshake className="w-8 h-8 text-[#EF3E3E]" />,
    title: "Real Experience",
  },
  {
    icon: <Globe2 className="w-8 h-8 text-[#EF3E3E]" />,
    title: "Ethical Impact",
  },
];

export default function WhatWeBelieve() {
  return (
    <section className="bg-[#FFF8F2] py-16 px-4 md:px-10 lg:px-20 text-center">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl md:text-3xl font-reporter text-[#2B1E17] mb-2"
      >
        What We Believe
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-[#54483F] text-sm md:text-base max-w-xl mx-auto mb-10"
      >
        From ethical sourcing to hands-on training, everything we do reflects
        care for craft, people, and the planet.
      </motion.p>

      {/* Beliefs Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {values.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.3 + index * 0.2,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="border border-[#EF3E3E] rounded-md py-8 px-4 flex flex-col items-center justify-center text-[#EF3E3E] hover:bg-[#fff4f4] transition"
          >
            {item.icon}
            <h4 className="font-semibold text-sm md:text-base mt-4">
              {item.title}
            </h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
