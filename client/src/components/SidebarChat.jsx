import React, { useState } from "react";
import { IoSend } from "react-icons/io5";
import Chatbox from "./Chatbox";

const SidebarChat = ({ chatbox, handleSidebarChat }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newMessage.trim() === "") return;
    setMessages([...messages, newMessage]);
    setNewMessage("");
  };

  return (
    <div
      className={`sidebarchat h-parent w-parent fixed  flex flex-row justify-between transition-all ${
        chatbox ? "top-0 left-0 right-0 bottom-0" : "notActive"
      }`}
    >
      <div className="w-1/5 md:w-3/5 transition-all" onClick={handleSidebarChat}></div>
      <div className="bg-black w-4/5 md:w-2/5 rounded overflow-auto transition-all ">
        <div>
          <p className="text-center mt-3">DOCUMENT SUGGESTION</p>
          <ul className="text-left bg-zinc-400 border-zinc-50 border-2  p-1 m-3 rounded-lg leading-3 text-xs ">
            <li>Activity Waiver Form</li>
            <li>Amending Agreement</li>
            <li>Bill for Sale</li>
            <li>Building Contracts</li>
            <li>Catering Contracts</li>
            <li>Cease and Decease Letter</li>
            <li>Child Medical Consent</li>
            <li>Child Travel Consent</li>
            <li>Cleaning Service Agreement</li>
            <li>Commercial Service Agreement</li>
          </ul>
        </div>
        <div>
          <p className="text-center mt-3">EXPERT INTERACTION</p>
          <div className="bg-zinc-400 border-zinc-50 border-2  p-1 m-3 rounded-lg leading-3 text-xs overflow-y-auto h-40">
            {messages.map((item, index) => {
              return <Chatbox item={item} key={index} />;
            })}
          </div>
        </div>
        <form
          className="shadow-md absolute bottom-0 flex flex-row w-2/5 pb-3 px-2 justify-between items-center gap-3"
          onSubmit={handleSubmit}
        >
          {/* Your form elements go here */}
          <input
            type="text"
            placeholder="Type your query here......."
            className="w-full p-2 border rounded-full focus:outline-none focus:ring focus:border-blue-300 text-black"
            onChange={(e) => {
              setNewMessage(e.target.value);
            }}
            value={newMessage}
          />
          <button
            type="submit"
            className="mt-2  text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:bg-blue-600"
          >
            <IoSend size={"1.5rem"} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default SidebarChat;
