import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';

// import 'swiper/css';  // Estilos principais do Swiper
// import 'swiper/css/pagination';  // Estilos de paginação
// import 'swiper/css/navigation';  // Estilos de navegação
import EventImage from "./EventImage";
import { useEvents } from "../Hooks/useEvents";

// import "../Styles/StylesSwipper.css";

export default function SwipperEvent() {
  const { events, loading, error } = useEvents();

  if (loading) return <p>Carregando eventos...</p>;
  if (error) return <p className="text-red-500">Erro: {error}</p>;

  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1.05}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      loop
      className=" border-red-500 pb-6 "
    >
      {events.map((_item, index) => (
        <SwiperSlide key={index} className="rounded-xl">
          <EventImage
            id={_item.id}
            modality={_item.modality}
            title={_item.title}
            description={_item.description}
            imageEventUrl={_item.imageEventUrl}
            date={_item.date}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
