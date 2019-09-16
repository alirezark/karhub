/*
 *
 * Categories reducer
 *
 */
import produce from 'immer';
import * as actionTypes from './constants';

export const initialState = {
  topCategories: [],
  categories: [],
  parentId: 0,
  isFetchingTopCategories: false,
  isFetchingCategories: false,
  selectedCategories: [],
};

/* eslint-disable default-case, no-param-reassign */
const categoriesReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case actionTypes.REQUEST_TOP_CATEGORIES:
        return {
          ...state,
          isFetchingTopCategories: true,
        };
      case actionTypes.RESPONSE_TOP_CATEGORIES:
        return {
          ...state,
          isFetchingTopCategories: false,
          topCategories: action.categories,
        };

      case actionTypes.REQUEST_CATEGORIES:
        return {
          ...state,
          isFetchingCategories: true,
        };
      case actionTypes.RESPONSE_CATEGORIES:
        return {
          ...state,
          isFetchingCategories: false,
          categories: action.categories,
        };
      case actionTypes.PUSH_SELECTED_CATEGORY:
        return {
          ...state,
          selectedCategories: [...state.selectedCategories, action.category],
        };
      case actionTypes.POP_SELECTED_CATEGORY:
        return {
          ...state,
          selectedCategories: state.selectedCategories.slice(
            0,
            state.selectedCategories.length - action.count,
          ),
        };
    }
  });

export default categoriesReducer;
