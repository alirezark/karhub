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
  showRegisterDialog: false,
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
      case actions.SET_USER_LOGOUT:
        return {
          ...state,
          isLogin: false,
        };
      case actions.OPEN_LOGIN_DIALOG:
        return {
          ...state,
          showLoginDialog: true,
          showRegisterDialog: false,
        };
      case actions.CLOSE_LOGIN_DIALOG:
        return {
          ...state,
          showLoginDialog: false,
        };
      case actions.OPEN_REGISTER_DIALOG:
        return {
          ...state,
          showLoginDialog: false,
          showRegisterDialog: true,
        };
      case actions.CLOSE_REGISTER_DIALOG:
        return {
          ...state,
          showRegisterDialog: false,
        };
    }
  });

export default globalHeaderReducer;
