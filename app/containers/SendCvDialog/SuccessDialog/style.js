import { makeStyles } from '@material-ui/core';
import imgSuccess from 'app/assets/images/Oval_success.png';

const styles = makeStyles((theme) => ({
  messageContain: {
    textAlign: 'center',
    color: '#4A4A4A',
    paddingTop: '3rem',
    marginTop: '1rem',
    background: `url("${imgSuccess}") no-repeat 33% top`,
  },
  messageLink: {
    color: '#4A90E2',
    fontWeight: 'bold',
    margin: '1rem 0 3rem',
  },
  messageIcon: {
    color: '#25AE88',
    width: 26,
    height: 26,
    marginLeft: '-26px',
  },
}));

export default styles;
