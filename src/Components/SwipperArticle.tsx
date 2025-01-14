import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Navigation } from "swiper/modules";
import EventImage from "./EventImage";
import Article from "./Article";
import { useArticles } from "../Hooks/useArticles";

// import "../Styles/StylesSwipper.css";

export default function SwipperArticle() {
  const { articles, loading, error } = useArticles();

  if (loading) return <p>Carregando artigos...</p>;
  if (error) return <p className="text-red-500">Erro: {error}</p>;

  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={1.2}
      pagination={{ clickable: true }}
      className=" border-red-500 pb-6"
    >
      {articles.map((_item, index) => (
        <SwiperSlide key={index} className="rounded-xl">
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
