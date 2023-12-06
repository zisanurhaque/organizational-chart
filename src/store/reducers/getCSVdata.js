import { createSlice } from "@reduxjs/toolkit";

const getCSVdata = createSlice({
  name: "getCSVdata",
  initialState: null,
  reducers: {
    setGetCSVdata: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { setGetCSVdata } = getCSVdata.actions;
export default getCSVdata.reducer;
