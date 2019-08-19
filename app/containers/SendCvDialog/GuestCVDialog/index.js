import React, { useState } from 'react';
// import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import {
  Typography,
  Grid,
  InputAdornment,
  IconButton,
  DialogActions,
} from '@material-ui/core';
import { MDialog, MDialogTitle, MDialogContent } from 'mui/MDialog';
import MButton from 'mui/MButton';
// import messages from './messages';
import MTextField from 'mui/MTextField';
import {
  PersonOutlined,
  Visibility,
  VisibilityOff,
  Done,
} from '@material-ui/icons';
import styles from './style';
import JobCard from 'components/JobCard';

function GuestCVDialog(props) {
  const classes = styles();
  const { job } = props;

  return (
    <MDialog
      onClose={props.handleClose}
      aria-labelledby="customized-dialog-title"
      open={props.open}
      fullWidth
      maxWidth="md"
    >
      <MDialogTitle id="customized-dialog-title" onClose={props.handleClose}>
        ارسال رزومه
      </MDialogTitle>
      <MDialogContent>
        <JobCard className={classes.jobCard} job={job} hideNavigation />
        <form className={classes.loginForm}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <MTextField
                fullWidth
                className="outlined-strong"
                placeholder="نام و نام خانوادگی"
                InputProps={{ startAdornment: <PersonOutlined /> }}
              />
            </Grid>
            <Grid item xs={6}>
              <MTextField
                fullWidth
                className="outlined-strong"
                placeholder="شماره موبایل"
                InputProps={{ startAdornment: <PersonOutlined /> }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <MTextField
                fullWidth
                className="outlined-strong"
                placeholder="ایمیل"
                InputProps={{ startAdornment: <PersonOutlined /> }}
              />
            </Grid>
            <Grid item xs={6}>
            </Grid>
          </Grid>
          <div className={classes.registerBtnContain}>
            <MButton
              fullWidth
              variant="contained"
              color="primary"
              className={classes.btnLogin}
              onClick={props.handleSendCV}
            >
              ارسال رزومه
            </MButton>
          </div>
        </form>
      </MDialogContent>
    </MDialog>
  );
}

GuestCVDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleSendCV: PropTypes.func.isRequired,
  job: PropTypes.object.isRequired,
};

export default GuestCVDialog;
