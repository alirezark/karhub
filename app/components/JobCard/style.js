import { makeStyles } from '@material-ui/core';
import cardBox from 'mui/MCard/cardBox';

const styles = makeStyles(theme => ({
  root: {
    marginTop: '5rem',
  },
  card: {
    ...cardBox().panel,
    display: 'flex',
    marginBottom: '1rem',
    position: 'relative',
    '&:hover': {
      boxShadow: '0 0 14px 0 rgba(75,187,129,0.5)',
      '& .delete-icon': {
        opacity: '.7',
      },
    },
  },
  details: {
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 1,
  },
  content: {
    flexGrow: 1,
    padding: '8px 0 16px',
  },
  cover: {
    width: 100,
    backgroundSize: 'auto',
  },
  title: {
    padding: '16px 0',
    color: '#4A4A4A',
  },
  icons: {
    color: '#9B9B9B',
    fontSize: '.75rem',
    marginTop: '.5rem',
    maxWidth: 300,
    '& i': {
      margin: '0 .5rem',
    },
  },
  arrow: {
    flexBasis: '2rem',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
  },
  deleteIcon: {
    position: 'absolute',
    top: 5,
    left: 5,
    opacity: '0',
    cursor: 'pointer',
    transition: '200ms',
    '& i:before': {
      fontSize: 14,
      color: '#9B9B9B',
    },
    '&:hover': {
      opacity: '1!important',
    },
  },
  sentDetail: {
    color: '#9B9B9B',
    fontSize: '.75rem',
    display: 'flex',
    padding: '1.6rem',
    alignItems: 'flex-end',
    flexDirection: 'column',
    '& p': {
      color: theme.palette.primary.main,
      fontSize: 'inherit',
      display: 'flex',
      flexGrow: 1,
      alignItems: 'flex-end',
    },
  },
}));

export default styles;
