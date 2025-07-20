"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function CafeHero() {
  return (
    <section className="relative mt-10   bg-[#FFF8F2] overflow-hidden py-20 px-4 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-reporter text-[#2B1E17] leading-tight mb-6">
            Welcome to Our Organic Café
          </h2>
          <p className="text-[#6F5A48] text-lg mb-8 max-w-xl">
            A cozy space where sustainability, community, and craft coffee come
            together. Sip slow, stay grounded, and enjoy the aroma of something
            real.
          </p>
          <Link
            href="#location"
            className="inline-block bg-[#2B1E17] text-white px-6 py-3 rounded-sm text-sm font-medium hover:bg-opacity-90 transition"
          >
            Visit Us
          </Link>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative w-full h-[360px] sm:h-[460px] md:h-[500px] rounded-xl overflow-hidden shadow-xl"
        >
          <Image
            src="/cafe-interior.jpg" // Replace with your actual image path
            alt="Espresso Organic Café"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
