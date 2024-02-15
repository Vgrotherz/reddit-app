import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import spoilersReducer from '../features/spoilers/spoilerSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    spoilers: spoilersReducer,
  },
});
