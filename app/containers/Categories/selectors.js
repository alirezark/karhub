import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the categories state domain
 */

const selectCategoriesDomain = state => state.categories || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Categories
 */

export const makeSelectCategories = () =>
  createSelector(
    selectCategoriesDomain,
    domain => ({
      items: domain.categories,
      isFetching: domain.isFetchingCategories,
    }),
  );

export const makeSelectTopCategories = () =>
  createSelector(
    selectCategoriesDomain,
    domain => ({
      items: domain.topCategories,
      isFetching: domain.isFetchingTopCategories,
      title:
        domain.selectedCategories.length === 0
          ? 'دسته بندی\u200Cهای برتر شغلی'
          : [...domain.selectedCategories].pop().title,
    }),
  );

export const makeSelectSelectedCategories = () =>
  createSelector(
    selectCategoriesDomain,
    domain => domain.selectedCategories,
  );

export { selectCategoriesDomain };
