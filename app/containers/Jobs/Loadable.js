/**
 *
 * Asynchronously loads the component for Jobs
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
