/*
 *
 * Categories actions
 *
 */

import * as actions from './constants';

export function defaultAction() {
  return {
    type: actions.DEFAULT_ACTION,
  };
}

export function requestTopCategoriesAction() {
  return {
    type: actions.REQUEST_TOP_CATEGORIES,
  };
}

export function responseTopCateogriesAction(categories) {
  return {
    type: actions.RESPONSE_TOP_CATEGORIES,
    categories,
  };
}

export function requestCategoriesAction(parentId) {
  return {
    type: actions.REQUEST_CATEGORIES,
    parentId,
  };
}

export function responseCategoriesAction(categories) {
  return {
    type: actions.RESPONSE_CATEGORIES,
    categories,
  };
}

export function pushSelecteCategoryAction(category) {
  return {
    type: actions.PUSH_SELECTED_CATEGORY,
    category,
  };
}

export function popSelectedCategoryAction(count) {
  return {
    type: actions.POP_SELECTED_CATEGORY,
    count,
  };
}

export function requestSelectedCategory(category) {
  return {
    type: actions.REQUEST_SELECTED_CATEGORY,
    category,
  };
}
