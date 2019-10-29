import { makeStyles } from '@material-ui/core';

const styles = makeStyles(() => ({
  root: {
    position: 'relative',
  },
  cover1: {
    position: 'absolute',
    right: '-80px',
    top: 30,
  },
  cover2: {
    position: 'absolute',
    left: '-150px',
    top: '-100px',
    width: 350,
  },
}));

export default styles;
