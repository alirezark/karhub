import React from 'react';
// import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import { Typography, Grid } from '@material-ui/core';
import { MDialog, MDialogTitle, MDialogContent } from 'mui/MDialog';
import MButton from 'mui/MButton';
// import messages from './messages';
import MTextField from 'mui/MTextField';
import { PersonOutlined } from '@material-ui/icons';
import JobCard from 'components/JobCard';
import FileUpload from 'components/FileUpload';
import creatCVIcon from 'app/assets/images/icons/create_cv.png';
import styles from './style';

function GuestCVDialog(props) {
  const classes = styles();
  const { job, showLogin, handleSendCV } = props;

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
              <FileUpload title="آپلود رزومه" />
            </Grid>
          </Grid>
        </form>
        <div className={classes.divider} />
        <div className={classes.iconInfo}>
          <div className={classes.iconContain}>
            <img src={creatCVIcon} alt="cv" className={classes.icon} />
          </div>
          <div>
            <Typography>
              با ساخت رزومه در کارهاب به راحتی می توانید با یک کلیک برای بقیه
              موقعیت ‌های شغلی، رزومه خود را ارسال کنید.
            </Typography>
          </div>
          <div className={classes.btnContain}>
            <MButton className={classes.btnBlue} variant="contained">
              ساخت رزومه
            </MButton>
          </div>
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
        <div className={classes.loginLinkContain}>
          قبلا عضو کارهاب شده‌ام!
          <MButton className={classes.loginLink} onClick={showLogin}>
            ورود به حساب کاری
          </MButton>
        </div>
      </MDialogContent>
    </MDialog>
  );
}

GuestCVDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleSendCV: PropTypes.func.isRequired,
  showLogin: PropTypes.func,
  job: PropTypes.object.isRequired,
};

export default GuestCVDialog;
