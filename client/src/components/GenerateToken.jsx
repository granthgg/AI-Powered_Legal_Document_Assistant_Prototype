import React from "react";
import GenerationSideBar from "./GenerationSideBar";
import Navbar from "./Navbar";
import { useState } from "react";
import MeQuestion from "./MeQuestion";
import GptAnswer from "./GptAnswer";

const GenerateToken = ({ open, handleSideBar }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (message.trim() !== "") {
      const ans = await fetch("https://express-app-nj2x.onrender.com/ask", {
        method: "POST",
        body: JSON.stringify({
          prompt: message,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          return data;
        });
      setMessages([
        ...messages,
        { role: "Me", message },
        { role: ans.role, message: ans.answer },
      ]);
      setMessage("");
    }
  };

  return (
    <div className="App">
      <div>
        <GenerationSideBar show={open} handleSideBar={handleSideBar} />
      </div>
      <div
        className={`flex flex-col justify-between gap-0${
          open ? "h-full w-4/5 absolute right-0 transition-all" : "w-full"
        }`}
      >
        <Navbar show={open} handleSideBar={handleSideBar} />

        <div className="p-5 mb-12 pb-16">
          {messages.map((item, index) => {
            return item.role === "Me" ? (
              <MeQuestion question={item} key={index} />
            ) : item.role === "Judge" ? (
              <GptAnswer question={item} key={index} />
            ) : null;
          })}

          <form
            onSubmit={handleSubmit}
            className={`${
              open ? "w-4/5 transition-all right-0" : " w-full left-0"
            } fixed bottom-0  right-0 bg-white p-4 shadow-lg `}
          >
            <div className="flex">
              <input
                type="text"
                placeholder="Enter the specifications of your document"
                className="w-full p-2 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500 text-black"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button
                type="submit"
                className="ml-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-full"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GenerateToken;
