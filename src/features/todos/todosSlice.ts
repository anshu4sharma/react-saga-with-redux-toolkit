// counterSlice.js

import { createSlice } from "@reduxjs/toolkit";
import { todos } from "../../types";

const initialState: {
  todos: todos[];
  loading: boolean;
  error: Error | null;
} = {
  todos: [],
  loading: false,
  error: null,
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    getTodosRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    getTodosSuccess: (state, action) => {
      state.todos = action.payload;
      state.loading = false;
    },
    getTodosFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addTodoRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    addTodoSuccess: (state, action) => {
      state.todos.push(action.payload);
      state.loading = false;
    },
    addTodoFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getTodosRequest,
  getTodosFailure,
  getTodosSuccess,
  addTodoRequest,
  addTodoFailure,
  addTodoSuccess,
} = todosSlice.actions;
export default todosSlice.reducer;
