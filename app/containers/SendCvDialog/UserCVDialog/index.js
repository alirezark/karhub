import React from 'react';
// import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { MDialog, MDialogTitle, MDialogContent } from 'mui/MDialog';
import MButton from 'mui/MButton';
// import messages from './messages';
import JobCard from 'components/JobCard';
import styles from './style';

function UserCVDialog(props) {
  const classes = styles();
  const { job, handleSendCV } = props;

  return (
    <MDialog
      onClose={props.handleClose}
      aria-labelledby="customized-dialog-title"
      open={props.open}
      fullWidth
      maxWidth="sm"
    >
      <MDialogTitle id="customized-dialog-title" onClose={props.handleClose}>
        ارسال رزومه
      </MDialogTitle>
      <MDialogContent>
        <JobCard className={classes.jobCard} job={job} hideNavigation />

        <div className={classes.cvPreview}>
          <Typography variant="h5" component="h5" className={classes.panelHead}>
            خلاصه رزومه شما
            <MButton className={classes.btnEditCV}>ویرایش رزومه</MButton>
          </Typography>
          <Typography variant="h3">فرهاد جعفری</Typography> ...
        </div>
        <div className={classes.txtSelectCV}>
          درخواست برای این شغل با رزومه دیگر
          <MButton className={classes.loginLink}>انتخاب رزومه</MButton>
        </div>

        <div className={classes.submitBtnContain}>
          <MButton
            fullWidth
            variant="contained"
            color="primary"
            className={classes.btnSubmit}
            onClick={handleSendCV}
          >
            ارسال رزومه
          </MButton>
          <div>
            <label className={classes.subscribe}>
              <input type="checkbox" />
              مشاغل مشابه را به من اطلاع بده
            </label>
          </div>
        </div>
      </MDialogContent>
    </MDialog>
  );
}

UserCVDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleSendCV: PropTypes.func.isRequired,
  job: PropTypes.object.isRequired,
};

export default UserCVDialog;
