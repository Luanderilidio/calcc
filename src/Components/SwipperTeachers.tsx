import { Swiper, SwiperSlide } from "swiper/react";
import Teacher from "./Teacher";
import { useTeachers } from "../Hooks/useTeacher";

// import "../Styles/StylesSwipper.css";

export default function SwipperContacts() {


  const { teachers, loading, error } = useTeachers();
  
    if (loading) return <p>Carregando artigos...</p>;
    if (error) return <p className="text-red-500">Erro: {error}</p>;

  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={2.3}
      pagination={{ clickable: true }}
      className=" border-red-500 pb-6"
    >
      {teachers.map((_item) => (
        <SwiperSlide className="rounded-xl">
          <Teacher
        id={_item.id}
        name={_item.name}
        description={_item.description}
        email={_item.email}
        teacherImageUrl={_item.teacherImageUrl}
      />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
