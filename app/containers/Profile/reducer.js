/*
 *
 * Profile reducer
 *
 */
import produce from 'immer';
import * as actions from './constants';

export const initialState = {
  profile: {},
  isLoading: false,
};

/* eslint-disable default-case, no-param-reassign */
const profileReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case actions.REQUEST_PROFILE:
        return {
          ...state,
          isLoading: true,
        };
      case actions.RESPONSE_PROFILE:
        return {
          ...state,
          profile: action.profile,
        };
    }
  });

export default profileReducer;
