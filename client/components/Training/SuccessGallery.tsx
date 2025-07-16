"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const students = [
  {
    name: "Aarav Tamang",
    caption: "Now working at an award-winning café in Pokhara.",
    image: "/gallery/student1.jpeg",
    span: "col-span-2 row-span-1",
  },
  {
    name: "Pema Sherpa",
    caption: "Opened her own specialty coffee shop in Kathmandu.",
    image: "/gallery/student2.jpeg",
    span: "col-span-1 row-span-1",
  },
  {
    name: "Sagar Thapa",
    caption: "Promoted to Head Barista at a leading hotel chain.",
    image: "/gallery/student3.jpeg",
    span: "col-span-1 row-span-2",
  },
  {
    name: "Nisha Gurung",
    caption: "Certified and now mentoring junior baristas.",
    image: "/gallery/student4.jpeg",
    span: "col-span-2 row-span-1",
  },
  {
    name: "Kiran Adhikari",
    caption: "Placed top 5 in National Latte Art Championship.",
    image: "/gallery/student5.jpeg",
    span: "col-span-1 row-span-1",
  },
];

export default function SuccessGallery() {
  return (
    <section className="bg-[#FFF8F2] py-20 px-4 md:px-10 lg:px-20">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-reporter text-[#2B1E17] mb-4">
          Stories of Success
        </h2>
        <p className="text-[#6F5A48]">
          Our graduates are brewing impact everywhere—from local cafés to
          international barista competitions.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-4">
        {students.map((student, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`relative rounded-xl overflow-hidden group ${student.span} shadow-md`}
          >
            <Image
              src={student.image}
              alt={student.name}
              fill
              className="object-cover transition-transform group-hover:scale-105 duration-300"
            />
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end text-white">
              <h3 className="font-semibold text-lg">{student.name}</h3>
              <p className="text-sm">{student.caption}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
