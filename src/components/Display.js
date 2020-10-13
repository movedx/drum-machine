import React from "react";
import "../tailwind.output.css";
import { useSelector } from "react-redux";
import { selectDisplayText } from "../redux/features/machineSlice";

const Display = () => {
  const text = useSelector(selectDisplayText);
  return (
    <div className="border border-solid w-7/8 h-8 mb-8 align-middle text-center">
      {text}
    </div>
  );
};

export default Display;
