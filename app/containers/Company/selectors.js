import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the company state domain
 */

const selectCompanyDomain = state => state.company || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Company
 */

const makeSelectCompany = () =>
  createSelector(
    selectCompanyDomain,
    substate => substate,
  );

export default makeSelectCompany;
export { selectCompanyDomain };
