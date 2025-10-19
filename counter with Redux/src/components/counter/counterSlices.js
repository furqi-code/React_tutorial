import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: initialValue,
  reducers: {
    increment(state) {
      ++state.value;
    },
    decrement(state) {
      --state.value;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
