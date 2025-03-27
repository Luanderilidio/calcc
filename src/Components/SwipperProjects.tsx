import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import Projects from "./Projects";
import { useProjects } from "../Hooks/useProjects";
import { useEffect, useState } from "react";

export default function SwipperProjects() {
  const { projects, loading, error } = useProjects();

  if (loading) return <p>Carregando artigos...</p>;
  if (error) return <p className="text-red-500">Erro: {error}</p>;

  const [isMobile, setIsMobile] = useState(false);
    
      useEffect(() => {
        setIsMobile(window.innerWidth < 768); // Se a largura for menor que 768px, é mobile
      }, []);

  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={isMobile ? 1.2 : 2}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      // modules={[Autoplay]}
      pagination={{ clickable: true }}
      className=" border-red-500 rounded-xl"
    >
      {projects.map((_item, index) => (
        <SwiperSlide key={index} className="rounded-xl ml-4 mb-4">
          <Projects
            id={_item.id}
            category={_item.category}
            title={_item.title}
            authorName={_item.authorName}
            description={_item.description}
            authorImageUrl={_item.authorImageUrl}
            imageUrl={_item.imageUrl}
            advisorImageUrl={_item.advisorImageUrl}
            advisorName={_item.advisorName}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
