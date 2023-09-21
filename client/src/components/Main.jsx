import React from "react";
import Cards from "./Cards";

const Main = ({ handleSidebarChat }) => {
  const data = [
    {
      title: "GENERATE DOCUMENT",
      description: [
        "Loan Agreement",
        "Partnership Agreement",
        "Confidentiality Agreement",
      ],
      btnTitle: "GENERATE",
      route: "Generate-Token",
    },
    {
      title: "CUSTOMIZE DOCUMENT",
      description: [
        "Recent document",
        "Any Other Documents",
        "Upload document to customize",
      ],
      btnTitle: "MODIFY",
      route: "Customize-Docs",
    },
    {
      title: "CONSULT EXPERT",
      description: [
        "Coperate Consulting",
        "Criminal Defense consulting",
        "Tax Consulting",
      ],
      btnTitle: "CONSULT",
      onclick: handleSidebarChat,
    },
  ];

  return (
    <div className="flex flex-col py-6  justify-between items-center gap-7  bg-transparent">
      <div className="bg-zinc-800 p-4 rounded-lg text-center text-white m-2 md:m-0">
        <h1 className="text-xl  md:text-3xl font-bold  mb-3">
          Welcome to LEGAL DASTAVEZ
        </h1>
        <p className="hidden md:block text-base md:text-lg">
          Welcome to our <span className="font-semibold">AI-Powered Legal Documentation Assistant</span>, simplifying complex legal documents for individuals and small businesses in India.
        </p>
      </div>
      <div className="w-full h-full p-4  flex flex-col md:flex-row  justify-center items-stretch gap-4">
        {data.map((item, index) => {
          return <Cards item={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Main;
