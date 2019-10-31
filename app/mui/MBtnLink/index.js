import React from 'react';
import { withStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import MButton from '../MButton';

const MBtnLink = withStyles(() => ({}))(props => {
  const { children, ...rem } = props;
  return (
    <MButton {...rem} component={Link}>
      {children}
    </MButton>
  );
});

export default MBtnLink;
