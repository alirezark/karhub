import { makeStyles } from '@material-ui/core';

const style = makeStyles(() => ({
  root: {
    background: '#606062',
    position: 'relative',
    zIndex: 2,
  },
  tabs: {
    '& .MuiTab-root': {
      lineHeight: '3rem',
      color: '#fff',
      fontWeight: '300',
      opacity: 1,
      '&.Mui-selected': {
        fontWeight: 'bold',
      },
    },
  },
}));

export default style;
