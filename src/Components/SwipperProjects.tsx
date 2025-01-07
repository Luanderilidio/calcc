
import { Swiper, SwiperSlide } from "swiper/react";
import Projects from "./Projects";

// import "../Styles/StylesSwipper.css";

export default function SwipperProjects() {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1.2}
      pagination={{ clickable: true }}
      
      className=" border-red-500 pb-6"
    >
      <SwiperSlide className="rounded-xl">
        <Projects />
      </SwiperSlide>
      <SwiperSlide className="rounded-xl">
        <Projects />
      </SwiperSlide>
      <SwiperSlide className="rounded-xl">
        <Projects />
      </SwiperSlide>
      <SwiperSlide className="rounded-xl">
        <Projects />
      </SwiperSlide>
    </Swiper>
  );
}
