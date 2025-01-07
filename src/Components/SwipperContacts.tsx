import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Navigation } from "swiper/modules";
import EventImage from "./EventImage";
import Article from "./Article";
import Contact from "./Contact";

// import "../Styles/StylesSwipper.css";

export default function SwipperContacts() {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={2.3}
      pagination={{ clickable: true }}
      
      className=" border-red-500 pb-6"
    >
      <SwiperSlide className="rounded-xl">
        <Contact />
      </SwiperSlide>
      <SwiperSlide className="rounded-xl">
        <Contact />
      </SwiperSlide>
      <SwiperSlide className="rounded-xl">
        <Contact />
      </SwiperSlide>
      <SwiperSlide className="rounded-xl">
        <Contact />
      </SwiperSlide>
    </Swiper>
  );
}
