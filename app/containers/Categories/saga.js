import { take, call, put } from 'redux-saga/effects';
import configs from 'app/config';
import * as actions from './actions';
import * as constances from './constants';

export const fetchTopCategoriesApi = function() {
  return fetch(configs.services.jobs.topCategories).then(response =>
    response.json(),
  );
};

export const fetchCategoriesApi = function(parentId) {
  return fetch(`${configs.services.jobs.categories}/${parentId}`).then(response =>
    response.json(),
  );
};

export function* fetchTopCategories() {
  yield put(actions.requestTopCategoriesAction());
  const categories = yield call(fetchTopCategoriesApi);
  yield put(actions.responseTopCateogriesAction(categories));
}

export function* fetchCategories() {
  yield put(actions.requestCategoriesAction());
  const categories = yield call(() => fetchCategoriesApi(0));
  yield put(actions.responseCategoriesAction(categories));
}

export function* fetchSelectedCategory() {
  while (true) {
    const { category } = yield take(constances.REQUEST_SELECTED_CATEGORY);
    yield put(actions.requestTopCategoriesAction());
    const categories =
      category === null
        ? yield call(() => fetchTopCategoriesApi())
        : yield call(() => fetchCategoriesApi(category.id));
    yield put(actions.responseTopCateogriesAction(categories));
  }
}
