import { configureStore } from "@reduxjs/toolkit";
import menuRedcur from "./Features/states";
export const store = configureStore({
  reducer: {
    menu: menuRedcur,
  },
});
