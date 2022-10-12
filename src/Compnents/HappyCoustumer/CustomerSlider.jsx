import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import CustomerCard from "./CustomerCard";

export default function CustomerSlider() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        breakpoints={{
          // when window width is >= 640px
          1400: {
            // width: 640,
            slidesPerView: 3,
            spaceBetween: 0,
          },
          // when window width is >= 768px
          1000: {
            // width: 768,
            slidesPerView: 2,
          },
          500: {
            // width: 768,
            slidesPerView: 1,
          },
          200: {
            // width: 768,
            slidesPerView: 1,
          },
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="customerSwiper"
      >
        <SwiperSlide>
          <CustomerCard />
        </SwiperSlide>
        <SwiperSlide>
          <CustomerCard />
        </SwiperSlide>
        <SwiperSlide>
          <CustomerCard />
        </SwiperSlide>
        <SwiperSlide>
          <CustomerCard />
        </SwiperSlide>
        <SwiperSlide>
          <CustomerCard />
        </SwiperSlide>
        <SwiperSlide>
          <CustomerCard />
        </SwiperSlide>
        <SwiperSlide>
          <CustomerCard />
        </SwiperSlide>
        <SwiperSlide>
          <CustomerCard />
        </SwiperSlide>
        <SwiperSlide>
          <CustomerCard />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
