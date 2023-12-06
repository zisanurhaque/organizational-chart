import { createSlice } from "@reduxjs/toolkit";

const cardSizeSlice = createSlice({
  name: "setCardSize",
  initialState: 160,
  reducers: {
    setCardSize: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { setCardSize } = cardSizeSlice.actions;
export default cardSizeSlice.reducer;
