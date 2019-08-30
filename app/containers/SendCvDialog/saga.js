import { take, call, put } from 'redux-saga/effects';
import configs from 'app/config';
import * as actions from './actions';
import * as constants from './constants';

const fetchAbstractCV = userId =>
  fetch(`${configs.services.cv.abstract}/${userId}`).then(response =>
    response.json(),
  );

export default function* getAbstractCVSaga() {
  while (true) {
    const { user } = yield take(constants.REQUEST_ABSTRACT_CV);
    const abstractCV = yield call(() => fetchAbstractCV(user.id));
    yield put(actions.responseAbstractCVAction(abstractCV));
  }
}
