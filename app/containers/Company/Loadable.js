/**
 *
 * Asynchronously loads the component for Company
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
