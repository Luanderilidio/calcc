import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Navigation } from "swiper/modules";
import EventImage from "./EventImage";
import Article from "./Article";

// import "../Styles/StylesSwipper.css";

export default function SwipperArticle() {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={1.2}
      pagination={{ clickable: true }}
      
      className=" border-red-500 pb-6"
    >
      <SwiperSlide className="rounded-xl">
        <Article />
      </SwiperSlide>
      <SwiperSlide className="rounded-xl">
        <Article />
      </SwiperSlide>
      <SwiperSlide className="rounded-xl">
        <Article />
      </SwiperSlide>
      <SwiperSlide className="rounded-xl">
        <Article />
      </SwiperSlide>
    </Swiper>
  );
}
