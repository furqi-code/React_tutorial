import { configureStore } from "@reduxjs/toolkit";
import counterSliceReducer from "../components/counter/counterSlices";
import authsliceReducer from "../components/Home/authSlice";

export const store = configureStore({
  reducer: { counters: counterSliceReducer, auth: authsliceReducer },
});

console.log(store.getState());
