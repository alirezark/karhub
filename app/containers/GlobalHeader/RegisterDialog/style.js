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
    borderTop: '2px dashed #ccc',
    margin: '2rem 0',
    textAlign: 'center',
    '& h2': {
      display: 'block',
      margin: '-10px auto 0',
      background: '#fff',
      width: 37,
      fontWeight: 800,
    },
  },
  forgotLink: {
    fontSize: 14,
    color: '#9B9B9B',
    float: 'right',
    marginTop: '-12px',
  },
  registerBtnContain: {
    maxWidth: '25%',
    margin: '0 auto',
  },
  btnLogin: {
    padding: '9px 16px',
    fontSize: 18,
    marginTop: '3rem',
  },
  registerLinkContain: {
    fontSize: 14,
    color: '#9B9B9B',
    marginTop: '5px!important',
    textAlign: 'center',
  },
  registerLink: {
    fontSize: 16,
    color: '#4A90E2',
  },
  registerInfo: {
    maxWidth: '90%',
    margin: '2rem auto 0',
    '& p': {
      fontSize: 12,
      color: '#9B9B9B',
      textAlign: 'justify',
      margin: '5px 12px 0 25px',
      paddingRight: '16px',
      borderRight: '1px solid #979797',
    },
  },
  infoLast: {
    border: 'none!important',
  },
  infoIconContain: {
    float: 'left',
    color: '#359B3C',
  },
}));

export default styles;
