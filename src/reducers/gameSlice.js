// gameSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  gameList: []
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  
  reducers: {
    setGameList: (state, actions) => {
      state.gameList = actions.payload
    }
  },
});

export const { login, logout, setGameList } = gameSlice.actions;
export default gameSlice.reducer;