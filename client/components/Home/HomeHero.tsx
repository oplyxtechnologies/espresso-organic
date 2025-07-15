"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HomeHero() {
  return (
    <section className="relative w-full bg-[#FFFAF3] min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero/hero.jpeg"
          alt="Students in barista class"
          fill
          priority
          quality={100}
          className="object-cover object-right"
        />
        {/* Fixed Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-70% to-transparent " />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-center"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {/* Left Text Block */}
        <div className="text-white">
          <motion.h1
            className="text-3xl sm:text-5xl md:text-7xl font-reporter mb-4 leading-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Crafting Baristas. <br /> Serving Organic Passion.
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg text-white/90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          >
            Learn the art. Taste the craft.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          >
            <Link
              href="/barista-training"
              className="px-6 py-3 text-sm font-semibold rounded-sm bg-[#F03232] hover:bg-[#BC0707] text-white transition"
            >
              Explore Training
            </Link>
            <Link
              href="/cafe"
              className="px-6 py-3 text-sm font-medium rounded-sm border border-white text-white hover:bg-white hover:text-black transition"
            >
              Visit Our Café
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
