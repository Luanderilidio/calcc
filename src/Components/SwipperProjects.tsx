import { Swiper, SwiperSlide } from "swiper/react";
import Projects from "./Projects";
import { useProjects } from "../Hooks/useProjects";

export default function SwipperProjects() {
  const { projects, loading, error } = useProjects();

  if (loading) return <p>Carregando artigos...</p>;
  if (error) return <p className="text-red-500">Erro: {error}</p>;

  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1.2}
      pagination={{ clickable: true }}
      className=" border-red-500 pb-6"
    >
      {projects.map((_item) => (
        <SwiperSlide className="rounded-xl">
          <Projects
            id={_item.id}
            category={_item.category}
            title={_item.title}
            authorName={_item.authorName}
            description={_item.description}
            authorImageUrl={_item.authorImageUrl}
            imageProjectUrl={_item.imageProjectUrl}
            advisorImageUrl={_item.advisorImageUrl}
            advisorName={_item.advisorName}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
