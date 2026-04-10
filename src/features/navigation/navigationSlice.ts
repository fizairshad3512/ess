import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { PageId } from '../../types';

interface NavigationState {
  activePage: PageId;
  pageTitle: string;
}

const initialState: NavigationState = {
  activePage: 'home',
  pageTitle: 'Home',
};

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<{ page: PageId; title: string }>) => {
      state.activePage = action.payload.page;
      state.pageTitle = action.payload.title;
    },
  },
});

export const { setPage } = navigationSlice.actions;
export default navigationSlice.reducer;
