/*
 *
 * SendCvDialog reducer
 *
 */
import produce from 'immer';
import * as actions from './constants';

export const initialState = {
  showSendCVDialog: false,
  showSuccessDialog: false,
  isLoadingCV: false,
  job: {},
  abstractCV: {},
};

/* eslint-disable default-case, no-param-reassign */
const sendCvDialogReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case actions.OPEN_SEND_CV:
        return {
          ...state,
          showSendCVDialog: true,
          job: action.job,
        };
      case actions.CLOSE_SEND_CV:
        return {
          ...state,
          showSendCVDialog: false,
        };
      case actions.SEND_CV:
        return {
          ...state,
          showSendCVDialog: false,
          showSuccessDialog: true,
        };
      case actions.CLOSE_SUCCESS_SEND_CV:
        return {
          ...state,
          showSendCVDialog: false,
          showSuccessDialog: false,
        };
      case actions.REQUEST_ABSTRACT_CV:
        return {
          ...state,
          isLoadingCV: true,
        };
      case actions.RESPONSE_ABSTRACT_CV:
        return {
          ...state,
          isLoadingCV: true,
          abstractCV: action.abstractCV,
        };
    }
  });

export default sendCvDialogReducer;
