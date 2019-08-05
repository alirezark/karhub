import { makeStyles } from '@material-ui/core';

const styles = makeStyles(() => ({
  root: {
    backgroundColor: '#606062',
    color: '#fff',
    paddingTop: '2.7rem',
    marginTop: '4rem',
  },
  title: {
    fontWeight: 900,
    color: '#fff',
    marginBottom: '1rem',
  },
  subtitle: {
    color: '#949494',
    textAlign: 'justify',
    marginBottom: '2.7rem',
  },
  btn: {
    lineHeight: '38px',
    marginTop: 3,
  },
  inputField: {
    '& fieldset': {
      background: '#fff',
    },
  },
  separator: {
    marginBottom: '1.6rem',
    borderTop: '1px solid #979797',
  },
  head2: {
    fontSize: '18px',
    fontWeight: 800,
    color: '#fff',
    textAlign: 'center',
  },
  linksContainer: {
    width: 170,
    margin: '1rem auto',
  },
  links: {
    listStyle: 'none',
    '& a': {
      color: '#fff',
      textDecoration: 'none',
      fontSize: 14,
      fontWeight: 500,
      lineHeight: '35px',
    },
  },
  subtitle2: {
    color: '#fff',
    fontSize: 12,
    margin: '1rem 0 .7rem',
    lineHeight: '21px',
    fontWeight: 'bold',
  },
  contactInfo: {
    fontSize: 14,
    margin: '.8rem 0',
    fontWieight: 500,
  },
  corporate: {
    backgroundColor: '#4E4E4E',
    marginTop: '2rem',
    textAlign: 'center',
    lineHeight: '25px',
    padding: 23,
    fontSize: 14,
    fontWeight: 300,
  },
}));

export default styles;
