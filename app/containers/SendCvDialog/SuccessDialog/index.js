import React from 'react';
// import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { MDialog, MDialogTitle, MDialogContent } from 'mui/MDialog';
import MButton from 'mui/MButton';
import { CheckCircle } from '@material-ui/icons';
// import messages from './messages';
import JobCard from 'components/JobCard';
import styles from './style';

function SuccessDialog(props) {
  const classes = styles();
  const { job } = props;

  return (
    <MDialog
      onClose={props.handleClose}
      aria-labelledby="customized-dialog-title"
      open={props.open}
      fullWidth
      maxWidth="sm"
    >
      <MDialogTitle id="customized-dialog-title" onClose={props.handleClose}>
        <span />
      </MDialogTitle>
      <MDialogContent>
        <div className={classes.messageContain}>
          <Typography>
            <CheckCircle className={classes.messageIcon} /> رزومه با موفقیت
            ارسال شد
          </Typography>
          <MButton className={classes.messageLink}>
            مشاهده شغل‌های مرتبط
          </MButton>
        </div>
        <JobCard className={classes.jobCard} job={job} hideNavigation />
      </MDialogContent>
    </MDialog>
  );
}

SuccessDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  job: PropTypes.object.isRequired,
};

export default SuccessDialog;
