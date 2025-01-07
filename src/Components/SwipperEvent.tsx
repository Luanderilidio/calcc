import { Swiper, SwiperSlide } from "swiper/react";
// import 'swiper/css';  // Estilos principais do Swiper
// import 'swiper/css/pagination';  // Estilos de paginação
// import 'swiper/css/navigation';  // Estilos de navegação
import EventImage from "./EventImage";

// import "../Styles/StylesSwipper.css";

export default function SwipperEvent() {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1.05}
      pagination={{ clickable: true }}
      loop
      // Adicionando módulos necessários
      className=" border-red-500 pb-6"
    >
      <SwiperSlide className="rounded-xl">
        <EventImage />
      </SwiperSlide>
      <SwiperSlide className="rounded-xl">
        <EventImage />
      </SwiperSlide>
      <SwiperSlide className="rounded-xl">
        <EventImage />
      </SwiperSlide>
      <SwiperSlide className="rounded-xl">
        <EventImage />
      </SwiperSlide>
    </Swiper>
  );
}
