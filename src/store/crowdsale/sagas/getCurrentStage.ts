import { BigNumber } from 'bignumber.js';
import { takeLatest } from 'typed-redux-saga';
import { put, call } from 'redux-saga/effects';
import apiActions from 'store/api/actions';
import { baseApi } from 'store/api';
import { getCurrentStage } from '../actions';
import { crowdSaleActionTypes } from '../actionTypes';
import { updateStageTokenPrice } from '../reducer';

export function* getCurrentStageSaga({
  type,
}: ReturnType<typeof getCurrentStage>) {
  yield put(apiActions.request(type));
  try{
    const currentStageData = yield call(baseApi.getCurrentStage);
    yield put(updateStageTokenPrice(new BigNumber(currentStageData.data?.current_stage_price_usd)));
    yield put(apiActions.success(type));
  }catch(e) {
    yield put(apiActions.error(type));
  }
}

function* getCurrentStageSagaListener() {
  yield takeLatest(crowdSaleActionTypes.GET_CURRENT_STAGE, getCurrentStageSaga);
}

export { getCurrentStageSagaListener };
