import React, { useState } from "react";
import { Slider, Rail, Handles, Tracks } from "react-compound-slider";
import { SliderRail, Handle, Track } from "./FaderComponents";
import { setDisplayText, setVolume } from "../redux/features/machineSlice";
import { useDispatch } from "react-redux";
import "../tailwind.output.css";

const sliderStyle = {
  position: "relative",
  width: "100%",
  touchAction: "none",
};

const domain = [0, 100];
const defaultValues = [100];

const Fader = (props) => {
  const [values, setValues] = useState(defaultValues.slice());
  const [update, setUpdate] = useState(defaultValues.slice());

  const dispatch = useDispatch();

  const onUpdate = (update) => {
    setUpdate(update);
  };

  const onChange = (values) => {
    setValues(values);
    dispatch(setVolume({ volume: values[0] }));
    dispatch(setDisplayText("Master: " + values[0]));
  };

  return (
    <div className="w-7/8 h-2 my-10">
      <div style={{ height: 120, width: "100%" }}>
        <Slider
          mode={1}
          step={1}
          domain={domain}
          rootStyle={sliderStyle}
          onUpdate={onUpdate}
          onChange={onChange}
          values={values}
        >
          <Rail>
            {({ getRailProps }) => <SliderRail getRailProps={getRailProps} />}
          </Rail>
          <Handles>
            {({ handles, getHandleProps }) => (
              <div className="slider-handles">
                {handles.map((handle) => (
                  <Handle
                    key={handle.id}
                    handle={handle}
                    domain={domain}
                    getHandleProps={getHandleProps}
                  />
                ))}
              </div>
            )}
          </Handles>
          <Tracks right={false}>
            {({ tracks, getTrackProps }) => (
              <div className="slider-tracks">
                {tracks.map(({ id, source, target }) => (
                  <Track
                    key={id}
                    source={source}
                    target={target}
                    getTrackProps={getTrackProps}
                  />
                ))}
              </div>
            )}
          </Tracks>
        </Slider>
      </div>
    </div>
  );
};

export default Fader;
