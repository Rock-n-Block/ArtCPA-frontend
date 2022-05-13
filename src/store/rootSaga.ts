import { fork } from 'redux-saga/effects';
import userSaga from 'store/user/sagas';
import tokensSaga from 'store/tokens/sagas';
import crowdSaleSaga from 'store/crowdsale/sagas';

export default function* rootSaga() {
  yield fork(userSaga);
  yield fork(tokensSaga);
  yield fork(crowdSaleSaga);
}
