import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { INITIAL_TASKS } from '../../data/constants';
import type { Task } from '../../types';

interface TasksState {
  tasks: Task[];
}

const initialState: TasksState = {
  tasks: INITIAL_TASKS,
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    toggleTask: (state, action: PayloadAction<string>) => {
      const task = state.tasks.find((t) => t.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
  },
});

export const { toggleTask } = tasksSlice.actions;
export default tasksSlice.reducer;
