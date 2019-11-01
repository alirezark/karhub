import { makeStyles } from '@material-ui/core';
import { cvMakerFooter } from '../styles';

const styles = makeStyles(() => ({
  ...cvMakerFooter,
  root: {
    background: '#f9f9f9',
  },
  container: {
    background: '#fff',
    padding: '80px 32px 40px',
  },
  panel: {
    padding: '50px 60px',
    background: '#fbfbfb',
    marginTop: 40,
    height: 300,
    marginBottom: 100,
    boxShadow: '0 0 14px 0 rgba(178,178,178,0.5)',
  },
  cvTemplate: {
    overflow: 'hidden',
    cursor: 'pointer',
    position: 'relative',
    background: '#333',
    boxShadow: '0 0 14px 0 rgba(178,178,178,0.5)',
    '& img': {
      width: '100%',
      transition: '100ms',
    },
    '&:hover img': {
      opacity: '.8',
    },
    '&:hover div': {
      bottom: 0,
    },
  },
  btnSelect: {
    position: 'absolute',
    bottom: '-80px',
    left: 0,
    width: '100%',
    color: 'white',
    background: 'rgba(75, 187, 129, .7)',
    lineHeight: '40px',
    textAlign: 'center',
    transition: '100ms',
  },
}));

export default styles;
