import React from "react";
import "../tailwind.output.css";
import { useSelector } from "react-redux";
import { selectDisplayText } from "../redux/features/machineSlice";

const Display = () => {
  const text = useSelector(selectDisplayText);
  return (
    <div className="bg-gray-900 text-green-400 text-center py-2 mb-8 rounded-md font-mono text-xl">
      {text}
    </div>
  );
};

export default Display;
