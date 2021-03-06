import React, { useState } from 'react';
// import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import {
  Typography,
  Grid,
  InputAdornment,
  IconButton,
  Link,
} from '@material-ui/core';
import { MDialog, MDialogTitle, MDialogContent } from 'mui/MDialog';
import MButton from 'mui/MButton';
// import messages from './messages';
import iconLinkedin from 'app/assets/images/icons/linkedin.png';
import iconGoogle from 'app/assets/images/icons/google.png';
import MTextField from 'mui/MTextField';
import { PersonOutlined, Visibility, VisibilityOff } from '@material-ui/icons';
import styles from './style';

function LoginDialog(props) {
  const { handleLogin } = props;
  const [account, setAccount] = useState({
    username: '',
    password: '',
  });
  const classes = styles();
  const [showPass, setShowPass] = useState(false);

  const handleClickShowPassword = () => {
    setShowPass(!showPass);
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const handleChange = e => {
    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    });
  };

  const submitLogin = () => {
    handleLogin(account.username, account.password);
  }

  return (
    <MDialog
      onClose={props.handleClose}
      aria-labelledby="customized-dialog-title"
      open={props.open}
    >
      <MDialogTitle id="customized-dialog-title" onClose={props.handleClose}>
        ورود به حساب کاربری
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
          <div>
            <MTextField
              fullWidth
              name="username"
              className="outlined-strong"
              placeholder="ایمیل یا شماره موبایل"
              InputProps={{ startAdornment: <PersonOutlined /> }}
              value={account.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <MTextField
              fullWidth
              name="password"
              className="outlined-strong"
              placeholder="کلمه عبور"
              type={showPass ? 'text' : 'password'}
              value={account.password}
              onChange={handleChange}
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
          </div>
          <div>
            <Link href="#/forgotPass" className={classes.forgotLink}>
              فراموشی رمز عبور؟
            </Link>
          </div>
          <div className={classes.loginBtnContain}>
            <MButton
              fullWidth
              variant="contained"
              color="primary"
              className={classes.btnLogin}
              onClick={submitLogin}
            >
              ورود
            </MButton>
          </div>
          <div className={classes.registerLinkContain}>
            عضو کارهاب نیستم!
            <MButton
              onClick={props.showRegister}
              className={classes.registerLink}
            >
              ثبت نام
            </MButton>
          </div>
        </form>
      </MDialogContent>
    </MDialog>
  );
}

LoginDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  showRegister: PropTypes.func.isRequired,
};

export default LoginDialog;
