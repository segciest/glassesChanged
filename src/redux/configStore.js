import { configureStore } from "@reduxjs/toolkit";
import glasses from "./slice/glasses";
export const store = configureStore({
  reducer: {
    glasses,
  },
});
