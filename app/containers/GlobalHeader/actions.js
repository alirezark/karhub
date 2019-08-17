/*
 *
 * GlobalHeader actions
 *
 */

import * as actions from './constants';

export function defaultAction() {
  return {
    type: actions.DEFAULT_ACTION,
  };
}

export function setUserLoginAction() {
  return {
    type: actions.SET_USER_LOGIN,
  };
}

export function setUserLogoutAction() {
  return {
    type: actions.SET_USER_LOGOUT,
  };
}

export function openLoginDialogAction() {
  return {
    type: actions.OPEN_LOGIN_DIALOG,
  };
}

export function closeLoginDialogAction() {
  return {
    type: actions.CLOSE_LOGIN_DIALOG,
  };
}

export function openRegisterDialogAction() {
  return {
    type: actions.OPEN_REGISTER_DIALOG,
  };
}

export function closeRegisterDialogAction() {
  return {
    type: actions.CLOSE_REGISTER_DIALOG,
  };
}
