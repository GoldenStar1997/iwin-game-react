// adminSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  curPage: "dashboard",
};

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.curPage = action.payload
    }
  },
});

export const { setPage } = adminSlice.actions;
export default adminSlice.reducer;