import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bulwark: {
    currentLevel: 1,
    unlocked: true,
    currentExp: 0,
  },
  hogarth: {
    currentLevel: 1,
    unlocked: true,

    currentExp: 0,
  },
  beastMaster: {
    currentLevel: 1,
    unlocked: true,

    currentExp: 0,
  },
  sorcceress: {
    currentLevel: 1,
    unlocked: true,

    currentExp: 0,
  },
  druid: {
    currentLevel: 1,
    unlocked: false,
    currentExp: 0,
  },
  paladin: {
    currentLevel: 1,
    unlocked: false,
    currentExp: 0,
  },
  shadow: {
    currentLevel: 1,
    unlocked: false,
    currentExp: 0,
  },
  seer: {
    currentLevel: 1,
    unlocked: false,
    currentExp: 0,
  },
  storm: {
    currentLevel: 1,
    unlocked: false,
    currentExp: 0,
  },
  sentinel: {
    currentLevel: 1,

    unlocked: false,
    currentExp: 0,
  },
  nightshade: {
    currentLevel: 1,
    unlocked: false,
    currentExp: 0,
  },
  gunslinger: {
    currentLevel: 1,
    unlocked: false,
    currentExp: 0,
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
    //!! dispatch(heroActions.levelUpHero({ heroName: "druid" })

    unlockHero(state, action) {
      const { heroName } = action.payload;
      state[heroName] = {
        ...state[heroName],
        unlocked: true,
      };
    },
    //!! dispatch(heroActions.unlockHero({ heroName: "druid" })
  },
});

export const heroActions = heroSlice.actions;
export default heroSlice.reducer;
