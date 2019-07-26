import { makeStyles } from '@material-ui/core';

const styles = makeStyles(theme => ({
  root: {
    marginTop: '5rem',
  },
  sectionHead: {
    fontWeight: 'bold',
    margin: '2rem 0',
  },
  blueLink: {
    ...theme.typography.h2,
    color: '#486AB9',
    float: 'right',
    fontWeight: 'bold',
  },
  card: {
    display: 'flex',
    boxShadow: '0 0 14px 0 rgba(178,178,178,0.5)',
    borderRadius: 8,
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
