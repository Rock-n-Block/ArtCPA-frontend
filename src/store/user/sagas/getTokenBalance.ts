/* eslint-disable @typescript-eslint/no-unused-vars */
import { call, put, select, takeLatest } from 'typed-redux-saga';
import apiActions from 'store/api/actions';
import userSelector from 'store/user/selectors';

import { getTokenAmountDisplay } from 'utils';

import { updateUserState } from '../reducer';

import { getTokenBalance } from '../actions';
import actionTypes from '../actionTypes';

export function* getTokenBalanceSaga({ type, payload: { web3Provider } }: ReturnType<typeof getTokenBalance>) {
  yield put(apiActions.request(type));

  try {
    yield put(apiActions.success(type));
  } catch (err) {
    console.error(err);
    yield put(apiActions.error(type, err));
  }
}

export default function* listener() {
  yield takeLatest(actionTypes.GET_TOKEN_BALANCE, getTokenBalanceSaga);
}
