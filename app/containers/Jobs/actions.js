/*
 *
 * Jobs actions
 *
 */

import { DEFAULT_ACTION, REQUEST_JOBS, RESPONSE_JOBS } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function requestJobs() {
  return {
    type: REQUEST_JOBS,
  };
}

export function responseJobs(jobs) {
  return {
    type: RESPONSE_JOBS,
    jobs,
  };
}
