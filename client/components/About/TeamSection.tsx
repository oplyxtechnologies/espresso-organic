"use client";

import Image from "next/image";

const teamMembers = [
  {
    name: "Manish Shrestha",
    role: "Founder",
    image: "/images/barista.jpg",
  },
  {
    name: "Priyanka Karki",
    role: "Head Trainer",
    image: "/images/priyanka.jpg",
  },
  {
    name: "Dalai Lama",
    role: "Café Manager",
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
            <div className="w-full aspect-square relative rounded-xl overflow-hidden mb-4">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>
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
