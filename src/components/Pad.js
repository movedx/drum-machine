import React, { useEffect } from "react";
import * as Tone from "tone";
import "../tailwind.output.css";
import banks from "./banks";
import { useSelector } from "react-redux";
import { selectBank, selectVolume } from "../redux/features/machineSlice";

const Pad = (props) => {
  const volume = useSelector(selectVolume)(props.id[1]);
  const bank = useSelector(selectBank);
  const sample = banks[bank][props.id[1]];
  const player = new Tone.Player(sample).toDestination();

  useEffect((props) => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const play = async () => {
    await Tone.loaded();
    player.volume.value = volume;
    console.log(player.volume.value);
    player.start();
  };
  const handleKeyDown = async (event) => {
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
