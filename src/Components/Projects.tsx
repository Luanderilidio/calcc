import { IconButton } from "@mui/material";
import CallMadeIcon from "@mui/icons-material/CallMade";
import { useNavigate } from "react-router-dom";

export interface ProjectProps {
  id: string;
  imageProjectUrl: string;
  category: string;
  title: string;
  description: string;
  authorImageUrl: string;
  authorName: string;
  advisorImageUrl: string;
  advisorName: string;
}

export default function Project({
  id,
  imageProjectUrl,
  category,
  title,
  description,
  authorImageUrl,
  authorName,
  advisorImageUrl,
  advisorName,
}: ProjectProps) {

  const navigate = useNavigate()

  return (
    <div className="grid grid-cols-5 grid-rows-2 gap-2 ml-3">
      <div
        style={{
          backgroundImage: `url(${imageProjectUrl})`,
        }}
        className="h-[300px] flex flex-col items-start justify-between py-5 bg-cover bg-top text-white rounded-xl shadow-sm shadow-black/30 relative font-Inter col-span-3 row-span-2 "
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-b-lg" />
        <button className="py-1 px-2 rounded-md font-bold  bg-green-500/20 backdrop-blur-md text-green-500 border border-green-400/30 hover:bg-white/30 transition duration-300 absolute top-3 left-3 text-xs">
          {category}
        </button>
        <button onClick={() => navigate(`/projetos/${id}`)} className="z-10 absolute bottom-4 right-2 border border-white text-white rounded-full ">
          <IconButton>
            <CallMadeIcon sx={{ fontSize: 13, color: " #FFFFFF" }} />
          </IconButton>
        </button>

        <div />
        <div className="z-10 ml-2">
          <h1 className="w-4/5 text-lg font-semibold leading-none text-white text-left border-500-red  mt-2">
            {title}
          </h1>
          <p className="w-3/4 text-[.7rem] font-normal leading-none text-white text-left border-500-red  mt-2 ">
            {description}
          </p>
        </div>
      </div>

      <div
        style={{
          backgroundImage: `url(${authorImageUrl})`,
        }}
        className=" h-full flex flex-col items-start justify-end p-2 col-span-2 row-span-1 bg-cover bg-top rounded-xl relative"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-b-lg" />

        <h1 className="top-2 right-2 text-sm font-bold z-10 text-white absolute">
          Autor
        </h1>
        <div className="flex items-center justify-start gap-2  border-red-500 w-fit mt-2 z-10">
          <img
            src={authorImageUrl}
            alt=""
            className="w-5 h-5 object-cover rounded-full border-2 border-white"
          />
          <h1 className="text-[.7rem] font-bold leading-none text-white">{authorName}</h1>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${advisorImageUrl})`,
        }}
        className=" h-full flex flex-col items-start justify-end p-2 col-span-2 row-span-1 bg-cover bg-top rounded-xl relative"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-b-lg" />

        <h1 className="top-2 right-2 text-sm font-bold z-10 text-white absolute">
          Orientador
        </h1>
        <div className="flex items-center justify-start gap-2  border-red-500 w-fit mt-2 z-10">
          <img
            src={advisorImageUrl}
            alt=""
            className="w-5 h-5 object-cover rounded-full border-2 border-white"
          />
          <h1 className="text-[.7rem] font-bold leading-none text-white">{advisorName}</h1>
        </div>
        <div className="absolute z-10 right-1 top-0 ">
          <IconButton>
            {/* <EmailIcon className="text-white" sx={{ fontSize: 25 }} /> */}
          </IconButton>
        </div>
      </div>
    </div>
  );
}
