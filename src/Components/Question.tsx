import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import Image1 from "../Assets/unemat.jpg";

export default function Question() {
  return (
    <div className="px-3 mb-5 ">
      <div
        style={{
          backgroundImage: `url(${Image1})`,
        }}
        className="font-Inter flex flex-col items-center justify-center py-5 bg-cover bg-center text-white rounded-xl shadow-sm shadow-black/30 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-b-lg" />

        <h1 className=" font-extrabold text-4xl text-center leading-none z-10">
          TEM ALGUMA DÚVIDA? <br />
          <span className="font-normal text-2xl">Entre em contato</span>
        </h1>
        <div className="w-full flex items-center justify-end gap-3 px-3">
          <button onClick={() => window.open("luander.arruda@unemat.br", "_blank")} className="w-full transition ease-in-out hover:scale-105 active:scale-95 flex flex-row gap-1 px-3 py-2 border-2 rounded-full items-center justify-center mt-5 z-10">
            <EmailIcon
              sx={{
                fontSize: 20,
              }}
            />
            <h2 className="font-semibold text-sm">Coordenação</h2>
          </button>
          <button onClick={() => window.open("luander.arruda@unemat.br", "_blank")} className="w-full transition ease-in-out hover:scale-105 active:scale-95 flex flex-row gap-1 px-3 py-2 border-2 rounded-full items-center justify-center mt-5 z-10">
            <WhatsAppIcon
              sx={{
                fontSize: 20,
              }}
            />
            <h2 className="font-semibold text-sm whitespace-nowrap">Centro Acadêmico</h2>
          </button>
        </div>
      </div>
    </div>
  );
}
