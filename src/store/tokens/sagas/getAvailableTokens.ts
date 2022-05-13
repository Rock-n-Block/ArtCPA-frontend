import { takeLatest } from 'typed-redux-saga';
import { put, call } from 'redux-saga/effects';
import apiActions from 'store/api/actions';
import { baseApi } from 'store/api';
import { getAvailableTokens } from '../actions';
import { tokensActionTypes } from '../actionTypes';
import { setTokens } from '../reducer';

export function* getAvailableTokensSaga({
  type,
}: ReturnType<typeof getAvailableTokens>) {
  yield put(apiActions.request(type));
  try{
    const tokensInfo = yield call(baseApi.getAvailableTokens);
    yield put(setTokens(tokensInfo.data));
    yield put(apiActions.success(type));
  }catch(e) {
    console.log(e);
    yield put(apiActions.error(type));
  }
}

function* getTokensSagaListener() {
  yield takeLatest(tokensActionTypes.GET_AVAILABLE_TOKENS, getAvailableTokensSaga);
}

export { getTokensSagaListener };
