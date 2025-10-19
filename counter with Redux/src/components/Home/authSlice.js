import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  isAuth: false,
  userId: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialValue,
  reducers: {},
});

export default authSlice.reducer;
