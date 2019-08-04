import { makeStyles } from '@material-ui/core';

const styles = makeStyles(theme => ({
  root: {
    marginTop: '3rem',
  },
  numContain: {
    fontSize: '2rem',
    fontWeight: 900,
    color: '#4A4A4A',
  },
  numText: {
    color: theme.palette.primary.main,
    fontSize: '4.5rem',
    verticalAlign: 'middle',
  },
  title: {
    fontWeight: 900,
    fontSize: '1.67rem',
    marginLeft: '1rem',
    marginBottom: '4rem',
  },
}));

export default styles;
