import React from 'react';
import { withStyles } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';

const MAvatar = withStyles(theme => ({
  root: {
    width: 114,
    height: 114,
    position: 'absolute',
    right: '50%',
    margin: '-57px',
    padding: 7,
    border: '1px solid',
    background: '#fff',
    borderColor: theme.palette.primary.main,
    '& img': {
      borderRadius: '100%',
    },
  },
}))(props => <Avatar {...props} />);

export default MAvatar;
