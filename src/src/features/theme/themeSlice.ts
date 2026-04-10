import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { ThemeColor } from '../../types';

interface ThemeState {
  mainColor: string;
  softColor: string;
  bgColor: string;
}

const initialState: ThemeState = {
  mainColor: '#7C3AED',
  softColor: '#EDE9FE',
  bgColor: '#F8F7FF',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeColor>) => {
      state.mainColor = action.payload.main;
      state.softColor = action.payload.soft;
      state.bgColor = action.payload.bg;
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
