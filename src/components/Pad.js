import React, { useEffect } from "react";
import * as Tone from "tone";
import "../tailwind.output.css";
import { useSelector, useDispatch } from "react-redux";
import { selectVolume, setDisplayText } from "../redux/features/machineSlice";

const Pad = (props) => {
  const dispatch = useDispatch();
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
    dispatch(setDisplayText(props.id[1]));
    console.log(player);
    player.start();
  };

  const handleKeyDown = (event) => {
    if (event.key === props.id[1]) {
      play();
    }
  };

  return (
    <button
      onClick={play}
      className="bg-gray-700 hover:bg-gray-600 active:bg-gray-500 text-white font-bold py-4 px-4 rounded-lg shadow-md transition duration-150 ease-in-out w-24 h-24 flex items-center justify-center text-2xl"
    >
      {props.id[1].toUpperCase()}
    </button>
  );
};

export default Pad;
