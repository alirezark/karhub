import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core';

const styles = makeStyles(theme => ({
  root: {
    marginRight: '2rem',
    fontWeight: 500,
    fontSize: 12,
    color: '#606062',
    '& i': {
      marginRight: '.5rem',
    },
    '&:last-child': {
      margin: 0,
    },
  },
}));

function MIconinfo(props) {
  const classes = styles();
  const { icon, text, className } = props;

  return (
    <span className={classNames(classes.root, className)}>
      <i className={icon} />
      {text}
    </span>
  );
}

MIconinfo.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default MIconinfo;
