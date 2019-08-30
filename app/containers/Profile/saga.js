import { call, put } from 'redux-saga/effects';
import configs from 'app/config';
import * as actions from './actions';

const fetchProfile = userId =>
  fetch(`${configs.services.account.profile}/${userId}`).then(response =>
    response.json(),
  );

export default function* profileSaga(userId) {
  yield put(actions.requestProfileAction(userId));
  const profile = yield call(() => fetchProfile(userId));
  yield put(actions.responseProfileAction(profile));
}
