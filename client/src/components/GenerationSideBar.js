import React from "react";
import logo from "../assets/logo.png";
import { AiOutlineCloseCircle as GrClose, AiOutlineHome } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";
import { FiInfo } from "react-icons/fi";
import { Link } from "react-router-dom";

const Header = ({ show, handleSideBar }) => {
  return (
    <div className={`"md:w-full " ${show ? "sidebar active" : "sidebar"}`}>
      <img src={logo} alt="" className="logo hidden md:block" />
      <ul className="h-4/5 flex flex-col items-center justify-evenly  text-center">
        <li>
          <Link to="/" className="flex flex-row gap-3 text-gray-800 hover:text-gray-600">
            <AiOutlineHome className="block md:hidden" size={"2rem"} />
            <span className="hidden md:block text-white"> Home</span>
          </Link>
        </li>
        <li>
          <Link to="/about" className="flex flex-row gap-3 text-gray-800 hover:text-gray-600">
            <FiInfo className="block md:hidden" size={"2rem"} />
            <span className="hidden md:block text-white"> About us</span>
          </Link>
        </li>
        <li>
          <Link to="/contact" className="flex flex-row gap-3 text-gray-800 hover:text-gray-600">
            <FiPhoneCall className="block md:hidden " size={"2rem"} />
            <span className="hidden md:block text-white"> Contact Us</span>
          </Link>
        </li>
        <li>
          <Link to="/privacy" className="flex flex-row gap-3 text-gray-800 hover:text-gray-600">
            <MdOutlinePrivacyTip className="block md:hidden " size={"2rem"} />
            <span className="hidden md:block text-white"> Privacy Policy</span>
          </Link>
        </li>
        <li>
          <Link to="/terms" className="flex flex-row gap-3 text-gray-800 hover:text-gray-600">
            <FaHandshake className="block md:hidden" size={"2rem"} />
            <span className="hidden md:block text-white"> Terms and Condition</span>
          </Link>
        </li>
        <li className=" hover:bg-slate-600">
          <GrClose
            onClick={handleSideBar}
            size={"1.5rem"}
            className="hover:ring-black"
          />
        </li>
      </ul>
    </div>
  );
};

export default Header;
