import { makeStyles } from '@material-ui/core';

const styles = makeStyles(() => ({
  root: {
    position: 'relative',
  },
  cover1: {
    position: 'absolute',
    right: '-60px',
    top: 100,
  },
  cover2: {
    position: 'absolute',
    left: '-150px',
    top: '-100px',
    width: 350,
  },
  head: {
    margin: '100px 40px 0',
    width: '60%',
    position: 'relative',
    '& h1': {
      fontWeight: 900,
      fontSize: '2.6rem',
      marginBottom: 20,
      color: '#6b6b6d',
    },
    '& p': {
      fontSize: 14,
      color: '#6b6b6d',
      lineHeight: '26px',
    },
  },
  cardsContain: {
    marginTop: 30,
  },
  btnMoreContain: {
    textAlign: 'center',
    margin: '40px 0 30px',
  },
  advertiseCard: {
    height: 130,
    background: '#c3e7e3',
    borderRadius: 10,
  },
}));

export default styles;
