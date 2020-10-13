import { createSlice } from "@reduxjs/toolkit";

export const machineSlice = createSlice({
  name: "machine",
  initialState: {
    volumeZ: 75,
    volumeX: 75,
    volumeC: 75,
    volumeA: 75,
    volumeS: 75,
    volumeD: 75,
    volumeQ: 75,
    volumeW: 75,
    volumeE: 75,
    bank: "b1",
    power: 1,
    volume: 75,
    displayText: "",
  },
  reducers: {
    setVolume: (state, action) => {
      const { id, volume } = action.payload;
      if (id) {
        state["volume" + id.charAt(id.length - 1).toUpperCase()] = volume;
        state.displayText = id.toString() + ": " + volume;
      } else {
        state.volume = volume;
        state.displayText = "Master: " + volume;
      }
    },
    setDisplayText: (state, action) => {
      state.displayText = action.payload;
    },
  },
});

export const { setVolume, setDisplayText } = machineSlice.actions;

export const selectVolume = (state, id) =>
  (1 - state.machine["volume" + id.toUpperCase()] / 100) * 80 * -1;

export const selectDisplayText = (state) => state.machine.displayText;

export default machineSlice.reducer;
