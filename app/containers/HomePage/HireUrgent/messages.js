/*
 * SearchContainer Messages
 *
 * This contains all the text for the HomePage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.HomePage.HireUrgent';

export default defineMessages({
  create_cv: {
    id: `${scope}.create_cv`,
    defaultMessage: 'Create CV',
  },
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Hire Urgent',
  },
  see_all: {
    id: `${scope}.see_all`,
    defaultMessage: 'See all',
  }
});
