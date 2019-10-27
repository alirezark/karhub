/**
 *
 * Jobs
 *
 */

import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import SearchPanel from './SearchPanel';
import Filters from './Filters';
import JobsList from './JobsList';
import CreateAlertDialog from './contents/createAlertDialog';
import ShareJobDialog from './contents/shareJobDialog';
import { JobsContext } from './jobs.provider';
import { withSendCVDialog } from '../SendCvDialog/sendCVDialog.context';

export function Jobs(props) {
  const { jobsList } = useContext(JobsContext);
  const { showSendCVDialog } = props;
  const [openCreateAlert, setOpenCreateAlert] = useState(false);
  const [openShareJob, setOpenShareJob] = useState(false);

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
  showSendCVDialog: PropTypes.func,
};

export default withSendCVDialog(Jobs);
