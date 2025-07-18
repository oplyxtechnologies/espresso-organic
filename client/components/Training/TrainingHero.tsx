"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function BaristaHero() {
  return (
    <section className="relative mt-16 bg-[#FFF8F2] overflow-hidden py-20 px-4 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-5xl font-reporter text-[#2B1E17] leading-tight mb-6">
            Craft Your Journey as a Skilled Barista
          </h1>
          <p className="text-[#6F5A48] text-lg mb-8 max-w-xl">
            Learn the art of coffee from bean to brew. Our hands-on training is
            designed for aspiring baristas who want to master espresso
            techniques, latte art, customer service, and café operations — all
            rooted in organic values.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/training/courseenquiry"
              className="bg-[#2B1E17] text-white px-6 py-3 rounded-sm text-sm font-medium hover:bg-opacity-90 transition"
            >
              Enroll Now
            </Link>
            <Link
              href="#courses"
              className="border border-[#2B1E17] text-[#2B1E17] px-6 py-3 rounded-sm text-sm font-medium hover:bg-[#2B1E17] hover:text-white transition"
            >
              Learn More
            </Link>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative w-full   h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-xl"
        >
          <Image
            src="/hero/barista-training-hero.jpeg"
            alt="Barista Training"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
