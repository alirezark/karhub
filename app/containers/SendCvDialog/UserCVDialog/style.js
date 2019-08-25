import { makeStyles } from '@material-ui/core';

const styles = makeStyles(() => ({
  jobCard: {
    margin: '2rem 0',
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
  cvPreview: {
    boxShadow: '0 0 14px 0 rgba(178,178,178,0.5)',
    borderRadius: 8,
    padding: 13,
  },
  panelHead: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#979797',
    marginBottom: '1rem',
    lineHeight: '2.5rem',
  },
  txtSelectCV: {
    fontSize: 14,
    color: '#4A4A4A',
    margin: '1rem 0',
  },
  btnEditCV: {
    float: 'right',
    color: '#6682C3',
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
