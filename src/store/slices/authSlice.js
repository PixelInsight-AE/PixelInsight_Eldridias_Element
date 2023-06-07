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
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
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
