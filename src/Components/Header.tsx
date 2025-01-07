import MenuIcon from "@mui/icons-material/Menu";
import { Dialog, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useBoolean } from "react-hooks-shareable";
import { Transition } from "../Utils/Transition";
import { useNavigate } from "react-router-dom";
import LogoAdasCode from "../Assets/logo_adas_code.png";

export default function Header() {
  const [isMenu, openMenu, closeMenu, toggleMenu] = useBoolean(false);
  const navigate = useNavigate();

  const menu = [
    {
      id: 1,
      title: "Sobre",
      hidden: false,
      to: "/",
    },
    {
      id: 2,
      title: "Artigos",
      hidden: true,
      to: "/",
    },
    {
      id: 3,
      title: "Chapa",
      hidden: false,
      to: "/",
    },
    {
      id: 4,
      title: "Eventos",
      hidden: false,
      to: "/",
    },
    {
      id: 5,
      title: "Contatos",
      hidden: false,
      to: "/",
    },
  ];

  return (
    <>
      <div className="bg-white border-b flex flex-row items-center justify-between p-2 shadow-sm">
        <IconButton className="invisible">
          <MenuIcon />
        </IconButton>
        <img className="w-40" src={LogoAdasCode} alt="" />
        <IconButton onClick={toggleMenu}>
          <MenuIcon />
        </IconButton>
      </div>
      <Dialog
        fullScreen
        open={isMenu}
        onClose={closeMenu}
        TransitionComponent={Transition}
      >
        <div className="flex flex-col justify-between items-center h-full">
          <div className="border-green-200 w-full flex flex-row font-Inter items-center justify-between p-2">
            <IconButton className="invisible " onClick={openMenu}>
              <CloseIcon sx={{ fontSize: 35 }} />
            </IconButton>
            <p className="font-bold text-2xl">Menu</p>
            <IconButton onClick={closeMenu}>
              <CloseIcon sx={{ fontSize: 35 }} />
            </IconButton>
          </div>
          <div className="w-full flex flex-col gap-3 items-center justify-center">
            {menu.map((item) => (
              <button
                className={`${item.hidden ? "hidden" : "block"}`}
                onClick={() => navigate(item.to)}
              >
                <p className="transition ease-in-out font-bold text-2xl hover:scale-110">
                  {item.title}
                </p>
              </button>
            ))}
          </div>
          <img className="w-40 mb-10" src={LogoAdasCode} alt="" />
        </div>
      </Dialog>
    </>
  );
}
