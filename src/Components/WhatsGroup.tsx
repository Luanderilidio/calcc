import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { IconButton } from "@mui/material";

export default function WhatsGroup() {
  return (
    <div
      className=" border-green-500 bg-cover bg-top w-40 h-40 rounded-xl p-2 flex flex-col items-start justify-end relative shadow-lg shadow-black/30 mb-2 ml-3 transition active:scale-95"
      style={{
        backgroundImage: `url(${"https://img.freepik.com/free-photo/confident-guy-with-crossed-arms-standing-front-stairs_74855-1571.jpg?t=st=1736272640~exp=1736276240~hmac=3fac19790d7bacb1967c4c4525c9374f7a3b647f1d332abbf6eabbec02d1e394&w=740"})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-b-lg" />

      <h1 className="text-sm font-bold z-10 text-white">
      IC - Introdução à Computação
      </h1>
      <div className="flex items-center justify-start gap-2  border-red-500 w-fit mt-2 z-10">
        <img
          src="https://img.freepik.com/free-photo/confident-guy-with-crossed-arms-standing-front-stairs_74855-1571.jpg?t=st=1736272640~exp=1736276240~hmac=3fac19790d7bacb1967c4c4525c9374f7a3b647f1d332abbf6eabbec02d1e394&w=740"
          alt=""
          className="w-5 h-5 object-cover rounded-full border-2 border-white"
        />
        <h1 className="text-xs font-normal text-white">Luander Ilidio</h1>
      </div>
      <div className="absolute z-10 right-1 top-0 ">
        <IconButton>
          <WhatsAppIcon className="text-white" sx={{ fontSize: 25 }} />
        </IconButton>
      </div>
    </div>
  );
}
