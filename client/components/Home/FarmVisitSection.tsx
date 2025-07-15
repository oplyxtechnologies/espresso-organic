"use client";

import Image from "next/image";
import { Leaf, Handshake, Recycle } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  {
    icon: <Leaf className="w-5 h-5 text-black" strokeWidth={3} />,
    title: "Hands-On Coffee Education",
    description:
      "Students experience how organic coffee is cultivated — from soil to bean — guided by certified farmers.",
  },
  {
    icon: <Handshake className="w-5 h-5 text-black" strokeWidth={3} />,
    title: "Connecting With Growers",
    description:
      "We visit local farms to meet the people behind the beans, promoting ethical sourcing and community support.",
  },
  {
    icon: <Recycle className="w-5 h-5 text-black" strokeWidth={3} />,
    title: "Learning Sustainable Practices",
    description:
      "Our students discover eco-friendly farming and packaging methods that reduce waste and respect the planet.",
  },
];

export default function FarmVisitSection() {
  return (
    <section className="bg-[#FFFAF3] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
        {/* Left: Text + Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          {/* Text */}
          <div>
            <h2 className="text-3xl md:text-5xl font-reporter text-gray-900 mb-5">
              Farm Visit with Our Students
            </h2>
            <p className="text-gray-600 text-base max-w-2xl">
              We take our students beyond the classroom to visit organic coffee
              farms. These immersive trips allow them to learn directly from
              growers, experience real harvesting techniques, and understand
              what makes truly sustainable coffee.
            </p>
          </div>
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative w-full h-[280px] rounded-md overflow-hidden"
          >
            <Image
              src="/farm-visit.jpg"
              alt="Students visiting coffee farm"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Right: Highlight Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4"
        >
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              className="bg-[#FFF1DC] p-4 rounded-md space-y-3"
            >
              <div className="mt-1">{item.icon}</div>
              <div>
                <h4 className="text-base font-semibold text-black mb-1">
                  {item.title}
                </h4>
                <p className="text-sm text-black">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
