import { createSlice } from '@reduxjs/toolkit';

const pageSlice = createSlice({
  name: 'page',
  initialState: {
    number: 1
  },
  reducers: {
    nextPage: state => {
      state.number += 1;
    },
    resetPage: state => {
      state.number = 1;
    }
  }
});

export const { nextPage, resetPage } = pageSlice.actions;
export const selectPageNumber = state => state.page.number;
export default pageSlice.reducer;
