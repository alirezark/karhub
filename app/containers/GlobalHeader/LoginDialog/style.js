import { makeStyles } from '@material-ui/core';

const styles = makeStyles(theme => ({
  subHead: {
    fontSize: 14,
    color: '#9B9B9B',
    marginBottom: '3rem',
  },
  iconButton: {
    width: '100%',
    color: '#9B9B9B',
    justifyContent: 'initial',
    padding: '10px 16px',
    '& img': {
      float: 'right',
    },
  },
  iconContain: {
    flexGrow: 1,
  },
  divider: {
    height: 0,
    borderTop: '2px dashed #979797',
    margin: '2rem 0',
    textAlign: 'center',
    '& h2': {
      display: 'block',
      margin: '-10px auto 0',
      background: '#fff',
      width: 37,
    },
  },
  loginForm: {
    '&>div': {
      width: '60%',
      margin: '24px auto 0',
    },
  },
  forgotLink: {
    fontSize: 14,
    color: '#9B9B9B',
    float: 'right',
    marginTop: '-12px',
  },
  loginBtnContain: {
    maxWidth: '30%',
  },
  btnLogin: {
    padding: '9px 16px',
    fontSize: 18,
    marginTop: '3rem',
  },
  registerLinkContain: {
    fontSize: 14,
    color: '#9B9B9B',
    marginTop: '1rem!important',
    textAlign: 'center',
  },
  registerLink: {
    fontSize: 16,
    color: '#4A90E2',
  },
}));

export default styles;
