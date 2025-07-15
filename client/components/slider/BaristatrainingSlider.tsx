"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";

import courseData from "@/data/course";
import BaristaCourseCard from "@/components/Card/BaristaCourseCard";

export default function BaristaTrainingSlider() {
  return (
    <div className="relative w-full  px-4 sm:px-6 lg:px-0 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-reporter  text-center font mb-12">
        Barista Training
      </h2>
      <p className="text-center text-lg mb-8 max-w-2xl mx-auto">
        Master the craft of espresso with real café experience. Our hands-on
        programs are designed for aspiring baristas who value skill and
        sustainability.
      </p>
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
            <BaristaCourseCard {...course} slug={course.link} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
