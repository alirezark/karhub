import { makeStyles } from '@material-ui/core';

const styles = makeStyles(() => ({
  greyContainer: {
    backgroundColor: '#F9F9F9',
    padding: '5px 0',
  },
  root: {
    marginTop: '1rem',
  },
  tab: {
    lineHeight: '3.7rem',
    position: 'relative',
    background: '#fff',
    borderRadius: 8,
    boxShadow: '0 0 14px 0 rgba(178,178,178,0.5)',
    textAlign: 'center',
    cursor: 'pointer',
    fontSize: '.9rem',
    transition: '100ms',
    marginBottom: '1rem',
    '&:hover': {
      boxShadow: '0 0 14px 0 rgba(75,187,129,0.5)',
    },
    '& img': {
      height: 35,
      marginRight: 9,
    },
    '&.selected': {
      boxShadow: '0 0 14px 0 rgba(178,178,178,0.5)!important',
      '&::after': {
        content: '""',
        position: 'absolute',
        width: 0,
        height: 0,
        marginLeft: '-14px',
        left: '50%',
        bottom: '-2px',
        boxSizing: 'border-box',

        border: '10px solid black',
        borderColor: 'transparent transparent #fff #fff',

        transformOrigin: '0 0',
        transform: 'rotate(-45deg)',

        boxShadow: '-4px 4px 4px 0 rgba(178,178,178,0.2)',
      },
    },
  },
}));

export default styles;
