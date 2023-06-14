import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  targetMonster: "goblin",
  targetHero: "bulwark",
  heroHealth: null,
  monsterHealth: null,
  heroDamage: null,
  monsterDamage: null,
};

const battleSlice = createSlice({
  name: "battleManager",
  initialState,
  reducers: {
    setTargetMonster: (state, action) => {
      state.targetMonster = action.payload;
      state.monsterHealth = action.payload.health;
    },
    setTargetHero: (state, action) => {
      console.log("setTargetHero", action.payload);
      state.targetHero = action.payload;
      state.heroHealth = action.payload.health;
    },
    setNewHealth: (state, action) => {
      if (
        action.payload.role === "Tank" ||
        action.payload.role === "Healer" ||
        action.payload.role === "Ranged" ||
        action.payload.role === "Melee"
      ) {
        state.targetHero.health = action.payload.health;
      } else {
        state.targetMonster.health = action.payload.health;
      }
    },
    setHeroHealth: (state, action) => {
      state.heroHealth = action.payload;
    },
    setMonsterHealth: (state, action) => {
      state.monsterHealth = action.payload;
    },
  },
});
export const battleActions = battleSlice.actions;
export default battleSlice.reducer;
