/**
 *
 * Company
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { withRouter } from 'react-router';
// import { FormattedMessage } from 'react-intl';

import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectCompany from './selectors';
import reducer from './reducer';
import { companySaga } from './saga';
import GeneralView from './GeneralView';
// import messages from './messages';

export function Company(props) {
  const { match, company } = props;
  useInjectReducer({ key: 'company', reducer });
  useInjectSaga({ key: 'company', saga: () => companySaga(match.params.id) });

  return (
    <div>
      <Helmet>
        <title>Company</title>
        <meta name="description" content="Description of Company" />
      </Helmet>
      <GeneralView company={company.info} />
    </div>
  );
}

Company.propTypes = {
  dispatch: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  company: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  company: makeSelectCompany(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  withRouter,
)(Company);
