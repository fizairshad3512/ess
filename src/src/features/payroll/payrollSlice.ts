import { createSlice } from '@reduxjs/toolkit';

interface PayrollState {
  isVisible: boolean;
}

const initialState: PayrollState = {
  isVisible: false,
};

const payrollSlice = createSlice({
  name: 'payroll',
  initialState,
  reducers: {
    toggleVisibility: (state) => {
      state.isVisible = !state.isVisible;
    },
  },
});

export const { toggleVisibility } = payrollSlice.actions;
export default payrollSlice.reducer;
