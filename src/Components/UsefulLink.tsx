import LaunchIcon from "@mui/icons-material/Launch";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

export interface UsefulLinkProps {
  id: string;
  title: string;
  description: string;
  imageLinkUrl: string;
  usefulLink: string;
  category: string;
}

export default function UsefulLink({
  title,
  description,
  imageLinkUrl,
  usefulLink,
  category,
}: UsefulLinkProps) {
  return (
    <div
      onClick={() => window.open(usefulLink, "_blank")}
      className="w-full relative rounded-lg mx-3 transition active:scale-95 !h-48"
    >
      <img
        className="w-full h-full object-cover rounded-xl shadow-lg shadow-black/20"
        src={imageLinkUrl}
        alt=""
      />
      <div className="w-full flex flex-col items-start gap-2 justify-start absolute bottom-5 left-4 text-white font-Inter z-50">
        <h1 className="w-3/5 text-lg leading-none font-bold">{title}</h1>
        <p className=" w-4/5 text-[.7rem] leading-tight">
          {/* {description} */}
          {description}
        </p>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-b-lg" />
      {/* <div className="flex justify-end">
        <button
          //   onClick={() => navigate(id)}
          className="transition ease-in-out hover:scale-105 active:scale-95 text-white flex flex-row gap-1 px-3 py-1 border-2 rounded-full items-center justify-center mt-5 absolute z-50 bottom-4 right-4"
        >
          <h2 className="font-semibold text-[.7rem] text-white">Saiba Mais</h2>
          <LaunchIcon
            sx={{
              fontSize: 15,
            }}
          />
        </button>
      </div> */}
      <LaunchIcon
      className="absolute right-3 bottom-4 z-20 text-white"
        sx={{
          fontSize: 30,
        }}
      />
      <div className="w-full flex items-center justify-between absolute top-4 z-20 text-white px-3">
        <p className=" text-3xl font-bold">{category}</p>
        <PictureAsPdfIcon sx={{ fontSize: 30 }} />
      </div>
    </div>
  );
}
