/*
 *
 * Jobs reducer
 *
 */
import produce from 'immer';
import { REQUEST_JOBS, RESPONSE_JOBS } from './constants';

export const initialState = {
  items: [],
  isFetching: false,
};

/* eslint-disable default-case, no-param-reassign */
const jobsReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case REQUEST_JOBS:
        return { ...state, isFetching: true };

      case RESPONSE_JOBS:
        return {
          ...state,
          isFetching: false,
          items: action.jobs,
        };
    }
  });

export default jobsReducer;
