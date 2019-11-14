import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { makeStyles, Typography } from '@material-ui/core';

const styles = makeStyles(() => ({
  thumbnail: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    border: '1px solid transparent',
    transition: '100ms',
    cursor: 'pointer',
    borderRadius: 4,
    paddingBottom: 10,
    marginBottom: 20,
    '&>div:first-child': {
      flexBasis: 120,
    },
    '&:hover': {
      borderColor: '#ddd',
      background: '#fafafa',
    },
  },
  thumbnailIcon: {
    width: 70,
    height: 70,
    margin: '25px auto',
    borderRadius: 35,
    position: 'relative',
    '& i:before': {
      fontSize: 55,
      position: 'absolute',
      left: -10,
      top: 12,
    },
    '&.color-1': {
      background: '#ddf1f0',
      color: '#4f9a93',
      '& i:before': {
        fontSize: 48,
        top: 15,
        left: -6,
      },
    },
    '&.color-2': {
      background: '#fdecd0',
      color: '#fcba4c',
    },
    '&.color-3': {
      background: '#d1edde',
      color: '#4aba80',
    },
    '&.color-4': {
      background: '#ccd7f5',
      color: '#4f4fd3',
    },
  },
  thumbnailTitle: {
    whiteSpace: 'nowrap',
    '& h3': {
      fontSize: 16,
      fontWeight: 400,
    },
    '& i:before': {
      margin: '0 5px',
      fontSize: 16,
    },
  },
}));

function MThumbLink(props) {
  const classes = styles();
  const { colorId, icon, title } = props;
  return (
    <div className={classes.thumbnail}>
      <div>
        <div className={classNames(`color-${colorId}`, classes.thumbnailIcon)}>
          <i className={icon} />
        </div>
      </div>
      <div className={classes.thumbnailTitle}>
        <Typography variant="h3">
          {title}
          <i className="flaticon-left-arrow-2" />
        </Typography>
      </div>
    </div>
  );
}

MThumbLink.propTypes = {
  colorId: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default MThumbLink;
