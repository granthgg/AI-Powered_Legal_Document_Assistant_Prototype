import React from "react";
import { BsUpload } from "react-icons/bs";

const UploadDocs = () => {
  return (
    <div className="m-4 text-white text-center bg-white  border-4 border-black ">
      {/* <form method="post" action="http://localhost:4000/upload"> */}
      <form
        className="px-3 py-1 flex flex-row justify-between items-center w-parent h-parent"
        action="/After-Upload"
        method="get"
      >
        <label
          htmlFor="file"
          className="bg-black p-4 rounded-lg hover:bg-slate-700"
        >
          Upload file
        </label>
        <input
          type="file"
          id="file"
          accept=".pdf"
          name="File"
          className="hidden"
        />
        <button
          type="submit"
          className="p-2 bg-slate-800 rounded-lg hover:bg-slate-400"
        >
          <BsUpload size={"2rem"} />
        </button>
      </form>
    </div>
  );
};

export default UploadDocs;
