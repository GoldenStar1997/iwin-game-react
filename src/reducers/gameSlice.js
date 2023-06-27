// gameSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  games: []
};

const gameSlice = createSlice({
  name: 'game',
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

export const { login, logout } = gameSlice.actions;
export default gameSlice.reducer;