import { take, call, put } from 'redux-saga/effects';
import configs from 'app/config';
import * as actions from './actions';
import * as constants from './constants';

const loginRequest = (username, password) =>
  fetch(configs.services.account.login, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
    }),
  }).then(response => response.json());

// Individual exports for testing
export function* loginSaga() {
  while (true) {
    const { username, password } = yield take(constants.REQUEST_USER_LOGIN);
    const user = yield call(() => loginRequest(username, password));
    yield put(actions.responseUserLoginAction(user));
  }
}
