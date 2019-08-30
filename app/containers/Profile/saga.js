import { call, put, take } from 'redux-saga/effects';
import configs from 'app/config';
import * as actions from './actions';
import * as constants from './constants';

const fetchProfile = userId =>
  fetch(`${configs.services.account.profile}/${userId}`).then(response =>
    response.json(),
  );

const fetchPaymentHistory = userId =>
  fetch(`${configs.services.account.paymentHistory}/${userId}`).then(response =>
    response.json(),
  );

const fetchAbstractCV = userId =>
  fetch(`${configs.services.cv.abstract}/${userId}`).then(response =>
    response.json(),
  );

const fetchUploadedCV = userId =>
  fetch(`${configs.services.cv.uploaded}/${userId}`).then(response =>
    response.json(),
  );

export function* profileSaga(userId) {
  yield put(actions.requestProfileAction(userId));
  const profile = yield call(() => fetchProfile(userId));
  yield put(actions.responseProfileAction(profile));
}

export function* paymentHistorySaga() {
  while (true) {
    const { userId } = yield take(constants.REQUEST_PAYEMENT_HISTORY);
    const paymentHistory = yield call(() => fetchPaymentHistory(userId));
    yield put(actions.responsePaymentHistoryAction(paymentHistory));
  }
}

export function* abstractCVSaga() {
  while (true) {
    const { userId } = yield take(constants.REQUEST_ABSTRACT_CV);
    const abstractCV = yield call(() => fetchAbstractCV(userId));
    yield put(actions.responseAbstractCVAction(abstractCV));
  }
}

export function* uploadedCVSaga() {
  while (true) {
    const { userId } = yield take(constants.REQUEST_UPLOADED_CV);
    const uploadedCV = yield call(() => fetchUploadedCV(userId));
    yield put(actions.responseUploadedCVAction(uploadedCV));
  }
}
