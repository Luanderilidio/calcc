import MenuIcon from "@mui/icons-material/Menu";
import LogoAdasCode from "../Assets/logo_adas_code.png";
import { Dialog, IconButton } from "@mui/material";
import React from "react";
import { useBoolean } from "react-hooks-shareable";
import { Transition } from "../Utils/Transition";

export default function Header() {
  const [isMenu, openMenu, closeMenu, toggleMenu] = useBoolean(false);

  return (
    <>
      <div className="border-green-200 border-2 flex flex-row items-center justify-around py-2">
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
        Menu
      </Dialog>
    </>
  );
}
