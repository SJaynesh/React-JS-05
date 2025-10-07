import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";

export const store = configureStore({
    reducer: counterSlice.reducer
});

export type RootState = ReturnType<typeof store.getState>