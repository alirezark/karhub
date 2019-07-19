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
  },
}))(props => <TextField variant="outlined" fullWidth {...props} />);

export default MTextField;
