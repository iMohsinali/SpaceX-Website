import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const menuSlice = createSlice({
  name: "Menu",
  initialState,
  reducers: {
    openMenu: (state, actions) => {
      state.isOpen = !state.isOpen;
      console.log("open Modal");
    },
    closeMenu: (state, actions) => {
      state.isOpen = false;
    },
  },
});

export const { openMenu, closeMenu } = menuSlice.actions;

export default menuSlice.reducer;
