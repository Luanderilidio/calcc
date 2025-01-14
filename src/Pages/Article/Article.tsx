
import { useParams } from "react-router-dom";

import { Avatar, Container } from "@mui/material";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import moment from "../../../momentConfig";
import MarkdownRenderer from "../../Components/MarkdownRenderer";
import Base from "../../Components/Base";
import { useArticles } from "../../Hooks/useArticles";


export interface ArticlePageProps {
  id: string;
  imageUrl: string;
  date: Date;
  category: string;
  title: string;
  description: string;
  authorImageUrl: string;
  authorName: string;
  qtdLike: number;
  qtdView: number;
  qtdShare: number;
  content: string;
}

export default function Article() {
  
  const { id } = useParams<{ id: string }>();

  const { article, loading, error } = useArticles(id);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;
  if (!article) return <p>Notice não encontrado.</p>;

  const now = moment(article.date);
  const formattedDate = now.format("ll");

  return (
    <Base>
      <Container>
        <div className="flex justify-between my-4 animate__animated animate__fadeIn">
          <div className="flex items-center justify-start gap-2">
            <div className="relative">
              <Avatar
                sx={{ width: 40, height: 40 }}
                className="shadow-lg border-white border-1 ring-2 ring-black "
                src={article.authorImageUrl}
              />
            </div>
            <div className="font-Roboto text-black/70">
              <p className="text-sm font-semibold leading-none ">
                {article.authorName}
              </p>
              <p className="leading-none mt-1 text-xs">{formattedDate} dias</p>
            </div>
          </div>
          <div className="flex h-fit gap-1">
            <button className="transition ease-in-out hover:scale-105 active:scale-95 hover:bg-blue-700 hover:text-white border-2 flex items-center justify-center gap-2 rounded-full px-2 py-2  text-black/80">
              <ThumbUpOutlinedIcon sx={{ fontSize: 12 }} />
              <p className="font-semibold text-[.7rem] leading-none">
                {article.qtdLike}
              </p>
            </button>
            <button className=" transition ease-in-out hover:scale-105 active:scale-95 hover:bg-red-700 hover:text-white border-2 flex items-center justify-center gap-2 rounded-full px-2 py-2 text-black/80">
              <RemoveRedEyeOutlinedIcon sx={{ fontSize: 12 }} />
              <p className="font-semibold text-[.7rem] leading-none">
                {article.qtdView}
              </p>
            </button>
            <button className="transition ease-in-out hover:scale-105 active:scale-95 hover:bg-green-700 hover:text-white border-2 flex items-center justify-center gap-2 rounded-full px-2 py-2 text-black/80">
              <ShareOutlinedIcon sx={{ fontSize: 12 }} />
              <p className="font-semibold text-[.7rem] leading-none">
                {article.qtdShare}
              </p>
            </button>
          </div>
        </div>
        <div className="flex items-center flex-col">
          <div className="overflow-hidden rounded-2xl w-full border shadow-md shadow-black/10 relative ">
            <img
              className="w-full h-52 hover:scale-110 transition duration-500 cursor-pointer object-cover object-top rounded-xl shadow-xl "
              src={article.imageUrl}
            />
            <button className="py-[4px] px-[8px] rounded-[4px] font-bold text-xs z-10 bottom-4 right-4 bg-green-500/10 backdrop-blur-md text-green-500 border border-green-400/30 hover:bg-white/30 transition duration-300 absolute">
              {article.category}
            </button>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-b-lg" />
          </div>
        </div>
        <h1 className="w-full text-3xl text-black/90 font-extrabold leading-none font-Inter text-left mt-4 mb-3">
          {article.title}
        </h1>
        <p className="text-sm mb-5">{article.description}.</p>
        <div className="text-xl mb-20 ">
          <MarkdownRenderer content={article.content} />
        </div>
      </Container>
    </Base>
  );
}
