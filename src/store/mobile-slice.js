import { createSlice } from "@reduxjs/toolkit";

const mobileSlice = createSlice({
  name: "mobile",
  initialState: { isMobile: false },
  reducers: {
    setIsMobile(state, action) {
      state.isMobile = action.payload;
    },
  },
});

export const mobileActions = mobileSlice.actions;

export default mobileSlice;
