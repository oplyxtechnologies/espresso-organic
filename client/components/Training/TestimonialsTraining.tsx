"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

interface Testimonial {
  name: string;
  location: string;
  text: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Samuyal Magar",
    location: "Kathmandu",
    text: "One of the best experiences I had when I started learning barista course the environment was very calm and friendly.",
    rating: 5,
    image: "/testimonials/samuyal.png",
  },
  {
    name: "Storz Nepal",
    location: "Kathmandu",
    text: "Best place for learning and boosting your self confidence while learning barista skills. Recommender 100%",
    rating: 5,
    image: "/testimonials/Storz.png",
  },
  {
    name: "Yushan Khadka",
    location: "Kathmadnu",
    text: "This is the best espresso organic coffee house. Please you can visit for counselling and do training. Location is Thapaghaun New Baneshowr",
    rating: 5,
    image: "/testimonials/Yushan.png",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="text-black py-24 px-4 sm:px-6 md:px-12 overflow-hidden w-full">
      <div className="max-w-7xl mx-auto w-full text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-reporter font mb-12"
        >
          What Our Students Say
        </motion.h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!overflow-visible custom-swiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="max-w-md mx-auto mb-10 border border-white/10 rounded-lg p-6 bg-[color:var(--color-secondary)] transition h-full flex flex-col justify-between"
              >
                <div className="flex justify-center mb-4">
                  <Image
                    loading="lazy"
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-1">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-black mb-2 italic">
                  “{testimonial.text}”
                </p>
                <p className="text-sm text-black">{testimonial.location}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom pagination styling */}
        <style jsx global>{`
          .custom-swiper .swiper-pagination-bullet {
            background-color: rgba(0, 0, 0, 0.2);
            opacity: 1;
          }

          .custom-swiper .swiper-pagination-bullet-active {
            background-color: var(--color-primary);
          }
        `}</style>
      </div>
    </section>
  );
};

export default TestimonialsSection;
