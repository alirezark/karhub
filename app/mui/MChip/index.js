import React from 'react';
import { withStyles } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';

const MChip = withStyles(theme => ({
  root: {
    borderColor: '#7BCCC4',
    backgroundColor: '#EBF8F6',
    color: '#4F9B94',
    fontSize: 10,
    margin: '0 .25rem',
  },
}))(props => <Chip variant="outlined" {...props} />);

export default MChip;
