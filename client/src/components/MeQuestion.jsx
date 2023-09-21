import React from "react";
import avatar from "../assets/avatar.jpeg";

function MeQuestion({ question }) {
  return (
    <div className="flex flex-row my-3 gap-4">
      <div className="container text-black bg-slate-300 p-3 rounded-lg">
        <span className="text-black my-3">{question.role}</span>
        <p className="text-black">{question.message}</p>
      </div>
      <img src={avatar} alt="" className="w-10 h-10 rounded-full" />
    </div>
  );
}

export default MeQuestion;
