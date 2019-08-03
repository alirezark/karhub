import React from 'react';
import { withStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';

const MCard = withStyles(() => ({
  root: {},
}))(props => <Card {...props} />);

export default MCard;
