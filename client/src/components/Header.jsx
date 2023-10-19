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
      <img src={logo} alt="" className="logo hidden md:block mb-4" />
      <ul className="h-4/5 flex flex-col items-center justify-evenly text-center">
        <li className="hover:bg-gray-700 p-2 rounded">
          <Link to="/" className="flex flex-row gap-3 items-center">
            <AiOutlineHome className="block md:hidden" size={"2rem"} />
            <span className="hidden md:block text-white">Home</span>
          </Link>
        </li>
        <li className="hover:bg-gray-700 p-2 rounded">
          <Link to="/about" className="flex flex-row gap-3 items-center">
            <FiInfo className="block md:hidden" size={"2rem"} />
            <span className="hidden md:block">About us</span>
          </Link>
        </li>
        <li className="hover:bg-gray-700 p-2 rounded">
          <Link to="/contact" className="flex flex-row gap-3 items-center">
            <FiPhoneCall className="block md:hidden" size={"2rem"} />
            <span className="hidden md:block">Contact Us</span>
          </Link>
        </li>
        <li className="hover:bg-gray-700 p-2 rounded">
          <Link to="/privacy" className="flex flex-row gap-3 items-center">
            <MdOutlinePrivacyTip className="block md:hidden" size={"2rem"} />
            <span className="hidden md:block">Privacy Policy</span>
          </Link>
        </li>
        <li className="hover:bg-gray-700 p-2 rounded">
          <Link to="/terms" className="flex flex-row gap-3 items-center">
            <FaHandshake className="block md:hidden" size={"2rem"} />
            <span className="hidden md:block">Terms and Conditions</span>
          </Link>
        </li>
        <li className="hover:bg-gray-700 p-2 rounded">
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
