"use client";

import { GraduationCap, Sprout } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPurpose() {
  return (
    <section className="bg-[#FFF8F2] py-16 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Image
            src="/cafe-interior.jpg"
            alt="Espresso Organic Interior"
            width={600}
            height={400}
            className="rounded-lg w-full aspect-[3/2] object-cover"
          />
        </motion.div>

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-reporter text-[#2B1E17] mb-4">
            A Story Brewed with Purpose
          </h2>

          <p className="text-[#4B3D36] mb-8 leading-relaxed">
            Since 2013, we&apos;ve believed that great coffee starts with care —
            in sourcing, training, and serving. What began as a simple workshop
            now empowers aspiring baristas with real-world, organic café
            experience.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Baristas */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-[#E32B2B] text-white rounded-md p-6 text-center"
            >
              <GraduationCap className="mx-auto w-10 h-10 mb-4" />
              <p className="font-reporter text-xl">1000+ Trained</p>
              <p className="font-reporter text-xl">Baristas</p>
            </motion.div>

            {/* Organic Beans */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-[#E32B2B] text-white rounded-md p-6 text-center"
            >
              <Sprout className="mx-auto w-10 h-10 mb-4" />
              <p className="font-reporter text-xl">100% Organic</p>
              <p className="font-reporter text-xl">Beans</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
