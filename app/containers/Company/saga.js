import { call, put } from 'redux-saga/effects';
import configs from 'app/config';
import * as actions from './actions';

const fetchCopmany = companyId =>
  fetch(`${configs.services.company.profile}/${companyId}`).then(response =>
    response.json(),
  );

// Individual exports for testing
export function* companySaga(companyId) {
  yield put(actions.requestComapanyAction(companyId));
  const company = yield call(() => fetchCopmany(companyId));
  yield put(actions.responseComapanyAction(company));
}
