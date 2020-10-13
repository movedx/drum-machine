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
      } else {
        state.volume = volume;
      }
    },
  },
});

export const { setVolume } = machineSlice.actions;

export const selectVolume = (state, id) =>
  (1 - state.machine["volume" + id.toUpperCase()] / 100) * 80 * -1;

export default machineSlice.reducer;
