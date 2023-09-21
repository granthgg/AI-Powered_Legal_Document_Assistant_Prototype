import React from "react";

const FeatureButton = ({ title }) => {
  return (
    <div>
      <p className="bg-white my-2 text-slate-800 text-center rounded-full  p-1.5">
        {title}
      </p>
    </div>
  );
};

export default FeatureButton;
