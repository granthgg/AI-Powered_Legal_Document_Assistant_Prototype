import React from "react";
import logo from "../assets/logo.png";

const GptAnswer = ({ question }) => {
  return (
    <div className="flex flex-row my-3 gap-4">
      <img src={logo} alt="" className="w-10 h-10 round-full" />

      <div className="container text-white bg-zinc-900 p-3 rounded-lg transition duration-1000 ease-in">
        <span className="my-3">{question.role}</span>
        <p className="">{question.message}</p>
      </div>
    </div>
  );
};

export default GptAnswer;
