import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiUserCircle } from "react-icons/bi";

import logo from "../assets/logo.png";

const Navbar = ({ handleSideBar, show }) => {
  return (
    <header className="flex text-white justify-between items-center ">
      <div className="flex items-center">
        <GiHamburgerMenu
          onClick={handleSideBar}
          className={show && "hidden invisible"}
          size={"1.5rem"}
        />
        <span className="ml-2 hidden md:inline"></span> {/* Added text */}
      </div>
      <div className="flex flex-row justify-between items-center gap-3">
        <img src={logo} className="logo hidden md:block " alt="" />
        <p className="text-xl text-bold md:text-3xl  ">
          LEGAL DASTAVEZ
        </p>
      </div>
      <div className="flex items-center">
        <BiUserCircle />
        <span className="ml-2 hidden md:inline"></span> {/* Added text */}
      </div>
    </header>
  );
};

export default Navbar;
