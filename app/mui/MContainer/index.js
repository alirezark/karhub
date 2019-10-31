import React from 'react';
import classNames from 'classnames';
import { withStyles, makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';

const styles = makeStyles(theme => ({
  smaller: {
    '&.MuiContainer-root': {
      [theme.breakpoints.up('lg')]: {
        maxWidth: '1000px',
      },
    },
  },
}));

const MContainer = withStyles(theme => ({
  root: {
    [theme.breakpoints.up('lg')]: {
      maxWidth: '1200px',
    },
  },
}))(props => {
  const classes = styles();
  const { smaller, className, ...rem } = props;
  const mClasses = classNames({
    [className]: className !== undefined,
    [classes.smaller]: smaller,
  });

  return <Container {...rem} className={mClasses} />;
});

export default MContainer;
