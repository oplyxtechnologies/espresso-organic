"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
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
    name: "Ravi K.",
    location: "Kathmandu",
    text: "Working with Oplyx was a game-changer. They delivered a stunning website and branding that truly reflects our vision.",
    rating: 5,
    image: "/testimonials/ravi.png",
  },
  {
    name: "Elena M.",
    location: "Berlin",
    text: "Their UI/UX design transformed our app’s experience. Great communication and flawless delivery.",
    rating: 5,
    image: "/testimonials/elena.png",
  },
  {
    name: "James T.",
    location: "New York",
    text: "We needed a fast MVP. Oplyx delivered early and exceeded expectations.",
    rating: 5,
    image: "/testimonials/james.png",
  },
];

const TestimonialsTraining = () => {
  return (
    <section className="text-black py-24 px-4 sm:px-6 md:px-12 overflow-hidden w-full">
      <div className="max-w-7xl mx-auto w-full text-center">
        <h2 className="text-3xl md:text-4xl font-reporter font mb-12">
          What Our Students Say
        </h2>

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
              <div className="max-w-md mx-auto mb-10 border border-white/10 rounded-lg p-6 bg-[color:var(--color-secondary)] transition h-full flex flex-col justify-between">
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
              </div>
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

export default TestimonialsTraining;
