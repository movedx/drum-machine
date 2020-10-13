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
    <div className="border border-solid border-1 rounded-full w-8 h-8">
      <Donut
        diameter={32}
        min={0}
        max={100}
        step={1}
        value={value}
        theme={{
          donutColor: "gray",
        }}
        onValueChange={(val) => handleChange(val)}
        ariaLabelledBy={"my-label"}
      ></Donut>
    </div>
  );
};

export default Knob;
