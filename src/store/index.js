import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import heroReducer from "./slices/heroSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    heroManager: heroReducer,
  },
});
export default store;
