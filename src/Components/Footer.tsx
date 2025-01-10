import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MailIcon from "@mui/icons-material/Mail";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Divider, IconButton } from "@mui/material";
import LogoAdasCode from "../Assets/logo_adas_code.png";

export default function Footer() {
  return (
    <div className="flex flex-col items-start justify-start bg-[#222] !text-white p-4">
      <button>Home</button>
      <button>Chapa</button>
      <button>Contatos</button>
      <div className="flex gap-2 items-center justify-start mt-6">
        <IconButton>
          <InstagramIcon className="text-white" />
        </IconButton>
        <IconButton>
          <WhatsAppIcon className="text-white" />
        </IconButton>
        <IconButton>
          <MailIcon className="text-white" />
        </IconButton>
        <IconButton>
          <YouTubeIcon className="text-white" />
        </IconButton>
      </div>
      <div className="w-full h-[1px] bg-white opacity-35 my-6" />
      <p className="leading-none text-xs">2025 ADAS Code</p>
      <p className="leading-none text-xs">All Rights Reserved</p>
      <div className="w-full flex items-end justify-end ">
        <img className="w-36" src={LogoAdasCode} alt="" />
      </div>
    </div>
  );
}
