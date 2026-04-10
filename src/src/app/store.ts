import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../features/theme/themeSlice';
import navigationReducer from '../features/navigation/navigationSlice';
import feedReducer from '../features/feed/feedSlice';
import tasksReducer from '../features/tasks/tasksSlice';
import payrollReducer from '../features/payroll/payrollSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    navigation: navigationReducer,
    feed: feedReducer,
    tasks: tasksReducer,
    payroll: payrollReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
