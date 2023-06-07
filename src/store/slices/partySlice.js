import { createSlice } from "@reduxjs/toolkit";
import {
  bulwark,
  hogarth,
  sorceress,
  beastMaster,
} from "../../gameObjects/heros";
const initialState = {
  tank: bulwark,
  healer: hogarth,
  ranged: sorceress,
  melee: beastMaster,
};

const partySlice = createSlice({
  name: "partyManager",
  initialState,
  reducers: {
    setTank(state, action) {
      state.tank = action.payload;
    },
    setHealer(state, action) {
      state.healer = action.payload;
    },
    setRanged(state, action) {
      state.ranged = action.payload;
    },
    setMelee(state, action) {
      state.melee = action.payload;
    },
  },
});

export const partyActions = partySlice.actions;
export default partySlice.reducer;
