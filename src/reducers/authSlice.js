// authSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  users: [
    {
      name: 'user1',
      password: 'user1'
    }
  ]
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;