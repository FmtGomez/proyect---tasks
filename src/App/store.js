import { configureStore } from "@reduxjs/toolkit";
import   tasksReducer from "../Features/Task/taskSlice";

export const store = configureStore({
   reducer:{
    tasks: tasksReducer
   }
})