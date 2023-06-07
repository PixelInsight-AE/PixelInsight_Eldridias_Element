import { createSlice } from "@reduxjs/toolkit";
import { heroManagerInitialState } from "../initialStates/heroManager";

const initialState = {
  bulwark: {
    currentLevel: 1,
    unlocked: true,
  },
  hogarth: {
    currentLevel: 1,
    unlocked: true,
  },
  beastMaster: {
    currentLevel: 1,
    unlocked: true,
  },
  sorcceress: {
    currentLevel: 1,
    unlocked: true,
  },
  druid: {
    currentLevel: 1,
    unlocked: false,
  },
};

const heroSlice = createSlice({
  name: "heroManager",
  initialState,
  reducers: {
    levelUpHero(state, action) {
      const { heroName } = action.payload;
      state[heroName] = {
        ...state[heroName],
        currentLevel: state[heroName].currentLevel + 1,
      };
    },

    unlockHero(state, action) {
      const { heroName } = action.payload;
      state[heroName] = {
        ...state[heroName],
        unlocked: true,
      };
    },
  },
});

export const heroActions = heroSlice.actions;
export default heroSlice.reducer;
