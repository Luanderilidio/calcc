import { Swiper, SwiperSlide } from "swiper/react";
import WhatsGroup from "./WhatsGroup";

// import "../Styles/StylesSwipper.css";

export default function SwipperWhatsGroup() {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={2.3}
      pagination={{ clickable: true }}
      className=" border-red-500 pb-6"
    >
      <SwiperSlide className="rounded-xl">
        <WhatsGroup />
      </SwiperSlide>
      <SwiperSlide className="rounded-xl">
        <WhatsGroup />
      </SwiperSlide>
      <SwiperSlide className="rounded-xl">
        <WhatsGroup />
      </SwiperSlide>
      <SwiperSlide className="rounded-xl">
        <WhatsGroup />
      </SwiperSlide>
    </Swiper>
  );
}
