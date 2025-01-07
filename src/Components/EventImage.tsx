import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export default function EventImage() {
  return (
    <div className="relative rounded-lg ml-3 transition active:scale-95">
      <img
        className="w-full h-full object-cover rounded-xl shadow-lg shadow-black/20"
        src="https://img.freepik.com/premium-vector/gradient-portfolio-templates_52683-80025.jpg?w=996"
        alt=""
      />
      <h1 className="w-3/5 absolute bottom-3 text-white font-Inter text-md leading-none font-bold z-50 left-4">
        Lorem ipsum, dolorasdasd asdasd asdasdasdasd asdasd siasdaasdast amet
      </h1>
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-b-lg" />
      <div className="flex justify-end">
        <button className="transition ease-in-out hover:scale-105 active:scale-95 text-white flex flex-row gap-1 px-2 py-1 border-2 rounded-full items-center justify-center mt-5 absolute z-50 bottom-4 right-4">
          <KeyboardArrowRightIcon
            sx={{
              fontSize: 20,
            }}
          />
          <h2 className="font-semibold text-[.7rem] text-white">Saiba Mais</h2>
        </button>
      </div>
      <p className="absolute top-4 left-4 text-xs text-white font-bold">
        Faltam 3 dias
      </p>
      <button className="py-1 px-2 rounded-md font-bold  bg-green-500/20 backdrop-blur-md text-green-500 border border-green-400/30 hover:bg-white/30 transition duration-300 absolute top-4 right-4 text-xs">
        Data Science
      </button>
    </div>
  );
}
