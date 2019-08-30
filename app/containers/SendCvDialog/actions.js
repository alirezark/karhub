/*
 *
 * SendCvDialog actions
 *
 */

import * as actions from './constants';

export function openSendCVAction(job, user) {
  return {
    type: actions.OPEN_SEND_CV,
    job,
    user,
  };
}

export function closeSendCVAction() {
  return {
    type: actions.CLOSE_SEND_CV,
  };
}

export function sendCVAction() {
  return {
    type: actions.SEND_CV,
  };
}

export function closeSuccessDialogAction() {
  return {
    type: actions.CLOSE_SUCCESS_SEND_CV,
  };
}

export function requestAbstractCVAction(user) {
  return {
    type: actions.REQUEST_ABSTRACT_CV,
    user
  };
}

export function responseAbstractCVAction(abstractCV) {
  return {
    type: actions.RESPONSE_ABSTRACT_CV,
    abstractCV,
  };
}
