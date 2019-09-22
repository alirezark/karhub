/**
 *
 * Company
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { withRouter } from 'react-router';
// import { FormattedMessage } from 'react-intl';
import { GeneralView } from './GeneralView';
// import messages from './messages';

export function Company(props) {
  const { match } = props;

  return (
    <div>
      <Helmet>
        <title>Company</title>
        <meta name="description" content="Description of Company" />
      </Helmet>
      <GeneralView companyId={match.params.id} />
    </div>
  );
}

Company.propTypes = {
  match: PropTypes.object.isRequired,
};

export default withRouter(Company);
