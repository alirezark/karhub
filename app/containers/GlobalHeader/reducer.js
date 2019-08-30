/*
 *
 * GlobalHeader reducer
 *
 */
import produce from 'immer';
import * as actions from './constants';

const defaultUser = {
  id: 0,
  isLogin: false,
};

export const initialState = {
  user: {
    ...defaultUser,
  },
  isLoginLoading: false,
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
        };
      case actions.SET_USER_LOGOUT:
        return {
          ...state,
          user: {
            ...defaultUser,
          },
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
          isLoginLoading: true,
        };
      case actions.REQUEST_USER_LOGIN:
        return {
          ...state,
          isLoginLoading: true,
        };
      case actions.RESPONSE_USER_LOGIN:
        return {
          ...state,
          isLoginLoading: false,
          user: {
            ...action.user,
            isLogin: true,
          },
        };
    }
  });

export default globalHeaderReducer;
