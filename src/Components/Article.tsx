import CallMadeIcon from "@mui/icons-material/CallMade";
import { useNavigate } from "react-router-dom";
import moment from "../../momentConfig";
import { generateUrlSlug } from "../Utils/generateUrlSlug";

export interface ArticleProps {
  id: string;
  category: string;
  title: string;
  authorImageUrl: string;
  authorName: string;
  description: string;
  imageUrl: string;
  date: Date;
}

export default function Article({
  id,
  category,
  title,
  authorImageUrl,
  authorName,
  description,
  imageUrl,
  date,
}: ArticleProps) {
  const navigate = useNavigate();

  const now = moment(date);
  const formattedDate = now.format("ll");
  const url = generateUrlSlug(title);

  return (
    <div
      onClick={() => navigate(`/artigo/${id}/${url}`)}
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
      className="w-full h-[400px] font-Inter flex flex-col items-start justify-between px-4 pb-6  bg-cover bg-center text-white rounded-xl shadow-md shadow-black/10 relative font-Inter transition active:scale-95"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-b-lg" />

      <button className="py-1 px-2 rounded-md font-bold  bg-green-500/20 backdrop-blur-md text-green-500 border border-green-400/30 hover:bg-white/30 transition duration-300 absolute top-3 left-3 text-xs">
        {category}
      </button>

      <div />
      <div className="z-10">
        <div className="flex items-center gap-2">
          <img
            className="rounded-full w-4 h-4 object-cover object-top"
            src={authorImageUrl}
          />
          <p className="text-[.7rem]">
            {authorName} - {formattedDate}
          </p>
        </div>
        <h1 className="w-full text-2xl md:text-xl font-semibold !leading-none text-white text-left border-500-red mt-2">
          {title}
        </h1>
        <div className="grid grid-cols-5 mt-2">
          <p className="col-span-4  w-full  text-[.7rem] font-normal leading-none text-white text-left border-500-red   ">
            {description}
          </p>
          <div className="col-span-1 flex items-center justify-center">
            <button className="z-20 rounded-full border-2 p-1">
              <CallMadeIcon sx={{ fontSize: 35 }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
