"use client";

import { useState } from "react";
import blogs from "@/lib/data/blog.json";
import Image from "next/image";
import Link from "next/link";

type Blog = {
  title: string;
  slug: string;
  description: string;
  date: string;
  category: string;
  heroImage?: string;
};

const categories = ["All", "Training", "Sustainability"];
const blogsPerPage = 6;

export default function BlogSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredBlogs =
    selectedCategory === "All"
      ? blogs
      : blogs.filter((blog) => blog.category === selectedCategory);

  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
  const paginatedBlogs = filteredBlogs.slice(
    (currentPage - 1) * blogsPerPage,
    currentPage * blogsPerPage
  );

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1); // reset to first page when category changes
  };

  return (
    <section className="bg-[#FFF9F4] px-4 md:px-10 lg:px-20 py-20">
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
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
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {paginatedBlogs.map((blog: Blog) => (
          <div
            key={blog.slug}
            className="bg-white border border-[#FFD6C2] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-300 flex flex-col"
          >
            <Link href={`/blog/${blog.slug}`} className="flex flex-col h-full">
              {blog.heroImage && (
                <div className="relative h-48 w-full">
                  <Image
                    src={blog.heroImage}
                    alt={blog.title}
                    // fill
                    className="object-cover w-full h-auto"
                    loading="lazy"
                    width={600}
                    height={600}
                  />
                </div>
              )}
              <div className="p-5 flex flex-col flex-grow">
                <span className="text-xs text-[#CB5B2C] font-medium uppercase mb-2">
                  {blog.category}
                </span>
                <h3 className="text-lg font-semibold text-[#2B1E17] mb-2">
                  {blog.title}
                </h3>
                <p className="text-sm text-[#6F5A48] flex-grow">
                  {blog.description}
                </p>
                <div className="mt-4 text-sm text-[#CB5B2C] font-medium hover:underline">
                  Read More →
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-4 mt-12">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className="px-4 py-1 border text-sm rounded border-[#FFD6C2] text-[#CB5B2C] disabled:opacity-40"
          >
            ← Previous
          </button>
          <span className="text-sm font-medium text-[#2B1E17]">
            Page {currentPage} of {totalPages}
          </span>
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className="px-4 py-1 border text-sm rounded border-[#FFD6C2] text-[#CB5B2C] disabled:opacity-40"
          >
            Next →
          </button>
        </div>
      )}
    </section>
  );
}
