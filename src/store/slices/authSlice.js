import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "test",
  token: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.isAuthenticated = false;
      state.username = null;
    },
    setUser(state, action) {
      state.isAuthenticated = true;
      state.username = action.payload;
    },
    setToken(state, action) {
      state.token = action.payload;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
