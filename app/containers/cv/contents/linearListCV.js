import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Typography } from '@material-ui/core';
import { MButton } from 'mui/index';

const styles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  iconContain: {
    flexBasis: 40,
    flexShrink: 0,
    flexGrow: 0,
    paddingTop: 5,
  },
  content: {
    flexGrow: 1,
  },
  titleRow: {
    display: 'flex',
    alignItems: 'center',
    '& h3': {
      color: theme.palette.primary.main,
      fontSize: 14,
    },
  },
  btnEdit: {
    fontSize: 12,
    color: '#aaa',
    marginLeft: 10,
    '& i:before': {
      fontSize: 14,
      marginRight: 5,
    },
  },
  contentItem: {
    lineHeight: '24px',
    position: 'relative',
    '& h3': {
      fontSize: 14,
      margin: '15px 0 10px',
    },
    '& p': {
      fontSize: 14,
      marginTop: 5,
      lineHeight: '24px',
    },
    '&:before': {
      content: '" "',
      position: 'absolute',
      left: -28,
      bottom: -6,
      top: -10,
      borderLeft: '1px solid #97c0ba',
    },
    '&:after': {
      content: '" "',
      position: 'absolute',
      top: 9,
      left: -28,
      width: 20,
      borderTop: '1px solid #97c0ba',
    },
    '&:last-child:before': {
      bottom: 'auto',
      height: 20,
    },
  },
  smallGreen: {
    margin: '5px 0',
    color: theme.palette.primary.main,
    fontSize: 12,
  },
  small: {
    fontSize: 12,
    color: '#888',
  },
  smallBold: {
    fontSize: 12,
    color: '#888',
    fontWeight: 800,
  },
}));

function LinearListCV(props) {
  const classes = styles();
  const { editable, icon, cv } = props;

  return (
    <div className={classes.root}>
      <div className={classes.iconContain}>
        <i className={icon} />
      </div>
      <div className={classes.content}>
        <div className={classes.titleRow}>
          <div>
            <Typography variant="h3">{cv.title}:</Typography>
          </div>
          <div>
            {editable && (
              <MButton className={classes.btnEdit}>
                <i className="flaticon-draw" /> ویرایش
              </MButton>
            )}
          </div>
        </div>
        {cv.list.map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={index} className={classes.contentItem}>
            <Typography variant="h3">{item.title}</Typography>
            {item.txtGreen && (
              <div className={classes.smallGreen}>{item.txtGreen}</div>
            )}
            {item.txtSmall && (
              <div className={classes.small}>{item.txtSmall}</div>
            )}
            {item.txtSmallBold && (
              <div className={classes.smallBold}>{item.txtSmallBold}</div>
            )}
            {item.description && <Typography>{item.description}</Typography>}
          </div>
        ))}
      </div>
    </div>
  );
}

LinearListCV.propTypes = {
  editable: PropTypes.bool,
  icon: PropTypes.string.isRequired,
  cv: PropTypes.object.isRequired,
};

export default LinearListCV;
