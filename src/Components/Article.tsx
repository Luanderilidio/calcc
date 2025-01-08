import CallMadeIcon from "@mui/icons-material/CallMade";
import { useNavigate } from "react-router-dom";
import moment from "../../momentConfig";

export interface ArticleProps {
  id: string;
  category: string;
  title: string;
  authorImageUrl: string;
  authorName: string;
  description: string;
  imageArticleUrl: string;
  date: Date;
}

export default function Article({
  id,
  category,
  title,
  authorImageUrl,
  authorName,
  description,
  imageArticleUrl,
  date,
}: ArticleProps) {

  const navigate = useNavigate();

  const now = moment(date);
  const formattedDate = now.format("ll");

  return (
    <div
      style={{
        backgroundImage: `url(${imageArticleUrl})`,
      }}
      className="w-full h-[400px] font-Inter flex flex-col items-start justify-between py-5 bg-cover bg-center text-white rounded-xl shadow-sm shadow-black/30 relative font-Inter ml-3 transition active:scale-95"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-b-lg" />

      <button className="py-1 px-2 rounded-md font-bold  bg-green-500/20 backdrop-blur-md text-green-500 border border-green-400/30 hover:bg-white/30 transition duration-300 absolute top-3 left-3 text-xs">
       {category}
      </button>
      <button onClick={() => navigate(`artigos/${id}`)} className="z-10 absolute bottom-5 right-3 rounded-full border-2 p-1">
        <CallMadeIcon sx={{ fontSize: 35 }} />
      </button>

      <div />
      <div className="z-10 ml-4">
        <div className="flex items-center gap-2">
          <img
            className="rounded-full w-4 h-4 object-cover object-top"
            src={authorImageUrl}
          />
          <p className="text-[.7rem]">{authorName} - {formattedDate}</p>
        </div>
        <h1 className="w-4/5 text-2xl font-semibold leading-none text-white text-left border-500-red  mt-2">
          {title}
        </h1>
        <p className="w-3/4 text-[.7rem] font-normal leading-none text-white text-left border-500-red  mt-2 ">
          {description}
        </p>
      </div>
    </div>
  );
}
