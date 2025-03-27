
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import Article from "./Article";
import { useArticles } from "../Hooks/useArticles";
import { useEffect, useState } from "react";

// import "../Styles/StylesSwipper.css";

export default function SwipperArticle() {
  const { articles, loading, error } = useArticles();

  if (loading) return <p>Carregando artigos...</p>;
  if (error) return <p className="text-red-500">Erro: {error}</p>;

  const [isMobile, setIsMobile] = useState(false);
  
    useEffect(() => {
      setIsMobile(window.innerWidth < 768); // Se a largura for menor que 768px, é mobile
    }, []);

  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={isMobile ? 1.2 : 2.5}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      // modules={[Autoplay]}
      pagination={{ clickable: true }}
      className=" border-green-500 rounded-xl"
    >
      {articles.map((_item, index) => (
        <SwiperSlide key={index} className="rounded-xl ml-4 mb-4 border-blue-500">
          <Article
            id={_item.id}
            category={_item.category}
            title={_item.title}
            authorName={_item.authorName}
            description={_item.description}
            authorImageUrl={_item.authorImageUrl}
            imageUrl={_item.imageUrl}
            date={_item.date}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
