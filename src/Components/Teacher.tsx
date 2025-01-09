import EmailIcon from "@mui/icons-material/Email";
import { Alert, Button, IconButton } from "@mui/material";
import { useState } from "react";

export interface TeacherProps {
  id: string;
  name: string;
  description: string;
  email: string;
  teacherImageUrl: string;
}

export default function Teacher({
  name,
  description,
  email,
  teacherImageUrl,
}: TeacherProps) {
  const [open, setOpen] = useState(false);

  const handleCopyToClipboard = (email: string) => {
    navigator.clipboard.writeText(email).catch((err) => {
      console.error("Erro ao copiar o texto: ", err);
    });
    setOpen(!open)
  };

  return (
    <div
      onClick={() => handleCopyToClipboard(email)}
      className=" border-green-500 bg-cover bg-top w-40 h-40 rounded-xl p-2 flex flex-col items-start justify-end relative shadow-lg shadow-black/30 mb-2 ml-3 transition active:scale-95"
      style={{
        backgroundImage: `url(${teacherImageUrl})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-b-lg" />

      <h1 className="text-sm font-bold z-10 text-white">{description}</h1>
      <div className="flex items-center justify-start gap-2  border-red-500 w-fit mt-2 z-10">
        <img
          src={teacherImageUrl}
          alt=""
          className="w-5 h-5 object-cover rounded-full border-2 border-white"
        />
        <h1 className="text-xs font-normal text-white">{name}</h1>
      </div>
      <button className="absolute z-10 right-1 top-0 flex items-center gap-2">
        {open && (
          <p className="transition ease-in-out text-xs font-bold text-green-500"> Email copiado!</p>
        )}
        <IconButton>
          <EmailIcon className="text-white" sx={{ fontSize: 25 }} />
        </IconButton>
      </button>
    </div>
  );
}
