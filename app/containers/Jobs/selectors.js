import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the jobs state domain
 */

const selectJobsDomain = state => state.jobs || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Jobs
 */

const makeSelectJobs = () =>
  createSelector(
    selectJobsDomain,
    substate => substate,
  );

export default makeSelectJobs;
export { selectJobsDomain };
