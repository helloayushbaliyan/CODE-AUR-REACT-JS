
import { configureStore } from "@reduxjs/toolkit";
import reducer from "../features/todo/todoslice";
export const store = configureStore({
    reducer: reducer
});