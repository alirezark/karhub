import { take, call, put, select } from 'redux-saga/effects';
import * as actions from './actions';

// Individual exports for testing
export function* jobsSaga() {
  // See example in containers/HomePage/saga.js
}

export function fetchJobsApi() {
  return fetch('http://localhost:3721/api/jobs').then(response => response.json());
}

export default function* fetchJobs() {
  yield put(actions.requestJobs());
  const jobs = yield call(fetchJobsApi);
  yield put(actions.responseJobs(jobs));
}
