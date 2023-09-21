import React from "react";

const AfterUpload = () => {
  return (
    <div className=" flex m-3 gap-5 flex-col md:flex-row justify-center items-center">
      <div className="w-full h-full">
        <p className="text-black text-center p-2">UPLOADED DOCUMENT</p>
        <div className=" bg-black  rounded-lg p-2 overflow-auto text-justify">
          <p>
          GENERAL AFFIDAVIT
STATE OF_____
COUNTY OF____
PERSONALLY came and appeared before me, the undersigned Notary. the within
named
County. State Of____
who is a resident of____ and makes this his/her statement and
General Affidavit oath and affirmation of and personal knowledge that the
following matters. facts and things set forth are true and correct to the best of higher
(Insert Statement)
          </p>
        </div>
      </div>
      <div className="flex flex-col  p-4">
        <div className="text-center text-black">
          <p>
            Verification, Modification and Renewal Options
          </p>
        </div>
        <div className="w-full h-full bg-black"></div>
        <div className="flex flex-row flex-wrap justify-evenly items-center gap-4">
          <button className="bg-slate-800 p-4 rounded-lg hover:bg-slate-500">
            Verify Document
          </button>
          <button className="bg-slate-800 p-4 rounded-lg hover:bg-slate-500">
            Modify Document
          </button>
          <button className="bg-slate-800 p-4 rounded-lg hover:bg-slate-500">
            Renew Document
          </button>
        </div>
        <div className="text-center bg-black p-4 rounded-full my-7 hover:bg-slate-500">
          <button>Download Your Document</button>
        </div>
      </div>
    </div>
  );
};

export default AfterUpload;
