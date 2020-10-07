import React from "react";
import * as Tone from "tone";
import "../tailwind.output.css";
import banks from "./banks";

const Pad = (props) => {
  const bank = "b1";
  const sample = banks[bank][props.id[1]];
  console.log(sample, bank, props.id);
  const player = new Tone.Player(sample).toDestination();
  const play = async () => {
    await Tone.loaded();
    player.start();
  };
  return (
    <div
      onClick={play}
      className="border border-solid border-1 w-16 h-16"
    ></div>
  );
};

export default Pad;
