import { configureStore } from "@reduxjs/toolkit";
import mobileSlice from "./mobile-slice";

const store = configureStore({
  reducer: { mobile: mobileSlice.reducer },
});

export default store;
