import React from "react";
import "../tailwind.output.css";
import Knob from "./Knob";
import Display from "./Display";
import Fader from "./Fader";
import Pad from "./Pad";
import ButtonRound from "./ButtonRound";
import { v4 as uuid } from "uuid";

const DrumMachine = () => {
  return (
    <div
      id="container"
      className="flex w-screen h-screen justify-center items-center"
    >
      <div
        id="drum-machine"
        className="bg-gray-100 flex flex-col w-full max-w-xl"
      >
        <div id="top" className="flex justify-between px-12 my-8">
          <div id="banks" className="flex justify-evenly w-1/2">
            {Array(4)
              .fill(4)
              .map((el) => {
                return <ButtonRound key={uuid()} />;
              })}
          </div>
          <ButtonRound id="power" />
        </div>
        <div id="main" className="flex justify-around">
          <div id="pads" className="grid grid-cols-3 gap-8 mb-8">
            {Array(9)
              .fill(9)
              .map((el) => {
                return <Pad key={uuid()} />;
              })}
          </div>
          <div id="controls" className="">
            <Display />
            <div id="knobs" className="grid grid-cols-3 gap-4 mb-6">
              {Array(9)
                .fill(9)
                .map((el) => {
                  return <Knob key={uuid()} />;
                })}
            </div>
            <Fader />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrumMachine;
