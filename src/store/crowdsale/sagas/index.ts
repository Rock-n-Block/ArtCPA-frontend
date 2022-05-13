import { fork } from 'redux-saga/effects';
import { buyTokenSagaListener } from './buyToken';
import { getCurrentStageSagaListener } from './getCurrentStage';

export default function* crowdSaleSaga() {
  yield fork(getCurrentStageSagaListener);
  yield fork(buyTokenSagaListener);
}
