import { takeLatest, takeEvery } from 'redux-saga';
import { call, put, all } from 'redux-saga/effects';
import { ADD_TODO, COMPONENT_ZX_ACTION, zxActionSuccess } from './action';
import * as services from './service';

function* test(action) {
  try {
    console.log('test saga', action);
    yield 1;
  } catch (error) {
    console.log(error);
  }
}

function* testForZx() {
  try {
    const data = yield call(services.getValue);
    yield put(zxActionSuccess(data.value));
  } catch (error) {
    console.log(error);
  }
}

export default function* () {
  yield all([
    takeLatest(ADD_TODO, test),
    takeLatest(COMPONENT_ZX_ACTION, testForZx)
  ]);
}
