import { makeStyles } from '@material-ui/core';

const styles = makeStyles(theme => ({
  root: {
    backgroundColor: '#606062',
    color: '#fff',
    padding: '2.7rem',
    marginTop: '4rem',
  },
  title: {
    fontWeight: 900,
    color: '#fff',
    marginBottom: '1rem',
  },
  subtitle: {
    color: '#949494',
  },
  btn: {
    lineHeight: '38px',
    marginTop: 3,
  },
  inputField: {
    '& fieldset': {
      background: '#fff'
    }
  }
}));

export default styles;
