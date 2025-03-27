import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useNavigate } from "react-router-dom";
import moment from "../../momentConfig";
import { generateUrlSlug } from "../Utils/generateUrlSlug";

export interface NoticeProps {
  id: string;
  imageUrl: string;
  category: string;
  title: string;
  authorImageUrl: string;
  authorName: string;
  date: Date;
}

export default function Notice({
  id,
  imageUrl,
  category,
  title,
  authorImageUrl,
  authorName,
  date,
}: NoticeProps) {
  const navigate = useNavigate();

  const now = moment(date);
  const formattedDate = now.format("ll");

  const url = generateUrlSlug(title);

  return (
    <div className="font-Inter h-full flex gap-3 border-red-500 group">
      <img
        className="w-32 h-32  border-red-500 rounded-md object-cover object-top bg-center  text-white shadow-md shadow-black/30 transition ease-in-out group-hover:scale-105 active:scale-95 duration-200 "
          src={imageUrl}
          alt=""
        />
      <div className=" w-full flex flex-col justify-between   border-violet-500 ">
    
        <div className="h-fit w-full flex flex-col items-start justify-start border-green-500 ">
          <button className="py-[2px] px-[4px] rounded-[4px] font-bold text-[.5rem] md:text-xs bg-green-500/20 backdrop-blur-md text-green-500 border border-green-400/30 hover:bg-white/30 transition ease-in-out hover:scale-105 active:scale-95 duration-300 ">
            {category}
          </button>
          <h1 className="w-full font-bold text-md md:text-2xl text-left font-Inter  group-hover:text-blue-700 transition-colors ease-in-out duration-400 leading-tight text-black/80">
            {title}
          </h1>
          <div className="flex items-center gap-2 mt-1">
            <img
              className="rounded-full w-4 h-4 object-cover object-top"
              src={authorImageUrl}
            />
            <p className="text-[.6rem] md:text-xs">
              {authorName} -{" "}
              <span className="italic font-light">{formattedDate}</span>{" "}
            </p>
          </div>
        </div>

        <div className="w-full flex justify-end ">
          <button
            onClick={() => navigate(`/noticia/${id}/${url}`)}
            className="transition ease-in-out hover:scale-105 active:scale-95 flex flex-row gap-0 px-[6px] py-[6px]  border-2 rounded-full items-center justify-center"
          >
            <KeyboardArrowRightIcon
              className=""
              sx={{
                fontSize: 15,
              }}
            />
            <h2 className="font-bold text-[.5rem] md:text-xs text-black/80 ">
              Saiba Mais
            </h2>
          </button>
        </div>
      </div>
    </div>
  );
}
