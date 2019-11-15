import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Typography } from '@material-ui/core';
import { MButton } from 'mui/index';

const SIZES = {
  MAIN_ICON_CONTAIN: [40, 40, 45],
  MAIN_ICON_SIZE: [20, 20, 28],
  HEAD_SIZE: [14, 14, 18],
  HEAD_LINE_HEIGHT: ['30px', '33px', '44px'],
  CONTENT_HEAD_SIZE: [12, 14, 16],
  CONTENT_P_SIZE: [12, 14, 14],
  SMALL_GREEN_FONT_SIZE: [10, 12, 12],
  SMALL_FONT_SIZE: [10, 12, 12],
  TEXT_DESCRIBE_WIDTH: [150, 150, 180],
  TEXT_DESCRIBE_HEAD_FONT: [12, 12, 14],
  TEXT_DESCRIBE_CONTENT_FONT: [10, 10, 12],
};

const styles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  iconContain: {
    flexBasis: props => SIZES.MAIN_ICON_CONTAIN[props.size],
    flexShrink: 0,
    flexGrow: 0,
    paddingTop: 5,
    '& i:before': {
      fontSize: props => SIZES.MAIN_ICON_SIZE[props.size],
    },
  },
  content: {
    flexGrow: 1,
  },
  titleRow: {
    display: 'flex',
    alignItems: 'center',
    '& h3': {
      color: theme.palette.primary.main,
      fontSize: props => SIZES.HEAD_SIZE[props.size],
      lineHeight: props => SIZES.HEAD_LINE_HEIGHT[props.size],
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
    paddingBottom: 10,
    '& h3': {
      fontSize: props => SIZES.CONTENT_HEAD_SIZE[props.size],
      margin: '15px 0 10px',
    },
    '& p': {
      fontSize: props => SIZES.CONTENT_P_SIZE[props.size],
      lineHeight: '24px',
    },
    '&:before': {
      content: '" "',
      position: 'absolute',
      left: -28,
      bottom: -6,
      top: 4,
      borderLeft: '1px solid #97c0ba',
    },
    '&:after': {
      content: '" "',
      position: 'absolute',
      top: 23,
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
    marginBottom: 5,
    color: theme.palette.primary.main,
    fontSize: props => SIZES.SMALL_GREEN_FONT_SIZE[props.size],
  },
  smallGreen2: {
    color: theme.palette.primary.main,
    marginBottom: 5,
    fontSize: 10,
  },
  small: {
    fontSize: props => SIZES.SMALL_FONT_SIZE[props.size],
    fontWeight: 300,
    color: '#888',
  },
  smallLeft: {
    fontSize: 10,
    fontWeight: 500,
    color: '#888',
  },
  smallBold: {
    fontSize: 12,
    color: '#444',
    fontWeight: 500,
  },
  textDescribe: {
    display: 'flex',
    padding: '10px 0 5px',
    '& div:first-child': {
      flexBasis: props => SIZES.TEXT_DESCRIBE_WIDTH[props.size],
      flexShrink: 0,
      flexGrow: 0,
    },
    '& div:last-child': {
      flexGrow: 1,
      padding: '0 10px',
      color: theme.palette.primary.main,
      fontSize: props => SIZES.TEXT_DESCRIBE_CONTENT_FONT[props.size],
    },
    '& div': {
      fontSize: props => SIZES.TEXT_DESCRIBE_HEAD_FONT[props.size],
      fontWeight: 400,
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
    },
  },
  flexRow: {
    display: 'flex',
    alignItems: 'center',
    '&>div:first-child': {
      flexGrow: 1,
    },
  },
}));

function LinearListCV(props) {
  const { editable, icon, cv, leftDescribe = false, size = 1 } = props;
  const classes = styles({ size });

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
          <div key={index} className={classes.contentItem}>
            {item.title && (
              <div className={classes.flexRow}>
                <div>
                  <Typography variant="h3">{item.title}</Typography>
                </div>
                <div>
                  {leftDescribe && (
                    <div className={classes.smallLeft}>{item.txtSmallBold}</div>
                  )}
                </div>
              </div>
            )}
            {item.txtGreen && (
              <div className={classes.flexRow}>
                <div className={classes.smallGreen}>{item.txtGreen}</div>
                {leftDescribe && (
                  <div className={classes.smallGreen2}>{item.txtGreen2}</div>
                )}
              </div>
            )}
            {item.txtSmall && (
              <div className={classes.small}>{item.txtSmall}</div>
            )}
            {item.txtSmallBold && !leftDescribe && (
              <div className={classes.smallBold}>{item.txtSmallBold}</div>
            )}
            {item.description && <Typography>{item.description}</Typography>}
            {item.textDescribe && (
              <div className={classes.textDescribe}>
                <div>{item.textDescribe.text}</div>
                <div>{item.textDescribe.describe}</div>
              </div>
            )}
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
  leftDescribe: PropTypes.bool,
  size: PropTypes.number,
};

export default LinearListCV;
