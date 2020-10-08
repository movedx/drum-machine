import React, { useEffect } from "react";
import * as Tone from "tone";
import "../tailwind.output.css";
import banks from "./banks";

const Pad = (props) => {
  let bank = "b1";
  const sample = banks[bank][props.id[1]];
  const player = new Tone.Player(sample).toDestination();

  const play = async () => {
    await Tone.loaded();
    player.start();
  };
  const handleKeyDown = async (event) => {
    if (event.key === props.id[1]) {
      play();
    }
  };
  useEffect((props) => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <button onClick={play} className="border border-solid border-1 w-16 h-16">
      {props.id[1]}
    </button>
  );
};

export default Pad;
