import React from "react";
import logo from "../assets/logo.png";
import { AiOutlineCloseCircle as GrClose, AiOutlineHome } from "react-icons/ai";
import { FiPhoneCall, FiInfo } from "react-icons/fi";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = ({ show, handleSideBar }) => {
  return (
    <div className={`md:w-full text-white ${show ? "sidebar active" : "sidebar"}`}>
      <img src={logo} alt="" className="logo block md:hidden mb-4" /> {/* Logo for small screens */}
      <div className="hidden md:flex md:items-center md:mb-4"> {/* Logo and text for larger screens */}
        <img src={logo} alt="" className="logo" />
        <span className="ml-2 text-white text-xl">Your App Name</span>
      </div>
      <ul className="h-4/5 flex flex-col items-center justify-evenly text-center">
        {/* ...existing list items... */}
      </ul>
    </div>
  );
};

export default Header;
