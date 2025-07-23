"use client";

import { Coffee, GraduationCap, Home } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const timelineItems = [
  {
    title: "Started with Passion",
    description:
      "We began in 2013 with a love for espresso and hands-on learning.",
    icon: <Coffee size={20} />,
  },
  {
    title: "Barista Workshops",
    description:
      "Launched our first barista training and opened our café to serve organic coffee.",
    icon: <GraduationCap size={20} />,
  },
  {
    title: "Recognized Educator",
    description:
      "Became a trusted center for organic barista education and growth.",
    icon: <Home size={20} />,
  },
];

export default function JourneySection() {
  return (
    <section className="bg-[#FFFAF3] py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left: Timeline Column */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-reporter text-[#2B1E17] mb-12 text-left"
          >
            Our Journey
          </motion.h2>

          <div className="relative border-l-2 border-[#E9691D] pl-6 space-y-8">
            {timelineItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.2 }}
                viewport={{ once: true }}
                className="relative flex gap-4 items-start bg-[#FFF5EB] p-4 rounded-lg"
              >
                <span className="absolute -left-8 top-1.5 w-4 h-4 bg-[#E9691D] rounded-full" />
                <div className="flex items-center justify-center text-[#E9691D] p-2 rounded-md">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-[#2B1E17] text-lg">
                    {item.title}
                  </h4>
                  <p className="text-sm text-[#3C2E29] mt-1">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="w-full rounded-xl overflow-hidden shadow-md"
        >
          <Image
            src="/barista.jpg"
            alt="Espresso Organic Barista Training"
            width={600}
            height={700}
            className="object-cover w-full h-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
