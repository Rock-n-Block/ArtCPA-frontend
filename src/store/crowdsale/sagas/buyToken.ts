import { takeLatest } from 'typed-redux-saga';
import { put, call } from 'redux-saga/effects';
import apiActions from 'store/api/actions';
import { baseApi } from 'store/api';
import { buyToken } from '../actions';
import { crowdSaleActionTypes } from '../actionTypes';

export function* buyTokensSaga({
  type,
  payload: {
    data,
    onSignatureGet,
  },
}: ReturnType<typeof buyToken>) {
  yield put(apiActions.request(type));
  try{
    const signature = yield call(baseApi.getSignature, data);
    onSignatureGet(signature.data);
    yield put(apiActions.success(type));
  }catch(e) {
    console.log(e);
    yield put(apiActions.error(type));
  }
}

function* buyTokenSagaListener() {
  yield takeLatest(crowdSaleActionTypes.BUY_TOKEN, buyTokensSaga);
}

export { buyTokenSagaListener };
