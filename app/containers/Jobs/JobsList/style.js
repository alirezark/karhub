import { makeStyles } from '@material-ui/core';

const styles = makeStyles(theme => ({
  root: {
    marginTop: '3rem',
  },
  head: {
    fontWeight: 900,
    marginBottom: '2rem',
  },
  headInfo: {
    ...theme.typography.h2,
    color: '#606062',
    float: 'right',
    fontWeight: 500,
    margin: 0,
  },
  // panel styles
  panel: {
    borderRadius: 8,
    backgroundColor: '#fff',
    boxShadow: '0 0 14px 0 rgba(148,148,148,0.3)',
    padding: '1.5rem 1rem',
  },
}));

export default styles;
