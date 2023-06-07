import { createSlice } from "@reduxjs/toolkit";
import { allElementalCards } from "../../gameObjects/elementCards";
const initialState = {
  orbs: 0,
  inventory: [],
  deck: [...allElementalCards],
};

const inventorySlice = createSlice({
  name: "inventoryManager",
  initialState,
  reducers: {
    addOrbs(state, action) {
      state.orbs += action.payload;
    },
    removeOrbs(state, action) {
      state.orbs -= action.payload;
    },
    addItem(state, action) {
      state.inventory.push(action.payload);
    },
    removeItem(state, action) {
      state.inventory = state.inventory.filter(
        (item) => item.id !== action.payload
      );
    },
    addCard(state, action) {
      state.deck.push(action.payload);
    },
    removeCard(state, action) {
      state.deck = state.deck.filter((card) => card.id !== action.payload);
    },
  },
});
export const inventoryActions = inventorySlice.actions;
export default inventorySlice.reducer;
