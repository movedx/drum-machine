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
            <Pad id="pq" key={uuid()} />
            <Pad id="pw" key={uuid()} />
            <Pad id="pe" key={uuid()} />
            <Pad id="pa" key={uuid()} />
            <Pad id="ps" key={uuid()} />
            <Pad id="pd" key={uuid()} />
            <Pad id="pz" key={uuid()} />
            <Pad id="px" key={uuid()} />
            <Pad id="pc" key={uuid()} />
          </div>
          <div id="controls" className="">
            <Display />
            <div id="knobs" className="grid grid-cols-3 gap-4 mb-6">
              <Knob id="kq" key={uuid()} />
              <Knob id="kw" key={uuid()} />
              <Knob id="ke" key={uuid()} />
              <Knob id="ka" key={uuid()} />
              <Knob id="ks" key={uuid()} />
              <Knob id="kd" key={uuid()} />
              <Knob id="kz" key={uuid()} />
              <Knob id="kx" key={uuid()} />
              <Knob id="kc" key={uuid()} />
            </div>
            <Fader />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrumMachine;
