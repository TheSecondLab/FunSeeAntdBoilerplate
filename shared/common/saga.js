import { takeLatest, takeEvery } from 'redux-saga';
import { call, put, all } from 'redux-saga/effects';
import * as commonAction from './action';
// 当前环境
function* loadEnv() {
  try {
    // const env = yield call(commonService.loadEnv);
    yield put(commonAction.loadEnvSuccess('dev'));
  } catch (err) {
    // yield call(showError, err);
    console.log(err);
  }
}

export default function* () {
  yield all([
    takeLatest(commonAction.LOAD_ENV.REQUEST, loadEnv)
  ]);
}
