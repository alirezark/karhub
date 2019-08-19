/**
 *
 * Jobs
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectJobs from './selectors';
import reducer from './reducer';
import saga from './saga';
import SearchPanel from './SearchPanel';
import Filters from './Filters';
import JobsList from './JobsList';
import * as CVDialogActions from 'containers/SendCvDialog/actions';

export function Jobs(props) {
  useInjectReducer({ key: 'jobs', reducer });
  useInjectSaga({ key: 'jobs', saga });

  const showSendCVDialog = function(job) {
    props.dispatch(CVDialogActions.openSendCVAction(job));
  };

  return (
    <div>
      <SearchPanel />
      <Filters />
      <JobsList showSendCVDialog={showSendCVDialog} />
    </div>
  );
}

Jobs.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  jobs: makeSelectJobs(),
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

export default compose(withConnect)(Jobs);
