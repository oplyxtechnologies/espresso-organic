"use client";

import { useState } from "react";

type Blog = {
  title: string;
  slug: string;
  description: string;
  date: string;
  category: string;
};

const blogs: Blog[] = [
  {
    title: "Mastering the Art of Espresso",
    slug: "mastering-espresso-art",
    description:
      "Everything you need to know to pull the perfect shot, every time.",
    date: "2025-07-01",
    category: "Training",
  },
  {
    title: "Why Organic Beans Matter",
    slug: "organic-beans-benefits",
    description:
      "A deep dive into the health and sustainability advantages of organic beans.",
    date: "2025-07-03",
    category: "Sustainability",
  },
  {
    title: "How to Froth Milk Like a Pro",
    slug: "froth-milk-guide",
    description:
      "Learn how to create silky smooth microfoam for cappuccinos and lattes.",
    date: "2025-07-05",
    category: "Training",
  },
  {
    title: "Compostable Packaging & Its Impact",
    slug: "eco-packaging-impact",
    description:
      "How sustainable packaging is helping reduce waste in the coffee industry.",
    date: "2025-07-08",
    category: "Sustainability",
  },
];

const categories = ["All", "Training", "Sustainability"];

export default function BlogSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredBlogs =
    selectedCategory === "All"
      ? blogs
      : blogs.filter((blog) => blog.category === selectedCategory);

  return (
    <section className="bg-[#FFF9F4] px-4 md:px-10 lg:px-20 py-20">
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-1 rounded-full text-sm font-medium border transition
              ${
                selectedCategory === cat
                  ? "bg-[#CB5B2C] text-white border-[#CB5B2C]"
                  : "border-[#FFD6C2] text-[#CB5B2C] hover:bg-[#FFECE2]"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Blog Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredBlogs.map((blog) => (
          <div
            key={blog.slug}
            className="bg-white border border-[#FFD6C2] rounded-md p-5 flex flex-col justify-between"
          >
            <div>
              <span className="text-xs text-[#CB5B2C] font-medium uppercase">
                {blog.category}
              </span>
              <h3 className="text-lg font-semibold text-[#2B1E17] mt-2 mb-2">
                {blog.title}
              </h3>
              <p className="text-sm text-[#6F5A48]">{blog.description}</p>
            </div>
            <div className="mt-4 text-sm text-[#CB5B2C] font-medium hover:underline">
              <a href={`/blog/${blog.slug}`}>Read More →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
