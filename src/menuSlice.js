import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    menuState: false,
  },
  reducers: {
    switchMenuState: (state) => {
      state.menuState = !state.menuState;
    },
    closeMenu: (state) => {
      state.menuState = false;
    },
  },
});

export const { switchMenuState, closeMenu } = menuSlice.actions;

export const selectMenuState = (state) => state.menu;
export const selectIsMenuOpen = (state) => selectMenuState(state).menuState;

export default menuSlice.reducer;
