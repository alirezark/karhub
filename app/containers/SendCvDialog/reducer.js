/*
 *
 * SendCvDialog reducer
 *
 */
import produce from 'immer';
import * as actions from './constants';

export const initialState = {
  showSendCVDialog: false,
  job: {},
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
          showSuccess: true,
        };
    }
  });

export default sendCvDialogReducer;
