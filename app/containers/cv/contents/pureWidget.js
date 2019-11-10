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
    '& h3': {
      color: theme.palette.primary.main,
      fontSize: 14,
    },
    '& p': {
      fontSize: 14,
      marginTop: 5,
      lineHeight: '24px',
    },
  },
  titleRow: {
    display: 'flex',
    alignItems: 'center',
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
  contentContainer: {
    marginTop: 5,
  },
}));

function PureWidget(props) {
  const classes = styles();
  const { editable, title, icon, children } = props;

  return (
    <div className={classes.root}>
      <div className={classes.iconContain}>
        <i className={icon} />
      </div>
      <div className={classes.content}>
        <div className={classes.titleRow}>
          <div>
            <Typography variant="h3">{title}:</Typography>
          </div>
          <div>
            {editable && (
              <MButton className={classes.btnEdit}>
                <i className="flaticon-draw" /> ویرایش
              </MButton>
            )}
          </div>
        </div>
        <div className={classes.contentContainer}>{children}</div>
      </div>
    </div>
  );
}

PureWidget.propTypes = {
  editable: PropTypes.bool,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  children: PropTypes.any,
};

export default PureWidget;
