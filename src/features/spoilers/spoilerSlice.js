import { createSlice } from '@reduxjs/toolkit';

const spoilersSlice = createSlice({
  name: 'spoilers',
  initialState: {
    spoiler: false,
  },
  reducers: {
    setSpoiler: (state, action) => {
      state.spoiler = action.payload;
    },
  },
});

export const { setSpoiler } = spoilersSlice.actions;
export const selectSpoiler = (state) => state.spoilers.spoiler;
export default spoilersSlice.reducer;