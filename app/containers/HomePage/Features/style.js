import { makeStyles } from '@material-ui/core';

const styles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  featBox: {
    textAlign: 'center',
    padding: theme.spacing(5),
    '& h2': {
      fontWeight: 'bold',
      marginTop: 10,
      marginBottom: 5,
    },
    '& p': {
      fontSize: '.65rem',
      marginTop: '1rem',
      color: '#606062',
    },
  },
}));

export default styles;
