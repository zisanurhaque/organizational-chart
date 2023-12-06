import { createSlice } from "@reduxjs/toolkit";

const hideDesignation = createSlice({
  name: "hideDesignation",
  initialState: false,
  reducers: {
    setHideDesignation: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { setHideDesignation } = hideDesignation.actions;
export default hideDesignation.reducer;
