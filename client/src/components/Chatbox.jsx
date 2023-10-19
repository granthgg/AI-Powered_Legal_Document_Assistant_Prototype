import React from "react";

const Chatbox = ({ item }) => {
  return (
    <>
      <div className=" bg-slate-800 p-1 rounded-lg  text-black mb-2 pb-16">
        <p className="text-sm text-white">
          <span className="bg-slate-400 rounded-full mx-2 px-1">U</span>
          {item}
        </p>
      </div>
    </>
  );
};

export default Chatbox;
