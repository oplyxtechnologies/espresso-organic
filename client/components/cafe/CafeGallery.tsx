"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const galleryImages = [
  "/splash/1.jpeg",
  "/splash/3.jpeg",
  "/splash/8.jpeg",
  "/splash/6.jpeg",
  "/splash/4.jpeg",
  "/splash/5.jpeg",
  "/splash/2.jpeg",
  "/splash/7.jpeg",
  "/splash/9.jpeg",
  "/splash/10.jpeg",
];

export default function CafeGallerySection() {
  return (
    <section className="bg-[#FFFAF3] py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-reporter text-[#2B1E17] mb-12"
        >
          Moments at Espresso Organic
        </motion.h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {galleryImages.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-md shadow-sm hover:shadow-md transition"
            >
              <div className="relative w-full h-[260px] md:h-[280px]">
                <Image
                  src={src}
                  alt={`Cafe moment ${idx + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
