import React from 'react';
import { makeStyles} from '@material-ui/core';

const styles = makeStyles(theme => ({
  root: {
    position: 'relative',
  },
  text: {
    '& fieldset': {
      borderColor: 'transparent',
      boxShadow: '0 0 10px 1px rgb(75, 187, 129, .5)',
      background: '#fff',
    },
    '& .MuiOutlinedInput-root': {
      fontSize: 14,
      fontWeight: 300,
      '&:hover fieldset': {
        borderColor: theme.palette.primary.main,
      },
    },
    '& .MuiOutlinedInput-input': {
      padding: '15px 160px 15px 14px',
    },
    '& input, & svg': {
      zIndex: 1,
    },
  },
  button: {
    position: 'absolute',
    width: 160,
    right: 1,
    top: 1,
    lineHeight: '33px',
  },
}));

export default styles;
