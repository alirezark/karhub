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
  sentCVs: [],
  isLoading: false,
  isLoadingPayment: false,
  isLoadingUploadedCV: false,
  isLoadingAbstractCV: false,
  isLoadingFavoritesJobs: false,
  isLoadingSentCV: false,
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
    }
  });

export default profileReducer;
