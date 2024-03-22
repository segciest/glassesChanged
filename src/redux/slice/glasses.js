import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  glass: 0,
  title: "",
  info: "",
};

const glassess = createSlice({
  name: "glass",
  initialState,
  reducers: {
    glassChanged: (state, action) => {
      console.log(action);
      state.glass = action.payload;
    },
    titleChanged: (state, action) => {
      state.title = action.payload;
    },
    infoChanged: (state, action) => {
      state.info = action.payload;
    },
  },
});

// export const { glassChanged: updateGlassChanged } = glassess.actions;
export const { glassChanged, titleChanged, infoChanged } = glassess.actions;
export default glassess.reducer;
