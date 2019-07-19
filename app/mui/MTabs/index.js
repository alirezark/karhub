import React from 'react';
import { withStyles } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export const MTabs = withStyles({
  root: {
    paddingLeft: '2em',
  },
  indicator: {
    height: 6,
    backgroundColor: '#4BBB81',
  },
})(Tabs);

export const MTab = withStyles(theme => ({
  root: {
    [theme.breakpoints.up('md')]: {
      minWidth: 92,
    },
    lineHeight: '4em',
    fontSize: '1.12rem',
  },
}))(props => <Tab disableRipple {...props} />);
