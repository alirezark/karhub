/*
 *
 * SendCvDialog actions
 *
 */

import * as actions from './constants';

export function openSendCVAction(job) {
  return {
    type: actions.OPEN_SEND_CV,
    job,
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
