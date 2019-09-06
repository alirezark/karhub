/*
 *
 * Company actions
 *
 */

import * as actions from './constants';

export function requestComapanyAction(companyId) {
  return {
    type: actions.REQUEST_COMPANY,
    companyId,
  };
}

export function responseComapanyAction(result) {
  return {
    type: actions.RESPONSE_COMPANY,
    result,
  };
}
