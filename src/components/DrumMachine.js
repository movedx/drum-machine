import React from "react";
import "../tailwind.output.css";
import Knob from "./Knob";
import Display from "./Display";
import Fader from "./Fader";
import Pad from "./Pad";
import ButtonRound from "./ButtonRound";
import { v4 as uuid } from "uuid";
import * as Tone from "tone";
import banks from "../banks";

const DrumMachine = () => {
  const sampleZ = new Tone.Player(banks.b1.z).toDestination();
  const sampleX = new Tone.Player(banks.b1.x).toDestination();
  const sampleC = new Tone.Player(banks.b1.c).toDestination();
  const sampleA = new Tone.Player(banks.b1.a).toDestination();
  const sampleS = new Tone.Player(banks.b1.s).toDestination();
  const sampleD = new Tone.Player(banks.b1.d).toDestination();
  const sampleQ = new Tone.Player(banks.b1.q).toDestination();
  const sampleW = new Tone.Player(banks.b1.w).toDestination();
  const sampleE = new Tone.Player(banks.b1.e).toDestination();
  return (
    <div
      id="container"
      className="flex w-screen h-screen justify-center items-center"
    >
      <div
        id="drum-machine"
        className="bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col w-full max-w-xl"
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
            <Pad id="pq" sample={sampleQ} key={uuid()} />
            <Pad id="pw" sample={sampleW} key={uuid()} />
            <Pad id="pe" sample={sampleE} key={uuid()} />
            <Pad id="pa" sample={sampleA} key={uuid()} />
            <Pad id="ps" sample={sampleS} key={uuid()} />
            <Pad id="pd" sample={sampleD} key={uuid()} />
            <Pad id="pz" sample={sampleZ} key={uuid()} />
            <Pad id="px" sample={sampleX} key={uuid()} />
            <Pad id="pc" sample={sampleC} key={uuid()} />
          </div>
          <div id="controls" className="ml-8">
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
