import { makeStyles } from '@material-ui/core';
import { cvMakerFooter } from '../styles';

const styles = makeStyles(() => ({
  ...cvMakerFooter,
  root: {
    background: '#f9f9f9',
  },
  container: {
    background: '#fff',
    padding: '20px 32px 40px',
  },
  form: {
    width: '70%',
    margin: '40px auto',
    fontSize: 14,
    fontWeight: 400,
  },
  alignCenter: {
    alignItems: 'center',
  },
  avatarContain: {
    width: 97,
    height: 97,
    margin: '20px auto 70px',
    '& p': {
      marginTop: 10,
      fontSize: 14,
      textAlign: 'center',
    },
  },
}));

export default styles;
