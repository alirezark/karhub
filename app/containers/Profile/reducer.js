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
  isLoading: false,
  isLoadingPeyment: false,
  isLoadingAbstractCV: false,
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
    }
  });

export default profileReducer;
