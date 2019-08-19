import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the sendCvDialog state domain
 */

const selectSendCvDialogDomain = state => state.sendCvDialog || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by SendCvDialog
 */

const makeSelectSendCvDialog = () =>
  createSelector(
    selectSendCvDialogDomain,
    substate => substate,
  );

const makeSelectJob = () =>
  createSelector(
    selectSendCvDialogDomain,
    substate => ({ ...substate.job }),
  );

export default makeSelectSendCvDialog;
export { selectSendCvDialogDomain, makeSelectJob };
