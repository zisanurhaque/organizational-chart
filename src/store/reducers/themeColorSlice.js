import { createSlice } from "@reduxjs/toolkit";

const themeColorSlice = createSlice({
  name: "themeColorSlice",
  initialState: "#4f46e5",
  reducers: {
    setThemeColor: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { setThemeColor } = themeColorSlice.actions;
export default themeColorSlice.reducer;
