import { Swiper, SwiperSlide } from "swiper/react";
import Teacher from "./Teacher";
import { useTeachers } from "../Hooks/useTeacher";
import UsefulLink from "./UsefulLink";
import { useUsefulLinks } from "../Hooks/useUsefulLinks";

// import "../Styles/StylesSwipper.css";

export default function SwipperUsefulLink() {


  const { usefulLinks, loading, error } = useUsefulLinks();
  
    if (loading) return <p>Carregando links...</p>;
    if (error) return <p className="text-red-500">Erro: {error}</p>;

  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={2}
      pagination={{ clickable: true }}
      className=" border-red-500 pb-6"
    >
      {usefulLinks.map((_item) => (
        <SwiperSlide className="rounded-xl">
         <UsefulLink id={_item.id} title={_item.title} description={_item.description} imageLinkUrl={_item.imageLinkUrl} usefulLink={_item.usefulLink} category={_item.category} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}