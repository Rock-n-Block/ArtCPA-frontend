import { fork } from 'redux-saga/effects';
import { getTokensSagaListener } from './getAvailableTokens';

export default function* tokensSaga() {
  yield fork(getTokensSagaListener);
}
