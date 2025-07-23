"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Man Bahadur Shrestha",
    role: "Founder / Chairman",
    image: "/images/chairman.jpeg",
  },
  {
    name: "Manish Shrestha",
    role: "Café and School Manager",
    image: "/images/barista.jpg",
  },
  {
    name: "Dalai Tamang",
    role: "Head Trainer",
    image: "/images/dalailama.jpg",
  },
];

export default function TeamSection() {
  return (
    <section className="bg-[#FFF8F2] py-20 px-4 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-reporter text-[#2B1E17]">
          The People Behind the Craft
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-left">
        {teamMembers.map((member, i) => (
          <div key={i} className="flex flex-col items-center">
            <motion.div
              initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
              whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: i * 0.2,
              }}
              viewport={{ once: true }}
              className="w-full aspect-square relative rounded-xl overflow-hidden mb-4"
            >
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
              />
            </motion.div>
            <h3 className="font-semibold text-lg text-[#2B1E17]">
              {member.name}
            </h3>
            <p className="text-[#8B7766] text-sm">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
