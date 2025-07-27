import React from "react";
import "../tailwind.output.css";

const ButtonRound = () => {
  return (
    <div className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 rounded-full w-8 h-8 flex items-center justify-center shadow-md transition duration-150 ease-in-out"></div>
  );
};

export default ButtonRound;
