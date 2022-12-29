import {configureStore} from '@reduxjs/toolkit';
import {characterSlice} from './characters/slice';

export const store = configureStore({
  reducer: {
    character: characterSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
