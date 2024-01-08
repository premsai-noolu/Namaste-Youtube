import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    isTheme: false,
  },
  reducers: {
    toggleTheme: (state) => {
      state.isTheme = !state.isTheme;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
