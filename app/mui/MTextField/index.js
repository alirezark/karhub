import React from 'react';
import { withStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

const MTextField = withStyles(theme => ({
  root: {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderRadius: 50,
      },
    },
    '&.outlined-strong fieldset': {
      borderWidth: 2,
      borderColor: '#8E8E8C',
    },
    '& svg': {
      color: '#8E8E8C',
    },
  },
}))(props => <TextField variant="outlined" {...props} />);

export default MTextField;
