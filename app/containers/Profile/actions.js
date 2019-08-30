/*
 *
 * Profile actions
 *
 */

import * as actions from './constants';

export function requestProfileAction(userId) {
  return {
    type: actions.REQUEST_PROFILE,
    userId,
  };
}

export function responseProfileAction(profile) {
  return {
    type: actions.RESPONSE_PROFILE,
    profile,
  };
}

export function requestPaymentHistoryAction(userId) {
  return {
    type: actions.REQUEST_PAYEMENT_HISTORY,
    userId,
  };
}

export function responsePaymentHistoryAction(payments) {
  return {
    type: actions.RESPONSE_PAYEMENT_HISTORY,
    payments,
  };
}

export function requestAbstractCVAction(userId) {
  return {
    type: actions.REQUEST_ABSTRACT_CV,
    userId,
  };
}

export function responseAbstractCVAction(abstractCV) {
  return {
    type: actions.RESPONSE_ABSTRACT_CV,
    abstractCV,
  };
}
