import InfoIcon from "@mui/icons-material/Info";
import Image1 from "../Assets/unemat.jpg";

export default function Welcome() {
  return (
    <div className="px-3 ">
      <div
        style={{
          backgroundImage: `url(${Image1})`,
        }}
        className="font-Inter flex flex-col items-center justify-center py-5 bg-cover bg-center text-white rounded-xl shadow-sm shadow-black/30 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-b-lg" />
        <h2 className="font-semibold text-xs z-10">Bem vind@s!</h2>

        <h1 className=" font-extrabold text-4xl text-center leading-none z-10">
          CIÊNCIA DA COMPUTAÇÃO <br />
          <span className="font-normal">- CALCC</span>
        </h1>
        <button className="transition ease-in-out hover:scale-105 active:scale-95 flex flex-row gap-1 px-3 py-2 border-2 rounded-full items-center justify-center mt-5 z-10">
          <InfoIcon
            sx={{
              fontSize: 20,
            }}
          />
          <h2 className="font-semibold text-sm">Saiba Mais</h2>
        </button>
      </div>
    </div>
  );
}
