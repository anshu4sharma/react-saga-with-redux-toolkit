import { takeEvery, call, put, all } from "redux-saga/effects";
import axios from "axios";
import {
  getTodosFailure, getTodosSuccess, addTodoFailure, addTodoSuccess
} from "../features/todos/todosSlice";
import { PayloadAction } from "@reduxjs/toolkit";
import { ITodo } from "../types";

// fetch todos

function todosfetch() {
  return axios.get("https://jsonplaceholder.typicode.com/todos");
}

function* workGetUsersFetch() {
  try {
    const { data } = yield call(todosfetch); // api calling
    yield put(getTodosSuccess(data));
  } catch (error) {
    yield put(getTodosFailure((error as Error).message));
  }
}
function* get_Todos_Saga() {
  yield takeEvery("todos/getTodosRequest", workGetUsersFetch);
}

// add todos

function addTodoApi(data:PayloadAction<ITodo>) {
  return axios.post("https://jsonplaceholder.typicode.com/todos", data);
}

function* workAddTodo(action:PayloadAction<any>) {
  try {
    const { data } = yield call(addTodoApi, action.payload);
    yield put(addTodoSuccess(data));
  } catch (error) {
    yield put(addTodoFailure((error as Error).message));
  }
}

function* watchAddTodo() {
  yield takeEvery("todos/addTodoRequest", workAddTodo);
}
export default function* Todos_Saga() {
  yield all([
    watchAddTodo(),
    get_Todos_Saga(),
  ]);
}