import { createSelector } from 'reselect';
import { initialState } from 'containers/GlobalHeader/reducer';

/**
 * Direct selector to the globalHeader state domain
 */

const selectGlobalHeaderDomain = state => state.globalHeader || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by GlobalHeader
 */

const user = () =>
  createSelector(
    selectGlobalHeaderDomain,
    substate => ({
      isLogin: substate.isLogin,
      id: substate.id,
    }),
  );

export default user;
