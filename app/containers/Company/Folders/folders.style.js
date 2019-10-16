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
    fontWeight: 500,
    color: '#4990e2',
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
}));

export default styles;
