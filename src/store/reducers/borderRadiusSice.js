import { createSlice } from "@reduxjs/toolkit";

const borderRadiusSlice = createSlice({
  name: "setBorderRadius",
  initialState: 0,
  reducers: {
    setBorderRadius: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { setBorderRadius } = borderRadiusSlice.actions;
export default borderRadiusSlice.reducer;
