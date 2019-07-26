import React from 'react';
import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const MButton = withStyles(theme => ({
  root: {
    borderRadius: 50,
    color: 'white',
    boxShadow: 'none',
  },
}))(props => <Button {...props} />);

export default MButton;
