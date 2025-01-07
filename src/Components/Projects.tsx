import { IconButton } from "@mui/material";
import CallMadeIcon from "@mui/icons-material/CallMade";

export default function Projects() {
  return (
    <div className="grid grid-cols-5 grid-rows-2 gap-2 ml-3">
      <div
        style={{
          backgroundImage: `url(${"https://img.freepik.com/premium-psd/damage-paper-psd-editable-text-effect_68155-283.jpg?w=826"})`,
        }}
        className="h-[300px] flex flex-col items-start justify-between py-5 bg-cover bg-center text-white rounded-xl shadow-sm shadow-black/30 relative font-Inter col-span-3 row-span-2 "
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-b-lg" />
        <button className="py-1 px-2 rounded-md font-bold  bg-green-500/20 backdrop-blur-md text-green-500 border border-green-400/30 hover:bg-white/30 transition duration-300 absolute top-3 left-3 text-xs">
          Data Science
        </button>
        <div className="z-10 absolute bottom-4 right-2 border border-white text-white rounded-full ">
          <IconButton>
            <CallMadeIcon sx={{ fontSize: 13, color: " #FFFFFF" }} />
          </IconButton>
        </div>

        <div />
        <div className="z-10 ml-2">
          <h1 className="w-full text-lg font-semibold leading-none text-white text-left border-500-red  mt-2">
            Lorem ipsum dolor sit, amet consectetur
          </h1>
          <p className="w-3/4 text-[.7rem] font-normal leading-none text-white text-left border-500-red  mt-2 ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus ut
          </p>
        </div>
      </div>

      <div
        style={{
          backgroundImage: `url(${"https://img.freepik.com/free-photo/boy-studying-university-library_23-2148844679.jpg?t=st=1736277956~exp=1736281556~hmac=03a3db6b8e3dfb646a9dcbd9bb58970ac583b795a341ceb7b82a58c56f558a47&w=360"})`,
        }}
        className=" h-full flex flex-col items-start justify-end p-2 col-span-2 row-span-1 bg-cover rounded-xl relative"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-b-lg" />

        <h1 className="top-2 right-2 text-sm font-bold z-10 text-white absolute">
          Autor
        </h1>
        <div className="flex items-center justify-start gap-2  border-red-500 w-fit mt-2 z-10">
          <img
            src="https://img.freepik.com/free-photo/confident-guy-with-crossed-arms-standing-front-stairs_74855-1571.jpg?t=st=1736272640~exp=1736276240~hmac=3fac19790d7bacb1967c4c4525c9374f7a3b647f1d332abbf6eabbec02d1e394&w=740"
            alt=""
            className="w-5 h-5 object-cover rounded-full border-2 border-white"
          />
          <h1 className="text-xs font-normal text-white">Luander Ilidio</h1>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${"https://img.freepik.com/free-photo/boy-studying-university-library_23-2148844679.jpg?t=st=1736277956~exp=1736281556~hmac=03a3db6b8e3dfb646a9dcbd9bb58970ac583b795a341ceb7b82a58c56f558a47&w=360"})`,
        }}
        className=" h-full flex flex-col items-start justify-end p-2 col-span-2 row-span-1 bg-cover rounded-xl relative"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-b-lg" />

        <h1 className="top-2 right-2 text-sm font-bold z-10 text-white absolute">
          Orientador
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
            {/* <EmailIcon className="text-white" sx={{ fontSize: 25 }} /> */}
          </IconButton>
        </div>
      </div>
    </div>
  );
}
