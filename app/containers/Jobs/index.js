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

export function Jobs(props) {
  useInjectReducer({ key: 'jobs', reducer });
  useInjectSaga({ key: 'jobs', saga });
  return (
    <div>
      <SearchPanel />
      <Filters />
      <JobsList />
    </div>
  );
}

Jobs.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape.isRequired,
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
