import { makeStyles } from '@material-ui/core';

const styles = makeStyles(() => ({
  root: {
    fontWeight: 300,
  },
  head: {
    fontWeight: 800,
    marginBottom: 30,
  },
  colorBlue: {
    maxWidth: 140,
  },
  headMenu: {
    display: 'flex',
    alignItems: 'center',
    margin: '60px 0 20px',
    '& div:first-child': {
      flexGrow: 1,
    },
  },
  freeSpace: {
    padding: 20,
  },
  btnDelete: {
    margin: '0 10px',
  },
  btnView: {
    color: '#4990e2',
    textDecoration: 'none',
    fontWeight: 500,
  },
  btnShowMore: {
    background: '#7bccc5',
    position: 'absolute',
    left: '50%',
    marginLeft: '-90px',
    lineHeight: '32px',
    bottom: -22,
    width: 180,
  },
}));

export default styles;
