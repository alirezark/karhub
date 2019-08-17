/*
 *
 * GlobalHeader reducer
 *
 */
import produce from 'immer';
import * as actions from './constants';

export const initialState = {
  isLogin: false,
  showLoginDialog: false,
};

/* eslint-disable default-case, no-param-reassign */
const globalHeaderReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case actions.SET_USER_LOGIN:
        return {
          ...state,
          isLogin: true,
        };
      case actions.OPEN_LOGIN_DIALOG:
        return {
          ...state,
          showLoginDialog: true,
        };
      case actions.CLOSE_LOGIN_DIALOG:
        return {
          ...state,
          showLoginDialog: false,
        };
    }
  });

export default globalHeaderReducer;
