// gameSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  games: [
    {
      name: 'TiKiMATcH',
      img: '5544.png',
      title: '',
      url: 'https://eigix.net/vmh/ugames/TikiMatch3/index.html'
    },
    {
      name: 'DEAD CITY',
      img: '13446.png',
      title: '',
      url: 'https://eigix.net/vmh/ugames/deadcity/index.html'
    },
    {
      name: 'The Dead Escape',
      img: '89939.png',
      title: '',
      url: 'https://slotcatalog.com/en/play/The-Dead-Escape'
    },
    {
      name: 'Pummel A Politician',
      img: '4423543.png',
      title: '',
      url: 'https://eigix.net/vmh/ugames/pummel/index.html'
    },
    {
      name: 'black jack',
      img: '679645.png',
      title: '',
      url: 'https://slotcatalog.com/en/play/Blackjack-3-Hand'
    }
  ]
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