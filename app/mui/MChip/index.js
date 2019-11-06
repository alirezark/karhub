import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core';
import classNames from 'classnames';
import Chip from '@material-ui/core/Chip';

const styles = makeStyles(() => ({
  small: {
    border: 'none',
    height: 24,
  },
  orange: {
    backgroundColor: '#fff3e2!important',
    color: '#e4bd78!important',
  },
}));

const MChip = withStyles(() => ({
  root: {
    borderColor: '#7BCCC4',
    backgroundColor: '#EBF8F6',
    color: '#4F9B94',
    fontSize: 10,
    margin: '0 .25rem',
  },
}))(props => {
  const classes = styles();
  const { small, orange, className, ...rem } = props;
  const customClasses = classNames({
    [classes.small]: small,
    [classes.orange]: orange,
    [className]: className !== undefined,
  });

  return <Chip variant="outlined" className={customClasses} {...rem} />;
});

export default MChip;
