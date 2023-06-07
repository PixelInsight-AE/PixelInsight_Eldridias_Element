import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import heroReducer from "./slices/heroSlice";
import inventoryReducer from "./slices/inventorySlice";
import partyReducer from "./slices/partySlice";
import storyReducer from "./slices/storySlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    heroManager: heroReducer,
    inventoryManager: inventoryReducer,
    partyManager: partyReducer,
    storyManager: storyReducer,
  },
});
export default store;
