/*
 *
 * Profile reducer
 *
 */
import produce from 'immer';
import * as actions from './constants';

export const initialState = {
  profile: {},
  paymentHistory: [],
  abstractCV: {},
  uploadedCV: [],
  favoriteJobs: [],
  favoriteCompanies: [],
  sentCVs: [],
  employerRequests: [],
  tests: [],
  isLoading: false,
  isLoadingPayment: false,
  isLoadingUploadedCV: false,
  isLoadingAbstractCV: false,
  isLoadingFavoritesJobs: false,
  isLoadingSentCV: false,
  isLoadingFavoriteCompanies: false,
  isLoadingEmployerRequests: false,
  isLoadingTests: false,
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
          isLoading: false,
          profile: action.profile,
        };
      case actions.REQUEST_PAYEMENT_HISTORY:
        return {
          ...state,
          isLoadingPayment: true,
        };
      case actions.RESPONSE_PAYEMENT_HISTORY:
        return {
          ...state,
          isLoadingPayment: false,
          paymentHistory: action.payments,
        };
      case actions.REQUEST_ABSTRACT_CV:
        return {
          ...state,
          isLoadingAbstractCV: true,
        };
      case actions.RESPONSE_ABSTRACT_CV:
        return {
          ...state,
          isLoadingAbstractCV: false,
          abstractCV: action.abstractCV,
        };
      case actions.REQUEST_UPLOADED_CV:
        return {
          ...state,
          isLoadingUploadedCV: true,
        };
      case actions.RESPONSE_UPLOADED_CV:
        return {
          ...state,
          isLoadingUploadedCV: false,
          uploadedCV: action.uploadedCV,
        };
      case actions.REQUEST_FAVORITE_JOBS:
        return {
          ...state,
          isLoadingFavoritesJobs: true,
        };
      case actions.RESPONSE_FAVORITE_JOBS:
        return {
          ...state,
          isLoadingFavoritesJobs: false,
          favoriteJobs: action.jobs,
        };
      case actions.REQUEST_SENT_CV:
        return {
          ...state,
          isLoadingSentCV: true,
        };
      case actions.RESPONSE_SENT_CV:
        return {
          ...state,
          isLoadingSentCV: false,
          sentCVs: action.cvList,
        };
      case actions.REQUEST_FAVORITE_COMPANIES:
        return {
          ...state,
          isLoadingFavoriteCompanies: true,
        };
      case actions.RESPONSE_FAVORITE_COMPANIES:
        return {
          ...state,
          isLoadingFavoriteCompanies: false,
          favoriteCompanies: action.companies,
        };
      case actions.REQUEST_EMPLOYER_REQUESTS:
        return {
          ...state,
          isLoadingEmployerRequests: true,
        };
      case actions.RESPONSE_EMPLOYER_REQUESTS:
        return {
          ...state,
          isLoadingEmployerRequests: false,
          employerRequests: action.result,
        };
      case actions.REQUEST_TESTS:
        return {
          ...state,
          isLoadingTests: true,
        };
      case actions.RESPONSE_TESTS:
        return {
          ...state,
          isLoadingTests: false,
          tests: action.result,
        };
    }
  });

export default profileReducer;
