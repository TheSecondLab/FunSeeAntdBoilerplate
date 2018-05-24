import { takeLatest } from 'redux-saga';
import { call, put, all, fork } from 'redux-saga/effects';
import { smartSaga } from 'funsee-smart';
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
    fork(smartSaga),
    takeLatest(commonAction.LOAD_ENV.REQUEST, loadEnv)
  ]);
}
