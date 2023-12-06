import { createSlice } from "@reduxjs/toolkit";

const zoomRangeSlice = createSlice({
  name: "setZoomRange",
  initialState: 0.6,
  reducers: {
    setZoomRange: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { setZoomRange } = zoomRangeSlice.actions;
export default zoomRangeSlice.reducer;
