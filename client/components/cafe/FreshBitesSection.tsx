"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const bites = [
  {
    name: "Banana Bread",
    description: "Moist, lightly sweet, and made with organic bananas.",
    image: "/bites/banana-bread.jpg",
  },
  {
    name: "Vegan Cookie",
    description: "Chewy, chocolatey, and dairy-free indulgence.",
    image: "/bites/vegan-cookie.jpg",
  },
  {
    name: "Croissant",
    description: "Flaky and buttery, baked fresh every morning.",
    image: "/bites/croissant.jpg",
  },
  {
    name: "Avocado Toast",
    description: "Sourdough, smashed avo, chili flakes, and lemon zest.",
    image: "/bites/avocado-toast.jpg",
  },
  {
    name: "Granola Bowl",
    description: "Organic oats, fruit, and coconut yogurt drizzle.",
    image: "/bites/granola-bowl.jpg",
  },
  {
    name: "Oat Muffin",
    description: "Hearty, wholesome, and gluten-friendly.",
    image: "/bites/oat-muffin.jpg",
  },
];

export default function FreshBitesSection() {
  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-reporter text-[#2B1E17] mb-6"
        >
          Fresh Bakes & Light Bites
        </motion.h2>
        <p className="text-[#6F5A48] text-base max-w-xl mx-auto mb-12">
          All-day treats, made with organic, locally sourced ingredients —
          perfect with your favorite brew.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {bites.map((bite, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#FFFAF3] rounded-lg overflow-hidden border border-[#E5E5E5] shadow-sm hover:shadow-md transition"
            >
              <div className="relative w-full h-48">
                <Image
                  src={bite.image}
                  alt={bite.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 text-left">
                <h3 className="text-lg font-semibold text-[#2B1E17] mb-1">
                  {bite.name}
                </h3>
                <p className="text-sm text-[#6F5A48]">{bite.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
