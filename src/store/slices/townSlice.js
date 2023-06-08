import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  aragar: true,
  elyssia: true,
  thorgar: false,
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
  //!! dispatch(townActions.unlockTown({ town: "elyssia" }));
});
export const townActions = townSlice.actions;
export default townSlice.reducer;
