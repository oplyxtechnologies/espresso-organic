"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const sandwiches = [
  {
    name: "Veg Sandwich",
    description: "Fresh veggies layered between toasted bread.",
    image: "/bites/veg-sandwich.png",
  },
  {
    name: "Cheese Sandwich",
    description: "Melted cheese in soft bread — a comforting bite.",
    image: "/bites/cheese-sandwich.png",
  },
  {
    name: "Egg Sandwich",
    description: "Wholesome egg-filled sandwich, lightly seasoned.",
    image: "/bites/egg-sandwich.png",
  },
  {
    name: "Chicken Salami Sandwich",
    description: "Toasted sandwich with chicken salami and greens.",
    image: "/bites/chicken-salami-sandwich.png",
  },
  {
    name: "Tuna Sandwich",
    description: "Fresh tuna and vegetables on crisp bread.",
    image: "/bites/tuna-sandwich.png",
  },
  {
    name: "Mixed Sandwich",
    description: "A rich mix of meats and veggies between bread.",
    image: "/bites/mixed-sandwich.png",
  },
  {
    name: "Veg Burger",
    description: "Crispy veggie patty with fresh lettuce in a soft bun.",
    image: "/bites/veg-burger.png",
  },
  {
    name: "Chicken Burger",
    description: "Juicy chicken burger with crisp lettuce and sauce.",
    image: "/bites/chicken-burger.png",
  },
  {
    name: "Ham Burger",
    description: "Classic ham layered with cheese and veggies.",
    image: "/bites/ham-burger.png",
  },
  {
    name: "Large Size Burger",
    description: "Double-patty delight stacked with flavor.",
    image: "/bites/large-burger.png",
  },
];

const savories = [
  {
    name: "French Fries",
    description: "Crispy golden fries served hot with dip.",
    image: "/bites/french-fries.png",
  },
  {
    name: "Chicken Nuggets",
    description: "Crispy golden nuggets of real chicken.",
    image: "/bites/chicken-nuggets.png",
  },
  {
    name: "Plain Omelet",
    description: "Simple, fluffy, and seasoned egg omelet.",
    image: "/bites/plain-omelet.png",
  },
  {
    name: "Breakfast Set",
    description: "Toasted bread, eggs, sausage, and sides.",
    image: "/bites/breakfast-set.png",
  },
  {
    name: "Chowchow Sadheko",
    description: "Spicy tossed instant noodles with local flavor.",
    image: "/bites/chowchow.png",
  },
  {
    name: "Egg Bread Toasted",
    description: "Eggs mixed with bread, pan-fried golden.",
    image: "/bites/egg-toast.png",
  },
  {
    name: "Fruit Salad (with curd)",
    description: "Seasonal fruits and curd for a refreshing bite.",
    image: "/bites/fruit-salad.png",
  },
  {
    name: "Sausage (Buff/Chicken)",
    description: "Grilled sausages served hot.",
    image: "/bites/sausage.png",
  },
];

function BiteGrid({
  title,
  items,
}: {
  title: string;
  items: typeof sandwiches;
}) {
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
        {items.map((bite, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="relative w-full h-64 rounded-lg overflow-hidden shadow-md group"
          >
            <Image
              src={bite.image}
              alt={bite.name}
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full h-[60%] bg-gradient-to-t from-[#000]/80 to-transparent z-10" />
            <div className="absolute bottom-0 left-0 z-20 p-4 text-white">
              <h4 className="text-lg font-semibold mb-1">{bite.name}</h4>
              <p className="text-sm">{bite.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function FreshBitesSection() {
  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-reporter text-[#2B1E17] mb-6 text-center"
        >
          Fresh Bakes & Light Bites
        </motion.h2>
        <p className="text-[#6F5A48] text-base max-w-xl mx-auto mb-12 text-center">
          All-day treats, made with organic, locally sourced ingredients —
          perfect with your favorite brew.
        </p>

        <BiteGrid title="Sandwiches & Burgers" items={sandwiches} />
        <BiteGrid title="Savory & Breakfast" items={savories} />
      </div>
    </section>
  );
}
