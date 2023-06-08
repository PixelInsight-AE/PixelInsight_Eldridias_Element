import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import heroReducer from "./slices/heroSlice";
import inventoryReducer from "./slices/inventorySlice";
import partyReducer from "./slices/partySlice";
import storyReducer from "./slices/storySlice";
import playerReducer from "./slices/playerSlice";
import townReducer from "./slices/townSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    heroManager: heroReducer,
    inventoryManager: inventoryReducer,
    partyManager: partyReducer,
    storyManager: storyReducer,
    playerManager: playerReducer,
    townManager: townReducer,
  },
});
export default store;
