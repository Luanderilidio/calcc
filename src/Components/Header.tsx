import MenuIcon from "@mui/icons-material/Menu";
import LogoAdasCode from "../Assets/logo_adas_code.png";
import { Dialog, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useBoolean } from "react-hooks-shareable";
import { Transition } from "../Utils/Transition";

export default function Header() {
  const [isMenu, openMenu, closeMenu, toggleMenu] = useBoolean(false);

  return (
    <>
      <div className="border-green-200 border-2 flex flex-row items-center justify-between p-2">
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
        <div className="border-green-200 border-2 flex flex-row items-center justify-between p-2">
          <IconButton className="invisible" onClick={openMenu}>
            <CloseIcon />
          </IconButton>
          <p className="font-bold text-lg">Menu</p>
          <IconButton onClick={closeMenu}>
            <CloseIcon />
          </IconButton>
        </div>
        <div className="w-full mt-36 flex flex-col gap-2 items-center justify-center">
          <p>Sobre</p>
          <p>Artigos</p>
          <p>Chapa</p>
          <p>Eventos</p>
        </div>
      </Dialog>
    </>
  );
}
