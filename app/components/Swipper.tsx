"use client";
import React from "react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

interface SlideData {
  imageUrl: string;
  content: string;
}

interface SwiperProps {
  slides: SlideData[];
}

const SwiperComponent: React.FC<SwiperProps> = ({ slides }) => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div>
            <Image src={slide.imageUrl} alt={`Slide ${index}`} fill />
            <p>{slide.content}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;
