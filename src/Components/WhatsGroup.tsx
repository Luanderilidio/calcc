import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { IconButton } from "@mui/material";

export interface WhatsGroupProps {
  id: string;
  title: string;
  imageTeacherUrl: string;
  room: string;
  teacherName: string;
  imageGroupUrl: string;
  linkGroup: string;
}

export default function WhatsGroup({
  title,
  imageTeacherUrl,
  teacherName,
  room,
  imageGroupUrl,
  linkGroup,
}: WhatsGroupProps) {
  return (
    <div
      onClick={() => window.open(linkGroup, "_blank")}
      className=" border-green-500 bg-cover bg-top w-40 h-40 rounded-xl p-2 flex flex-col items-start justify-end relative shadow-lg shadow-black/30 mb-2 ml-3 transition active:scale-95"
      style={{
        backgroundImage: `url(${imageGroupUrl})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-b-lg" />

      <h1 className="text-sm font-bold z-10 leading-tight text-white">{title}</h1>
      <div className="flex items-center justify-start gap-2  border-red-500 w-fit mt-2 z-10">
        <img
          src={imageTeacherUrl}
          alt=""
          className="w-5 h-5 object-cover rounded-full border-2 border-white"
        />
        <h1 className="text-xs font-normal text-white">{teacherName} </h1>
      </div>
    
      <h1 className="text-sm font-light z-10 leading-tight absolute left-3 top-3 text-white">{room}</h1>
  
      <div className="absolute z-10 right-1 top-0 ">
        <IconButton>
          <WhatsAppIcon className="text-white" sx={{ fontSize: 25 }}  />
        </IconButton>
      </div>
    </div>
  );
}
