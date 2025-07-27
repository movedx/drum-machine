import React, { useState } from "react";
import { Donut } from "react-dial-knob";
import "../tailwind.output.css";
import { useDispatch } from "react-redux";
import { setVolume } from "../redux/features/machineSlice";

const Knob = (props) => {
  const [value, setValue] = useState(75);
  const dispatch = useDispatch();
  const handleChange = (val) => {
    setValue(val);
    dispatch(setVolume({ id: props.id[1], volume: val }));
  };

  return (
    <div className="w-16 h-16 flex items-center justify-center">
      <Donut
        diameter={64}
        min={0}
        max={100}
        step={1}
        value={value}
        theme={{
          donutColor: "rgba(16, 185, 129, 0.5)",
          centerColor: "#374151",
          strokeWidth: 10,
          donutWidth: 0.2,
          bgrColor: "#4B5563",
          maxedBgrColor: "#EF4444",
          centerFocusedColor: "#6EE7B7",
          textColor: "#FFFFFF",
        }}
        onValueChange={(val) => handleChange(val)}
        ariaLabelledBy={"my-label"}
      ></Donut>
    </div>
  );
};

export default Knob;
