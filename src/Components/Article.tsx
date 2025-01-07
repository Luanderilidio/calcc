import CallMadeIcon from "@mui/icons-material/CallMade";

export default function Article() {
  return (
    <div
      style={{
        backgroundImage: `url(${"https://img.freepik.com/premium-psd/damage-paper-psd-editable-text-effect_68155-283.jpg?w=826"})`,
      }}
      className="w-full h-[500px] font-Inter flex flex-col items-start justify-between py-5 bg-cover bg-center text-white rounded-xl shadow-sm shadow-black/30 relative font-Inter ml-3 transition active:scale-95"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-b-lg" />

      <button className="py-1 px-2 rounded-md font-bold  bg-green-500/20 backdrop-blur-md text-green-500 border border-green-400/30 hover:bg-white/30 transition duration-300 absolute top-3 left-3 text-xs">
        Data Science
      </button>
      <button className="z-10 absolute bottom-5 right-3 rounded-full border-2 p-1">
        <CallMadeIcon sx={{ fontSize: 35 }} />
      </button>

      <div />
      <div className="z-10 ml-4">
        <div className="flex items-center gap-2">
          <img
            className="rounded-full w-4 h-4 object-cover object-top"
            src="https://cdn-cm.freepik.com/resources/a37f85c4-b841-4de3-861a-0e6bce8ffa65.jpg?token=exp=1736192299~hmac=f5d720ef61870a5999c6467c77003a48e4b0f13defc8576fe59bb789d0201617"
          />
          <p className="text-[.7rem]">IDN Times - Abril 17, 2023</p>
        </div>
        <h1 className="w-4/5 text-2xl font-semibold leading-none text-white text-left border-500-red  mt-2">
          Lorem ipsum dolor sit, amet consectetur
        </h1>
        <p className="w-3/4 text-[.7rem] font-normal leading-none text-white text-left border-500-red  mt-2 ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus ut,
          ipsa omnis error laboriosam quibusdam enim nisi. Illo excepturi, totam
          labore quibusdam quaerat delectus ducimus modi itaque ratione. Iusto,
          voluptatum.
        </p>
      </div>
    </div>
  );
}
