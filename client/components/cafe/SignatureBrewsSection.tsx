"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const hotBrews = [
  {
    title: "Espresso",
    description: "A bold, concentrated coffee shot with deep flavor.",
    image: "/brews/espresso.png",
  },
  {
    title: "Cappuccino",
    description: "Espresso with thick milk foam – rich and smooth.",
    image: "/brews/cappuccino.png",
  },
  {
    title: "Café Latte",
    description: "Espresso with silky steamed milk and light foam.",
    image: "/brews/latte.png",
  },
  {
    title: "Flat White",
    description: "Velvety espresso with micro-foamed milk.",
    image: "/brews/flatwhite.png",
  },
  {
    title: "Café Mocha",
    description: "Espresso blended with chocolate and creamy milk.",
    image: "/brews/mocha.png",
  },
  {
    title: "Honey Latte",
    description: "Espresso sweetened with honey and milk foam.",
    image: "/brews/honey-latte.png",
  },
];

const icedBrews = [
  {
    title: "Iced Latte",
    description: "Cold espresso poured over milk and ice.",
    image: "/brews/iced-latte.png",
  },
  {
    title: "Iced Mocha",
    description: "Espresso, chocolate, and milk over ice, topped with cream.",
    image: "/brews/iced-mocha.png",
  },
  {
    title: "Iced Caramel Latte",
    description: "Caramel syrup, milk, espresso, and ice.",
    image: "/brews/iced-caramel.png",
  },
  {
    title: "Iced Americano",
    description: "Espresso poured over chilled water and ice.",
    image: "/brews/iced-americano.png",
  },
];

const blendedBrews = [
  {
    title: "Blended Mocha",
    description: "Chocolate, espresso, milk blended with ice & cream.",
    image: "/brews/blended-mocha.png",
  },
  {
    title: "Blended Caramel",
    description: "Caramel, espresso, milk, and cream blended with ice.",
    image: "/brews/blended-caramel.png",
  },
  {
    title: "Cold Coffee",
    description: "Espresso, milk, and ice blended into a creamy chill.",
    image: "/brews/coldcoffee.png",
  },
  {
    title: "Frappe (Oreo/Vanilla)",
    description: "Espresso blended with ice cream and topped with cream.",
    image: "/brews/frappe.png",
  },
];

function BrewGrid({ title, items }: { title: string; items: typeof hotBrews }) {
  return (
    <div className="mb-16">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-2xl md:text-2xl font-semibold tracking-tighter text-[#5a453b] mb-6 text-left"
      >
        {title}
      </motion.h3>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((brew, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="relative w-full h-72  rounded-lg overflow-hidden shadow-md group"
          >
            <Image
              src={brew.image}
              alt={brew.title}
              fill
              className="object-cover "
            />
            <div className="absolute bottom-0 left-0 w-full h-[60%] bg-gradient-to-t from-[#000]/80 to-transparent z-10" />
            <div className="absolute bottom-0 left-0 z-20 p-4 text-white">
              <h4 className="text-lg font-semibold mb-1">{brew.title}</h4>
              <p className="text-sm">{brew.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function SignatureBrewsSection() {
  return (
    <section className="bg-[#FFFAF3] py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-reporter text-[#2B1E17] mb-6 text-center"
        >
          Our Signature Brews
        </motion.h2>
        <p className="text-[#6F5A48] text-base max-w-xl mx-auto mb-12 text-center">
          From the classics to creative blends, each cup is crafted with
          intention, skill, and organic ingredients.
        </p>

        <BrewGrid title="Hot Brews" items={hotBrews} />
        <BrewGrid title="Iced Brews" items={icedBrews} />
        <BrewGrid title="Blended & Frappe" items={blendedBrews} />
      </div>
    </section>
  );
}
