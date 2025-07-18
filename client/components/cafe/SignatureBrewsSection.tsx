"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const brews = [
  {
    title: "Espresso",
    description: "Bold, intense, and beautifully balanced.",
    image: "/brews/espresso.png",
  },
  {
    title: "Cappuccino",
    description: "Rich espresso topped with silky microfoam.",
    image: "/brews/cappuccino.png",
  },
  {
    title: "Pour-over",
    description: "Slow-brewed to highlight clarity and body.",
    image: "/brews/pourover.png",
  },
  {
    title: "Iced Latte",
    description: "Cold, creamy espresso with refreshing depth.",
    image: "/brews/iced-latte.png",
  },
  {
    title: "Matcha Latte",
    description: "Earthy green tea with steamed oat milk.",
    image: "/brews/matcha.png",
  },
  {
    title: "Cold Brew",
    description: "Smooth and bold with natural sweetness.",
    image: "/brews/coldbrew.png",
  },
];

export default function SignatureBrewsSection() {
  return (
    <section className="bg-[#FFFAF3] py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-reporter text-[#2B1E17] mb-6"
        >
          Our Signature Brews
        </motion.h2>
        <p className="text-[#6F5A48] text-base max-w-xl mx-auto mb-12">
          From the classics to creative blends, each cup is crafted with
          intention, skill, and organic ingredients.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {brews.map((brew, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative w-full h-64 rounded-lg overflow-hidden shadow-md group transition"
            >
              {/* Image */}
              <Image
                src={brew.image}
                alt={brew.title}
                fill
                className="object-cover"
              />

              {/* Gradient Overlay */}
              <div className="absolute bottom-0 left-0 w-full h-[60%] bg-gradient-to-t from-[#000000] to-transparent z-10" />

              {/* Text Content */}
              <div className="absolute bottom-0 left-0 z-20 p-4 text-white">
                <h3 className="text-lg text-left font-semibold mb-1">
                  {brew.title}
                </h3>
                <p className="text-sm">{brew.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
