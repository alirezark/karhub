import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Typography } from '@material-ui/core';
import { MButton } from 'mui/index';

const styles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  iconContain: {
    flexBasis: props => (props.larger ? 45 : 40),
    flexShrink: 0,
    flexGrow: 0,
    paddingTop: 5,
    '& i:before': {
      fontSize: props => (props.larger ? 28 : 20),
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
      fontSize: props => (props.larger ? 18 : 14),
      lineHeight: props => (props.larger ? '44px' : '33px'),
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
      fontSize: props => (props.larger ? 16 : 14),
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
    fontWeight: 300,
    color: '#888',
  },
  smallBold: {
    fontSize: 12,
    color: '#444',
    fontWeight: 500,
  },
  textDescribe: {
    display: 'flex',
    margin: '15px 0 5px',
    '& div:first-child': {
      flexBasis: props => (props.larger ? 180 : 150),
      flexShrink: 0,
      flexGrow: 0,
    },
    '& div:last-child': {
      flexGrow: 1,
      padding: '0 10px',
      color: theme.palette.primary.main,
      fontSize: props => (props.larger ? 12 : 10),
    },
    '& div': {
      fontSize: props => (props.larger ? 14 : 12),
      fontWeight: 400,
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
    },
  },
}));

function LinearListCV(props) {
  const { editable, icon, cv, larger } = props;
  const classes = styles({ larger });

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
            {item.title && <Typography variant="h3">{item.title}</Typography>}
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
  larger: PropTypes.bool,
};

export default LinearListCV;
