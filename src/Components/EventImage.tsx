import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import moment from "../../momentConfig";
import { useNavigate } from "react-router-dom";
import { generateUrlSlug } from "../Utils/generateUrlSlug";

export interface EventImageProps {
  id: string;
  modality: string;
  title: string;
  description: string;
  imageEventUrl: string;
  date: Date;
}

export default function EventImage({
  id,
  modality,
  title,
  description,
  imageEventUrl,
  date,
}: EventImageProps) {
  const futureDate = moment(date);
  const formattedFutureDate = futureDate.format("DD");

  const url = generateUrlSlug(title)

  const navigate = useNavigate();

  return (
    <div className="relative rounded-lg ml-3 transition active:scale-95 !h-48">
      <img
        className="w-full h-full object-cover rounded-xl shadow-lg shadow-black/20"
        src={imageEventUrl}
        alt=""
      />
      <div className="w-3/5 flex flex-col items-start justify-start absolute bottom-5 left-4 text-white font-Inter z-50">
        <h1 className=" text-md  font-bold  ">{title}</h1>
        <p className="text-[.7rem] leading-tight">
          {description}
        </p>
      </div>
      {/* <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-b-lg" /> */}
      <div className="flex justify-end">
        <button
          onClick={() => navigate(`/evento/${id}/${url}`)}
          className="transition ease-in-out hover:scale-105 active:scale-95 text-white flex flex-row gap-1 px-2 py-1 border-2 rounded-full items-center justify-center mt-5 absolute z-50 bottom-4 right-4"
        >
          <KeyboardArrowRightIcon
            sx={{ 
              fontSize: 20,
            }}
          />
          <h2 className="font-semibold text-[.7rem] text-white">Saiba Mais</h2>
        </button>
      </div>
      <p className="absolute top-4 left-4 text-xs text-white font-bold">
        Começa em {formattedFutureDate} dias
      </p>
      <button className="py-1 px-2 rounded-md font-bold  bg-green-500/20 backdrop-blur-md text-green-500 border border-green-400/30 hover:bg-white/30 transition duration-300 absolute top-4 right-4 text-xs">
        {modality}
      </button>
    </div>
  );
}
