import React from 'react';
import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const MButton = withStyles(theme => ({
  root: {},
}))(props => <Button {...props} />);

export default MButton;
