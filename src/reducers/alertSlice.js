// alertSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  info: {
    class: "bg-info",
    time: "Just Now",
    context: ""
  }
};

const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    setInfo: (state, action) => {
      state.info = action.payload
    }
  },
});

export const { setInfo } = alertSlice.actions;
export default alertSlice.reducer;