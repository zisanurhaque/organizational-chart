import { createSlice } from "@reduxjs/toolkit";

const hideAvatar = createSlice({
  name: "hideAvatar",
  initialState: false,
  reducers: {
    setHideAvatar: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { setHideAvatar } = hideAvatar.actions;
export default hideAvatar.reducer;
