import { createSlice } from "@reduxjs/toolkit";
import { mainStory } from "../../gameObjects/storyboard";
const initialState = {
  story: mainStory,
  currentChapter: 0,
  currentScene: "prologue",
  currentSceneIndex: 0,
};
const storySlice = createSlice({
  name: "storyManager",
  initialState,
  reducers: {
    setChapter(state, action) {
      state.currentChapter = action.payload;
    },
    setScene(state, action) {
      state.currentScene = action.payload;
    },
    setIndex(state, action) {
      state.currentSceneIndex = action.payload;
    },
  },
});

export const storyActions = storySlice.actions;
export default storySlice.reducer;
