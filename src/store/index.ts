import { configureStore } from '@reduxjs/toolkit';
import counterReducer from "../features/todos/todosSlice";
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../redux-sagas/rootSaga';
// Create the saga middleware
const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]
// Mount it on the Store
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(middleware),
})

// Then run the saga
sagaMiddleware.run(rootSaga)
