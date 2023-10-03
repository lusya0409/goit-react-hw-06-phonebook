import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter(state, action) {
      return action.payload;
    },
  },
});
export const { setFilter } = slice.actions;
export const filterReducer = slice.reducer;
