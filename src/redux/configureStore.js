import { configureStore } from "@reduxjs/toolkit";
import machineReducer from "./features/machineSlice";

export default configureStore({
  reducer: {
    machine: machineReducer,
  },
});
