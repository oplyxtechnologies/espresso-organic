"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const cafeHighlights = [
  {
    title: "Espresso",
    description: "Rich, bold, and balanced. The essence of our organic craft.",
  },
  {
    title: "Latte",
    description:
      "Smooth, steamed milk with a perfect espresso base topped with handcrafted art.",
  },
  {
    title: "Pour-over",
    description:
      "Slow-brewed to extract deep flavors, made with freshly ground organic beans.",
  },
];

export default function CafeSection() {
  return (
    <section className="bg-[#FFFAF3] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full h-[320px] sm:h-[400px] lg:h-[460px] relative rounded-md overflow-hidden"
        >
          <Image
            src="/cafe-interior.jpg"
            alt="Cafe Interior"
            fill
            className="object-cover rounded-md"
            priority
          />
        </motion.div>

        {/* Text Content */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-reporter text-gray-900 mb-4"
          >
            Our Café
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-600 mb-8 max-w-xl"
          >
            Enjoy rich, organic coffee brewed by skilled baristas in a warm,
            welcoming space.
          </motion.p>

          <div className="space-y-4 mb-8">
            {cafeHighlights.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 * idx }}
                viewport={{ once: true }}
                className="bg-[#FFF1DC] p-4 rounded-md text-left"
              >
                <h4 className="text-base font-semibold text-gray-800 mb-1">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link
              href="/cafe"
              className="inline-block text-red-600 border border-red-500 px-6 py-2 rounded-md hover:bg-red-500 hover:text-white transition text-sm font-medium"
            >
              Visit Our Café
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
