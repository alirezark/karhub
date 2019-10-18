import { makeStyles } from '@material-ui/core';

const styles = makeStyles((theme) => ({
  headContain: {
    margin: '30px 0 90px',
    '& h2': {
      color: theme.palette.primary.main,
      fontWeight: 900,
      fontSize: '1.5rem',
      margin: '20px 0 25px',
    },
  },
  colorGreen: {
    color: theme.palette.primary.main,
  },
  colorYellow: {
    color: '#eb9e10',
  },
  creditCard: {
    textAlign: 'center',
    padding: '30px 42px 40px',
    borderRadius: 8,
    boxShadow: '0 0 8px 1px rgba(0,0,0,.3)',
    position: 'relative',
    overflow: 'hidden',
    transition: '150ms',
    '& p': {
      fontSize: 14,
      color: '#828282',
      marginTop: 5,
    },
    '&:after': {
      content: "''",
      position: 'absolute',
      width: '300%',
      height: '300%',
      borderRadius: '100%',
      top: '91%',
      left: '-100%',
      background: '#fff0db',
    },
    '&.creditYello:after': {
      background: '#fff0db',
    },
    '&.creditGreen:after': {
      background: '#daf2e5',
    },
    '&.creditPurple:after': {
      background: '#dcd9f4',
    },
    '&:hover': {
      boxShadow: '0 0 15px 2px rgb(75, 187, 129, .5)',
    },
  },
  head2: {
    fontWeight: 900,
    textAlign: 'center',
    margin: '90px 0 45px',
  },
  creditHead: {
    color: '#606062',
    marginBottom: 20,
    fontWeight: 900,
  },
  creditValue: {
    color: theme.palette.primary.main,
    fontWeight: 900,
    margin: '30px 0 25px',
  },
  embeddedHead: {
    display: 'flex',
    alignItems: 'center',
    margin: '90px 0 40px',
    '& div:first-child': {
      flexGrow: 1,
    },
    '& h1': {
      fontWeight: 800,
    },
  },
}));

export default styles;
