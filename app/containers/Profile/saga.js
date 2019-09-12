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

const fetchFavoriteJobs = userId =>
  fetch(`${configs.services.jobs.favorites}/${userId}`).then(response =>
    response.json(),
  );

const fetchSentCV = userId =>
  fetch(`${configs.services.cv.sent}/${userId}`).then(response =>
    response.json(),
  );

const fetchFavoriteCompanies = userId =>
  fetch(`${configs.services.company.favorite}/${userId}`).then(response =>
    response.json(),
  );

const fetchEmployerRequests = userId =>
  fetch(`${configs.services.account.employerRequests}/${userId}`).then(
    response => response.json(),
  );

const fetchTests = () =>
  fetch(`${configs.services.account.tests}`).then(response => response.json());

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

export function* favoriteJobsSaga() {
  while (true) {
    const { userId } = yield take(constants.REQUEST_FAVORITE_JOBS);
    const jobs = yield call(() => fetchFavoriteJobs(userId));
    yield put(actions.responseFavoriteJobsAction(jobs));
  }
}

export function* sentCVSaga() {
  while (true) {
    const { userId } = yield take(constants.REQUEST_SENT_CV);
    const cvList = yield call(() => fetchSentCV(userId));
    yield put(actions.responseSentCVAction(cvList));
  }
}

export function* favoriteCompaniesSaga() {
  while (true) {
    const { userId } = yield take(constants.REQUEST_FAVORITE_COMPANIES);
    const companies = yield call(() => fetchFavoriteCompanies(userId));
    yield put(actions.responseFavoriteCompaniesAction(companies));
  }
}

export function* employerRequestsSaga() {
  while (true) {
    const { userId } = yield take(constants.REQUEST_EMPLOYER_REQUESTS);
    const requests = yield call(() => fetchEmployerRequests(userId));
    yield put(actions.responseEmployerRequestsAction(requests));
  }
}

export function* testsSaga() {
  while (true) {
    yield take(constants.REQUEST_TESTS);
    const tests = yield call(() => fetchTests());
    yield put(actions.responseTestsAction(tests));
  }
}
