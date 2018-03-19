import { takeLatest, takeEvery } from 'redux-saga';
import { call, put, all } from 'redux-saga/effects';
import { ADD_TODO3 } from './action';

function* test(action) {
  try {
    console.log('test saga', action);
    yield 1;
  } catch (error) {
    console.log(error);
  }
}

export default function* () {
  yield all([
    takeLatest(ADD_TODO3, test)
  ]);
}
