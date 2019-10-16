import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const MButton = withStyles(theme => ({
  root: {
    borderRadius: 50,
    color: 'white',
    boxShadow: 'none',
  },
  btnBlue: {
    padding: '6px 40px',
    background: '#3a69db',
    lineHeight: '32px',
    margin: 0,
  },
  iconic: {
    padding: '6px 20px',
    lineHeight: '32px',
    color: '#777',
    '& i:before': {
      fontSize: 18,
      margin: '0 8px',
    },
  },
  primary: {
    background: theme.palette.primary.main,
    lineHeight: '32px',
    padding: '6px 40px',
  },
}))(props => {
  const { btnBlue, iconic, primary, children, classes, className } = props;
  console.log(classes);
  const customs = classNames({
    [classes.iconic]: iconic,
    [classes.btnBlue]: btnBlue,
    [classes.primary]: primary,
    [className]: true,
  });

  return (
    <Button {...props} className={customs}>
      {children}
    </Button>
  );
});

export default MButton;
