import React from 'react';
import { withStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

const MTextField = withStyles(() => ({
  root: {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderRadius: 50,
      },
    },
    '& .MuiInputBase-multiline fieldset': {
      borderRadius: '30px!important',
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
