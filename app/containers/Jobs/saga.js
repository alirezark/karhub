import { take, call, put, select } from 'redux-saga/effects';
import * as actions from './actions';
import configs from 'app/config';

// Individual exports for testing
export function* jobsSaga() {
  // See example in containers/HomePage/saga.js
}

export function fetchJobsApi() {
  return fetch(configs.services.jobs.list).then(response => response.json());
}

export default function* fetchJobs() {
  yield put(actions.requestJobs());
  const jobs = yield call(fetchJobsApi);
  yield put(actions.responseJobs(jobs));
}
