import React from 'react';
import classNames from 'classnames';
import { withStyles, makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const styles = makeStyles(theme => ({
  btnBlue: {
    padding: '6px 40px',
    background: '#3a69db',
    lineHeight: '32px',
    margin: 0,
  },
  iconic: {
    '&.MuiButton-root': {
      padding: '6px 20px',
      lineHeight: '32px',
      color: '#777',
      '& i:before': {
        fontSize: 18,
        margin: '0 8px',
      },
    },
  },
  primary: {
    background: theme.palette.primary.main,
    lineHeight: '32px',
    padding: '6px 40px',
  },
  danger: {
    background: '#d95151',
    lineHeight: '32px',
    padding: '6px 40px',
  },
  default: {
    background: '#c8c8c8',
    lineHeight: '32px',
    padding: '6px 40px',
  },
  btnCyan: {
    background: '#d7f0ed',
    color: '#4a4a4a!important',
  }
}));

const MButton = withStyles(() => ({
  root: {
    borderRadius: 50,
    color: 'white',
    boxShadow: 'none',
  },
}))(props => {
  const {
    btnBlue,
    iconic,
    primary,
    danger,
    btnDefault,
    btnCyan,
    children,
    className,
    ...res
  } = props;
  const customClasses = styles();
  const customs = classNames({
    [customClasses.iconic]: iconic,
    [customClasses.btnBlue]: btnBlue,
    [customClasses.primary]: primary,
    [customClasses.danger]: danger,
    [customClasses.default]: btnDefault,
    [customClasses.btnCyan]: btnCyan,
    [className]: true,
  });

  return (
    <Button {...res} className={customs}>
      {children}
    </Button>
  );
});

export default MButton;
