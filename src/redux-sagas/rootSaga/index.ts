// saga/rootSaga.js
import { all } from 'redux-saga/effects';
import Todos_Saga from '../todosSaga';

function* rootSaga() {
  yield all([
    Todos_Saga(),
  ]);
}

export default rootSaga;
