"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";

import courseData from "@/data/course";
import BaristaCourseCard from "@/components/Card/BaristaCourseCard";
import Link from "next/link";

export default function BaristaTrainingSlider() {
  return (
    <div className="relative w-full px-4 sm:px-6 lg:px-0 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-reporter text-center mb-6"
      >
        Barista Training
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center text-lg mb-10 max-w-2xl mx-auto font-lato text-muted-foreground"
      >
        Master the craft of espresso with real café experience. Our hands-on
        programs are designed for aspiring baristas who value skill and
        sustainability.
      </motion.p>

      <div className="relative">
        {/* Swiper Slider */}
        <Swiper
          spaceBetween={16}
          slidesPerView={1.1}
          breakpoints={{
            480: { slidesPerView: 1.2, spaceBetween: 16 },
            640: { slidesPerView: 1.5, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
          }}
          navigation={{
            nextEl: ".next-btn",
            prevEl: ".prev-btn",
          }}
          modules={[Navigation]}
          className="!overflow-visible"
        >
          {courseData.map((course) => (
            <SwiperSlide key={course.id} className="!h-auto">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <BaristaCourseCard {...course} slug={course.link} />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <button className="prev-btn absolute -left-6 top-1/2 -translate-y-1/2 z-10 bg-white border border-muted shadow-md p-2 rounded-full hover:bg-muted transition">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button className="next-btn absolute -right-6 top-1/2 -translate-y-1/2 z-10 bg-white border border-muted shadow-md p-2 rounded-full hover:bg-muted transition">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* CTA Button */}
      <div className="flex justify-center mt-12">
        <Link
          href="/training"
          className="inline-block text-red-600 border border-red-500 px-6 py-2 rounded-md hover:bg-red-500 hover:text-white transition text-sm font-medium"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}
