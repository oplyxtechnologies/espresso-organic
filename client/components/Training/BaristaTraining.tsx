"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";
import Link from "next/link";
import { Coffee, BookOpen } from "lucide-react";
import coursesData from "@/lib/data/course.json";

type Course = {
  slug: string;
  title: string;
  price: number;
  description: string;
  longDescription: string;
  image: string;
  level: string;
  duration: string;
  lectures: number;
  instructor: {
    name: string;
    role: string;
    rating: number;
  };
  curriculum: {
    title: string;
    lectures: string[];
  }[];
  faqs: {
    q: string;
    a: string;
  }[];
  category: string;
};

const courses: Course[] = coursesData.map((course) => ({
  ...course,
  price: Number(course.price),
}));

export default function BaristaTraining() {
  const baristaCourses = courses.filter(
    (course: Course) => course.category === "barista"
  );

  return (
    <section id="courses" className="bg-[#FFF8F2] py-20 px-4 md:px-10 lg:px-20">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h2 className="text-3xl md:text-4xl font-reporter text-[#2B1E17] mb-4">
          Barista Training
        </h2>
        <p className="text-[#6F5A48]">
          Master the craft of espresso with real café experience. Our hands-on
          programs are designed for aspiring baristas who value skill and
          sustainability.
        </p>
      </div>

      {baristaCourses.length > 0 ? (
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            navigation={{
              nextEl: ".swiper-next",
              prevEl: ".swiper-prev",
            }}
          >
            {baristaCourses.map((course, index) => (
              <SwiperSlide key={index}>
                <Link href={`/training/${course.slug}`}>
                  <div className="border border-[#FFD6C2] p-4 rounded-md shadow-sm bg-white h-full flex flex-col justify-between">
                    {/* Badges */}
                    <div className="flex gap-2 mb-2">
                      <span className="flex items-center gap-1 text-xs text-[#CB5B2C] font-medium border border-[#FFD6C2] rounded-full px-2 py-1">
                        <Coffee size={14} /> Organic
                      </span>
                      <span className="flex items-center gap-1 text-xs text-[#CB5B2C] font-medium border border-[#FFD6C2] rounded-full px-2 py-1">
                        <BookOpen size={14} /> Hands-on Training
                      </span>
                    </div>

                    {/* Image */}
                    <div className="relative h-36 md:h-48 rounded-md overflow-hidden mb-4">
                      <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        className="object-cover object-center "
                      />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col gap-2">
                      <h3 className="text-base font-semibold text-[#2B1E17]">
                        {course.title}
                      </h3>
                      <p className="text-sm text-[#6F5A48]">
                        {course.description}
                      </p>
                      <span className="mt-2 text-sm text-[#CB5B2C] font-medium inline-flex items-center hover:underline">
                        Learn More <span className="ml-1">→</span>
                      </span>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <div className="flex justify-end gap-2 mt-6">
            <button className="swiper-prev border border-[#FFD6C2] rounded-full w-8 h-8 text-[#CB5B2C] hover:bg-[#FFECE2] transition">
              ←
            </button>
            <button className="swiper-next border border-[#FFD6C2] rounded-full w-8 h-8 text-[#CB5B2C] hover:bg-[#FFECE2] transition">
              →
            </button>
          </div>
        </div>
      ) : (
        <p className="text-center text-[#6F5A48]">No barista courses found.</p>
      )}
    </section>
  );
}
