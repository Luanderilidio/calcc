import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useNavigate } from "react-router-dom";
import moment from '../../momentConfig'



interface NoticeProps {
  id: string;
  imageUrl: string; 
  category: string; 
  title: string; 
  authorImageUrl: string;
  authorName: string;
  date: Date
}

export default function Notice({
  id,
  imageUrl,
  category,
  title,
  authorImageUrl,
  authorName,
  date
}: NoticeProps) {

  const navigate = useNavigate()

  const now = moment(date); // Pega a data atual
  const formattedDate = now.format("D [de] MMMM [de] YYYY");

  return (
    <div className="font-Inter flex gap-3">
      <img
        className="w-32 h-32 rounded-md object-cover object-top bg-center  text-white shadow-md shadow-black/30"
        src={imageUrl}
        alt=""
      />
      <div className=" border-red-500 h-full">
        <div>
          <button className="py-[2px] px-[4px] rounded-md font-bold text-[.7rem] bg-green-500/20 backdrop-blur-md text-green-500 border border-green-400/30 hover:bg-white/30 transition duration-300 top-4 right-4 ">
            {category}
          </button>
          <h1 className="font-bold text-xl text-left font-Inter leading-tight text-black/80">
            {title}
          </h1>
          <div className="flex items-center gap-2">
            <img
              className="rounded-full w-4 h-4 object-cover object-top"
              src={authorImageUrl}
            />
            <p className="text-[.7rem]">{authorName} - {formattedDate}</p>
          </div>
        </div>
        <div className="flex justify-end mt-2">
          <button onClick={() => navigate(id)} className="transition ease-in-out hover:scale-105 active:scale-95 flex flex-row gap-0 px-[6px] py-[2px]  border-2 rounded-full items-center justify-center">
            <KeyboardArrowRightIcon
            className=""
              sx={{
                fontSize: 20,
              }}
            />
            <h2 className="font-bold text-xs text-black/80 ">Saiba Mais</h2>
          </button>
        </div>
      </div>
    </div>
  );
}
