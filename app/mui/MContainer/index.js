import React from 'react';
import { withStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';

const MContainer = withStyles(theme => ({
  root: {
    [theme.breakpoints.up('lg')]: {
      maxWidth: '1200px',
    },
  },
}))(props => <Container {...props} />);

export default MContainer;
