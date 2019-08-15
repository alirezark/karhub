/*
 * GlobalHeader Messages
 *
 * This contains all the text for the GlobalHeader container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.GlobalHeader';

export default defineMessages({
  home: {
    id: `${scope}.home`,
    defaultMessage: 'Home',
  },
  jobs_opportunities: {
    id: `${scope}.job-opportunities`,
    defaultMessage: 'Jobs Opportunities',
  },
  companies_info: {
    id: `${scope}.companies-info`,
    defaultMessage: 'Companies Info',
  },
  exam: {
    id: `${scope}.exam`,
    defaultMessage: 'Exam',
  },
  cv_maker: {
    id: `${scope}.cv-maker`,
    defaultMessage: 'CV Maker',
  },
  blog: {
    id: `${scope}.blog`,
    defaultMessage: 'Blog',
  },
  search_csv: {
    id: `${scope}.search-csv`,
    defaultMessage: 'Search CSV',
  },
});
