import React from 'react';
import { withStyles, Card } from '@material-ui/core';

const MCard = withStyles(() => ({
  root: {},
}))(props => <Card {...props} />);

export default MCard;
