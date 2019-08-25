import { makeStyles } from '@material-ui/core';

const styles = makeStyles(() => ({
  jobCard: {
    margin: '2rem 0',
  },
  divider: {
    margin: '2rem 0',
    borderTop: '1px solid #979797',
    opacity: '.5',
  },
  iconInfo: {
    display: 'flex',
    alignItems: 'center',
    '& p': {
      fontSize: 14,
      color: '#9B9B9B',
      textAlign: 'justify',
    },
  },
  iconContain: {
    width: 80,
    flex: 'none',
    paddingRight: 15,
    '& img': {
      maxWidth: '100%',
    },
  },
  btnContain: {
    flex: 'none',
    width: 200,
    paddingLeft: 20,
  },
  btnBlue: {
    float: 'right',
    backgroundColor: '#6682C3',
    width: 180,
    height: 48,
  },
  btnSubmit: {
    padding: '9px 16px',
    fontSize: 18,
    fontWeight: 300,
  },
  submitBtnContain: {
    maxWidth: '30%',
    margin: '5rem auto 0',
    textAlign: 'center',
  },
  loginLinkContain: {
    fontSize: 14,
    color: '#9B9B9B',
    marginTop: '5px!important',
    textAlign: 'center',
  },
  loginLink: {
    fontSize: 16,
    color: '#4A90E2',
  },
  subscribe: {
    fontSize: 10,
    color: '#9B9B9B',
    marginTop: '.8rem',
    display: 'block',
    '& input': {
      marginRight: 5,
    },
  },
}));

export default styles;
