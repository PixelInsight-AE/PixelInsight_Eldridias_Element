import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mana: 0,
  isTurn: false,
  gameStatus: "playing",
  currentTown: "aragar",
  playerHand: [],
};
const playerSlice = createSlice({
  name: "playerManager",
  initialState,
  reducers: {
    setPLayerName(state, action) {
      state.name = action.payload;
    },
    addMana(state, action) {
      state.mana += action.payload;
    },
    removeMana(state, action) {
      state.mana -= action.payload;
    },
    drawCard(state, action) {
      state.playerHand.push(action.payload);
    },
  },
});

export const playerActions = playerSlice.actions;
export default playerSlice.reducer;
