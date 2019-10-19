/**
 *
 * Jobs
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import * as CVDialogActions from 'containers/SendCvDialog/actions';
import makeSelectJobs from './selectors';
import reducer from './reducer';
import saga from './saga';
import SearchPanel from './SearchPanel';
import Filters from './Filters';
import JobsList from './JobsList';
import CreateAlertDialog from './contents/createAlertDialog';
import ShareJobDialog from './contents/shareJobDialog';

export function Jobs(props) {
  useInjectReducer({ key: 'jobs', reducer });
  useInjectSaga({ key: 'jobs', saga });

  const [openCreateAlert, setOpenCreateAlert] = useState(false);
  const [openShareJob, setOpenShareJob] = useState(false);

  const showSendCVDialog = job => {
    props.dispatch(CVDialogActions.openSendCVAction(job));
  };

  const openCreateAlertDialog = () => {
    setOpenCreateAlert(true);
  };

  const closeCreateAlertDialog = () => {
    setOpenCreateAlert(false);
  };

  const openShareJobDialog = () => {
    setOpenShareJob(true);
  };

  const closeShareJobDialog = () => {
    setOpenShareJob(false);
  };

  return (
    <div>
      <SearchPanel openCreateAlertDialog={openCreateAlertDialog} />
      <Filters />
      <JobsList
        showSendCVDialog={showSendCVDialog}
        showShareJobDialog={openShareJobDialog}
      />
      <CreateAlertDialog
        open={openCreateAlert}
        onClose={closeCreateAlertDialog}
      />
      <ShareJobDialog open={openShareJob} onClose={closeShareJobDialog} />
    </div>
  );
}

Jobs.propTypes = {
  dispatch: PropTypes.func.isRequired,
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
