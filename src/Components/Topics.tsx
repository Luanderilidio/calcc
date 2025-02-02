import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useNavigate } from "react-router-dom";
import { ReactNode } from "react";

interface TopicsProps {
  title: string;
  to: string;
  mt: string;
  icon: ReactNode;
}

export default function Topics({ title, mt, to, icon }: TopicsProps) {
  const navigate = useNavigate();
  return (
    <div className={`flex items-center justify-between px-3 ${mt} mb-2 gap-1 `}>
      <div className="flex items-center justify-start gap-2">
        <div className="flex items-center justify-center">{icon}</div>
        <h1 className="text-black/70 font-bold text-2xl text-center ">
          {title}
        </h1>
      </div>
      <button
        onClick={() => navigate(to)}
        className="w-24 flex justify-end transition ease-in-out hover:scale-105 active:scale-95 "
      >
        <KeyboardArrowDownIcon
          className="text-black/70"
          sx={{
            fontSize: 18,
          }}
        />
        <p className="font-bold text-xs text-black/70 ">ver todos</p>
      </button>
    </div>
  );
}
