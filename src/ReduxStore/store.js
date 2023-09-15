import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./navSlice";

const appStore = configureStore({
  reducer: {
    app: navSlice,
  },

})

export default appStore;