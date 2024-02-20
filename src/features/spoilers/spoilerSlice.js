// spoilersSlice.js
import { createSlice } from '@reduxjs/toolkit';

const spoilersSlice = createSlice({
  name: 'spoilers',
  initialState: {
    spoiler: false,
  },
  reducers: {
    toggleSpoiler: (state) => {
      state.spoiler = !state.spoiler;
    },
  },
});

export const { toggleSpoiler } = spoilersSlice.actions;
export const selectSpoiler = (state) => state.spoilers.spoiler;
export default spoilersSlice.reducer;