import { makeStyles } from '@material-ui/core';

const styles = makeStyles(() => ({
  root: {
    fontWeight: 300,
  },
  head: {
    fontWeight: 800,
    margin: '40px 0 30px',
  },
  colorBlue: {
    maxWidth: 140,
  },
  headMenu: {
    display: 'flex',
    alignItems: 'center',
    '& div:first-child': {
      flexGrow: 1,
    },
  },
  btnDelete: {
    margin: '0 10px',
  },
  btnView: {
    color: '#4990e2',
    textDecoration: 'none',
    fontWeight: 500,
  },
}));

export default styles;
