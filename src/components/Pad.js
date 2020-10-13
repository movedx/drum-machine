import React, { useEffect } from "react";
import * as Tone from "tone";
import "../tailwind.output.css";
import { useSelector } from "react-redux";
import { selectVolume } from "../redux/features/machineSlice";

const Pad = (props) => {
  const volume = useSelector((state) => selectVolume(state, props.id[1]));
  const player = props.sample;
  player.volume.value = volume;

  useEffect((props) => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const play = async () => {
    await Tone.loaded();
    player.start();
  };

  const handleKeyDown = (event) => {
    if (event.key === props.id[1]) {
      play();
    }
  };

  return (
    <button onClick={play} className="border border-solid border-1 w-16 h-16">
      {props.id[1]}
    </button>
  );
};

export default Pad;
