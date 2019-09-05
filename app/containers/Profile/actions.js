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

export function requestUploadedCVAction(userId) {
  return {
    type: actions.REQUEST_UPLOADED_CV,
    userId,
  };
}

export function responseUploadedCVAction(uploadedCV) {
  return {
    type: actions.RESPONSE_UPLOADED_CV,
    uploadedCV,
  };
}

export function requestFavoriteJobsAction(userId) {
  return {
    type: actions.REQUEST_FAVORITE_JOBS,
    userId,
  };
}

export function responseFavoriteJobsAction(jobs) {
  return {
    type: actions.RESPONSE_FAVORITE_JOBS,
    jobs,
  };
}

export function requestSentCVAction(userId) {
  return {
    type: actions.REQUEST_SENT_CV,
    userId,
  };
}

export function responseSentCVAction(cvList) {
  return {
    type: actions.RESPONSE_SENT_CV,
    cvList,
  };
}

export function requestFavoriteCompaniesAction(userId) {
  return {
    type: actions.REQUEST_FAVORITE_COMPANIES,
    userId,
  };
}

export function responseFavoriteCompaniesAction(companies) {
  return {
    type: actions.RESPONSE_FAVORITE_COMPANIES,
    companies,
  };
}
