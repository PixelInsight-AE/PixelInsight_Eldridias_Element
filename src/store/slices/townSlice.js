import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Aragar: true,
  Elyssia: false,
  Thorgar: false,
};

const townSlice = createSlice({
  name: "townManager",
  initialState,
  reducers: {
    unlockTown(state, action) {
      const { town } = action.payload;
      state[town] = true;
    },
  },
});
export const townActions = townSlice.actions;
export default townSlice.reducer;
