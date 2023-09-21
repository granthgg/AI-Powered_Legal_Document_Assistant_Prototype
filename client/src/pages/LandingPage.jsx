import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import About from "../components/About";
import Contact from "../components/Contact";
import Privacy from "../components/Privacy";
import TermsAndCondition from "../components/TermsAndCondition";
import SidebarChat from "../components/SidebarChat";

const Landing = ({ comp, open, handleSideBar, handleSidebarChat, chatbox }) => {
  return (
    <div className="App  h-full">
      <div className="bg-slate-800 ">
        <Header show={open} handleSideBar={handleSideBar} />
      </div>
      <div
        className={`flex flex-col justify-between transition-all   gap-0 h-full ${
          open ? " w-4/5 absolute right-0 " : "w-full "
        }`}
      >
        <SidebarChat chatbox={chatbox} handleSidebarChat={handleSidebarChat} />
        <Navbar show={open} handleSideBar={handleSideBar} />
        {comp === "/" ? (
          <Main handleSidebarChat={handleSidebarChat} />
        ) : comp === "/about" ? (
          <About />
        ) : comp === "/contact" ? (
          <Contact />
        ) : comp === "/privacy" ? (
          <Privacy />
        ) : (
          <TermsAndCondition />
        )}
      </div>
    </div>
  );
};

export default Landing;
