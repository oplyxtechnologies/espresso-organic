"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const blogPosts = [
  {
    title: "Minimalist Brewing: The Beauty of Simplicity",
    excerpt:
      "Discover how less gear and more attention can elevate your espresso game.",
    image: "/barista.jpg",
    slug: "/blog/minimalist-brewing",
  },
  {
    title: "Why Organic Coffee Matters",
    excerpt:
      "Learn how organic beans impact your health, the planet, and the people who grow them.",
    image: "/barista.jpg",
    slug: "/blog/organic-coffee-matters",
  },
  {
    title: "5 Barista Skills You Only Learn On the Job",
    excerpt:
      "From workflow rhythm to pressure control, here’s what real café training teaches you.",
    image: "/barista.jpg",
    slug: "/blog/barista-skills",
  },
];

export default function BlogPreview() {
  return (
    <section className="bg-[#FFFAF3] py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-reporter text-center text-[#2B1E17] mb-12"
        >
          From Our Blog
        </motion.h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="border border-[#E5E5E5] rounded-md bg-white shadow-sm hover:shadow-md transition p-4 flex flex-col"
            >
              <div className="rounded overflow-hidden mb-4">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={240}
                  className="w-full h-48 object-cover rounded"
                />
              </div>
              <h3 className="font-semibold text-[#2B1E17] mb-2">
                {post.title}
              </h3>
              <p className="text-sm text-[#3C2E29] flex-grow mb-4">
                {post.excerpt}
              </p>
              <Link
                href={post.slug}
                className="text-sm text-[#2B1E17] font-medium inline-flex items-center gap-1 hover:underline"
              >
                Learn More <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <Link
            href="/cafe"
            className="bg-[#E32B2B] text-white text-sm font-semibold px-6 py-3 rounded-sm hover:bg-[#b42323] transition"
          >
            Visit Our Café
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
