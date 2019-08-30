import { makeStyles } from '@material-ui/core';

const styles = makeStyles(theme => ({
  root: {
    color: '#9B9B9B',
  },
  head: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#979797',
    marginBottom: '1rem',
    lineHeight: '2.5rem',
  },
  btnEditCV: {
    float: 'right',
    color: '#6682C3',
  },
  iconDetail: {
    fontSize: 12,
    marginTop: '.8rem',
    lineHeight: '16px',
    '& i': {
      display: 'inline-block',
      verticalAlign: 'middle',
      color: theme.palette.primary.main,
      marginRight: 10,
      '&:before': {
        fontSize: 16,
      },
    },
  },
  divider: {
    margin: '1rem 0',
    borderTop: '2px solid #ccc',
    width: '100%',
  },
  bottomDetail: {
    fontSize: 12,
    '& h3': {
      fontSize: 14,
      color: '#2A2A2A',
      marginBottom: 10,
    },
    '& span': {
      fontSize: 14,
      marginRight: 10,
    },
  },
  bottomDetailRight: {
    display: 'inline-block',
    float: 'right',
  },
}));

export default styles;
