import { makeStyles } from '@material-ui/core';
import { cvMakerFooter, form } from '../styles';

const styles = makeStyles(() => ({
  ...cvMakerFooter,
  ...form,
  root: {
    background: '#f9f9f9',
  },
  container: {
    background: '#fff',
    padding: '20px 32px 40px',
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
