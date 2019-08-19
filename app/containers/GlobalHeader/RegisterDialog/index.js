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
import iconLinkedin from 'app/assets/images/icons/linkedin.png';
import iconGoogle from 'app/assets/images/icons/google.png';
import MTextField from 'mui/MTextField';
import {
  PersonOutlined,
  Visibility,
  VisibilityOff,
  Done,
} from '@material-ui/icons';
import styles from './style';

const DialogActionInfo = withStyles(() => ({
  root: {
    backgroundColor: '#E9F7EF',
    padding: '25px',
    textAlign: 'center',
    display: 'block',
  },
}))(DialogActions);

function RegisterDialog(props) {
  const classes = styles();
  const [showPass, setShowPass] = useState(false);
  const [showRepeatPass, setShowRepeatPass] = useState(false);

  const handleClickShowPassword = () => {
    setShowPass(!showPass);
  };

  const handleClickShowRepeatPass = () => {
    setShowRepeatPass(!showRepeatPass);
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <MDialog
      onClose={props.handleClose}
      aria-labelledby="customized-dialog-title"
      open={props.open}
      fullWidth
      maxWidth="md"
    >
      <MDialogTitle id="customized-dialog-title" onClose={props.handleClose}>
        ساخت حساب کاربری
      </MDialogTitle>
      <MDialogContent>
        <Typography className={classes.subHead}>
          با ورود به حساب کاربری خود به هزاران موقعیت شغلی و اطلاعات شرکت ها
          دسترسی داشته باشید.
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <MButton
              fullWidth
              variant="outlined"
              aria-label="add"
              className={classes.iconButton}
            >
              ورود با حساب کاربری لینکدین
              <div className={classes.iconContain}>
                <img alt="linkedin" src={iconLinkedin} />
              </div>
            </MButton>
          </Grid>
          <Grid item xs={6}>
            <MButton
              fullWidth
              variant="outlined"
              aria-label="add"
              className={classes.iconButton}
            >
              ورود با حساب کاربری گوگل
              <div className={classes.iconContain}>
                <img alt="google" src={iconGoogle} />
              </div>
            </MButton>
          </Grid>
        </Grid>
        <div className={classes.divider}>
          <Typography variant="h2">یا</Typography>
        </div>
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
                placeholder="ایمیل یا شماره موبایل"
                InputProps={{ startAdornment: <PersonOutlined /> }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <MTextField
                fullWidth
                className="outlined-strong"
                placeholder="کلمه عبور"
                type={showPass ? 'text' : 'password'}
                InputProps={{
                  startAdornment: <PersonOutlined />,
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        edge="end"
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPass ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <MTextField
                fullWidth
                className="outlined-strong"
                placeholder="تکرار کلمه عبور"
                type={showRepeatPass ? 'text' : 'password'}
                InputProps={{
                  startAdornment: <PersonOutlined />,
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        edge="end"
                        aria-label="toggle password visibility"
                        onClick={handleClickShowRepeatPass}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showRepeatPass ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
          <div className={classes.registerBtnContain}>
            <MButton
              fullWidth
              variant="contained"
              color="primary"
              className={classes.btnLogin}
              onClick={props.handleRegister}
            >
              ثبت نام
            </MButton>
          </div>
          <div className={classes.registerLinkContain}>
            عضو کارهاب هستم!
            <MButton onClick={props.showLogin} className={classes.registerLink}>
              ورود
            </MButton>
          </div>
        </form>
      </MDialogContent>
      <DialogActionInfo>
        <Typography variant="h3">
          ساخت حساب کاربری چه کمکی به من میکنه؟
        </Typography>
        <Grid container className={classes.registerInfo}>
          <Grid item md={4}>
            <div className={classes.infoIconContain}>
              <Done />
            </div>
            <Typography>
              با ورود به حساب کاربری خود به هزاران موقعیت شغلی.
            </Typography>
          </Grid>
          <Grid item md={4}>
            <div className={classes.infoIconContain}>
              <Done />
            </div>
            <Typography>
              با ورود به حساب کاربری خود به هزاران موقعیت شغلی.
            </Typography>
          </Grid>
          <Grid item md={4}>
            <div className={classes.infoIconContain}>
              <Done />
            </div>
            <Typography className={classes.infoLast}>
              با ورود به حساب کاربری خود به هزاران موقعیت شغلی.
            </Typography>
          </Grid>
        </Grid>
      </DialogActionInfo>
    </MDialog>
  );
}

RegisterDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleRegister: PropTypes.func.isRequired,
  showLogin: PropTypes.func.isRequired,
};

export default RegisterDialog;
