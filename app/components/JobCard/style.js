import { makeStyles } from '@material-ui/core';
import cardBox from 'mui/MCard/cardBox';

const styles = makeStyles(() => ({
  root: {
    marginTop: '5rem',
  },
  card: {
    ...cardBox().panel,
    display: 'flex',
    marginBottom: '1rem',
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
}));

export default styles;
