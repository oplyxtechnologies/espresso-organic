"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function FooterCTA() {
  return (
    <section className="bg-[#FFFAF3] py-20 px-6 md:px-12 border-t border-[#e5e5e5]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Illustration or Image (Optional) */}
        <div className="flex justify-center">
          <Image
            src="/coffee-chat.svg" // Replace with your actual asset
            alt="Coffee Chat Illustration"
            width={400}
            height={400}
            className="max-w-xs md:max-w-sm"
          />
        </div>
        {/* Text */}
        <div>
          <motion.h2
            className="text-3xl sm:text-4xl font-reporter text-[#2B1E17] mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Got Questions or Ready to Join?
          </motion.h2>
          <motion.p
            className="text-[#3C2E29] text-base sm:text-lg mb-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We&apos;d love to hear from you. Whether you're curious about our
            barista programs or just want to talk coffee — we're here.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              href="/contact"
              className="px-6 py-3 text-sm font-semibold rounded-sm bg-[#F03232] hover:bg-[#BC0707] text-white transition"
            >
              Contact Us
            </Link>
            <Link
              href="/training"
              className="px-6 py-3 text-sm font-medium rounded-sm border border-[#2B1E17] text-[#2B1E17] hover:bg-[#2B1E17] hover:text-white transition"
            >
              Explore Programs
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
