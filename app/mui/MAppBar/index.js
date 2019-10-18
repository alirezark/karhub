import React from 'react';
import { withStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';

const MAppBar = withStyles(() => ({
  root: {
    backgroundColor: '#fff',
    color: '#4A4A4A',
    boxShadow: '0 0 24px 0 rgba(197,197,197,0.5)',
    position: 'relative',
    zIndex: 1,
  },
}))(props => <AppBar {...props} />);

export default MAppBar;
