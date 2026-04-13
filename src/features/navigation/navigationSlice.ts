import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { PageId } from '../../types';

interface NavigationState {
  activePage: PageId;
  pageTitle: string;
  sidebarOpen: boolean;
}

const initialState: NavigationState = {
  activePage: 'home',
  pageTitle: 'Home',
  sidebarOpen: false,
};

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<{ page: PageId; title: string }>) => {
      state.activePage = action.payload.page;
      state.pageTitle = action.payload.title;
      state.sidebarOpen = false; // auto-close sidebar on mobile when navigating
    },
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },
    closeSidebar: (state) => {
      state.sidebarOpen = false;
    },
  },
});

export const { setPage, toggleSidebar, closeSidebar } = navigationSlice.actions;
export default navigationSlice.reducer;
