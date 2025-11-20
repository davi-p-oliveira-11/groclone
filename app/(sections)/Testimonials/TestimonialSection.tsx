"use client";

import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Testimonial, testimonials } from "./testimonialsData";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { TestimonialCard } from "./TestimonialCard";


interface TestimonialSectionProps {
  testimonials: Testimonial[];
}

export default function TestimonialSection({ testimonials }: TestimonialSectionProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const swiperRef = useRef<any>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const prevRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!swiperRef.current) return;

    // Bind navigation buttons AFTER mount
    swiperRef.current.params.navigation.prevEl = prevRef.current;
    swiperRef.current.params.navigation.nextEl = nextRef.current;
    swiperRef.current.navigation.init();
    swiperRef.current.navigation.update();
  }, []);

  return (
    <div className="bg-[#111]">
      <section className="max-w-[1440px] mx-auto py-20 flex flex-col items-center ">
      <h2 className="text-4xl md:text-6xl font-bold text-center mb-12 text-white">
        What Clients Say
      </h2>

      <p className="text-white"> aaaaaaaaaaaaaa </p>

      <div className="w-full max-w-4xl flex flex-col items-center relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          slidesPerView={1}
          spaceBetween={30}
          autoplay={{
             delay: 3500,
             disableOnInteraction: false,
          }}
          loop={true}
          className="w-full"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <TestimonialCard {...t} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation buttons */}
        <div className="flex gap-4 mt-8">
          <button
            ref={prevRef}
            className="w-10 h-10 rounded-full bg-[#222629] text-white flex items-center justify-center hover:bg-white hover:text-black transition"
          >
            ←
          </button>

          <button
            ref={nextRef}
            className="w-10 h-10 rounded-full bg-[#FC4B37] text-white flex items-center justify-center hover:bg-white hover:text-black transition"
          >
           →
          </button>
        </div>
      </div>
    </section>
    </div>
    
  );
}
