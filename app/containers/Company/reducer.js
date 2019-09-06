/*
 *
 * Company reducer
 *
 */
import produce from 'immer';
import * as actions from './constants';

export const initialState = {
  info: {},
  isLoadingCompany: false,
};

/* eslint-disable default-case, no-param-reassign */
const companyReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case actions.REQUEST_COMPANY:
        return {
          ...state,
          isLoadingCompany: true,
        };
      case actions.RESPONSE_COMPANY:
        return {
          ...state,
          isLoadingCompany: false,
          info: action.result,
        };
    }
  });

export default companyReducer;
