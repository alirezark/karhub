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
