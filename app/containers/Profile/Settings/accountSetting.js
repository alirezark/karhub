import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import MTextField from 'mui/MTextField';
import { PersonOutlined } from '@material-ui/icons';
import MButton from 'mui/MButton';
import styles from './style';

function AccountSetting(props) {
  const { user } = props;
  const classes = styles();

  const [email, setEmail] = useState(user.email);
  const [pass, setPass] = useState({
    currentPassword: '',
    newPassword: '',
    reNewPassword: '',
  });

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handlePassChange = e => {
    setPass({
      ...pass,
      [e.target.name]: e.target.value,
    });
  };

  const validateSubmitPass = () =>
    pass.currentPassword.length > 5 &&
    pass.newPassword.length > 5 &&
    pass.reNewPassword.length > 5 &&
    pass.newPassword === pass.reNewPassword &&
    pass.currentPassword !== pass.newPassword;

  return (
    <div>
      <label>تغییر ایمیل</label>
      <Grid container alignItems="center" className={classes.formRow}>
        <Grid item md={5}>
          <MTextField
            fullWidth
            className="outlined-strong text-left"
            placeholder="ایمیل"
            InputProps={{ startAdornment: <PersonOutlined /> }}
            value={email}
            onChange={handleEmailChange}
          />
        </Grid>
        <Grid item md={2}>
          <MButton
            fullWidth
            variant="contained"
            color="primary"
            className={classes.button}
            disabled={!email || email === user.email || email.length < 5}
          >
            ارسال لینک تایید
          </MButton>
        </Grid>
      </Grid>

      <label>تغییر کلمه عبور</label>
      <Grid container alignItems="center" className={classes.formRow}>
        <Grid item md={5}>
          <MTextField
            fullWidth
            name="currentPassword"
            className="outlined-strong text-left"
            placeholder="کلمه عبور فعلی"
            InputProps={{ startAdornment: <PersonOutlined /> }}
            onChange={handlePassChange}
            value={pass.currentPassword}
          />
        </Grid>
      </Grid>
      <Grid container alignItems="center" className={classes.formRow}>
        <Grid item md={5}>
          <MTextField
            fullWidth
            name="newPassword"
            className="outlined-strong text-left"
            placeholder="کلمه عبور جدید"
            InputProps={{ startAdornment: <PersonOutlined /> }}
            onChange={handlePassChange}
            value={pass.newPassword}
            disabled={pass.currentPassword.length < 6}
          />
        </Grid>
        <Grid item md={5}>
          <MTextField
            fullWidth
            name="reNewPassword"
            className="outlined-strong text-left"
            placeholder="تکرار کلمه عبور جدید"
            InputProps={{ startAdornment: <PersonOutlined /> }}
            onChange={handlePassChange}
            value={pass.reNewPassword}
            disabled={pass.currentPassword.length < 6}
          />
        </Grid>
        <Grid item md={2}>
          <MButton
            fullWidth
            variant="contained"
            color="primary"
            className={classes.button}
            disabled={!validateSubmitPass()}
          >
            ثبت
          </MButton>
        </Grid>
      </Grid>
    </div>
  );
}

AccountSetting.propTypes = {
  user: PropTypes.object.isRequired,
};

export default AccountSetting;
