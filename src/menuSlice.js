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
  },
});

export const { switchMenuState } = menuSlice.actions;

export const selectMenuState = (state) => state.menu;
export const selectIsMenuOpen = (state) => selectMenuState(state).menuState;

export default menuSlice.reducer;
