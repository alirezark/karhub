import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { makeStyles, Typography } from '@material-ui/core';
import { MButton } from 'mui/index';

const SIZES = {
  MAIN_ICON_CONTAIN: [35, 40, 45],
  MAIN_ICON_SIZE: [18, 20, 28],
  HEAD_SIZE: [12, 14, 18],
  HEAD_LINE_HEIGHT: ['30px', '33px', '44px'],
};

const styles = makeStyles(theme => ({
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
    paddingRight: props =>
      // eslint-disable-next-line no-nested-ternary
      props.fullWidthContent ? '0' : SIZES.MAIN_ICON_CONTAIN[props.size],
    '& p': {
      marginTop: 5,
    },
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
  title: {
    flexGrow: 1,
    display: 'flex',
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
  const {
    editable,
    title,
    icon,
    children,
    size = 1,
    className,
    fullWidthContent = false,
  } = props;
  const classes = styles({ size, fullWidthContent });
  const rootClasses = classNames(classes.root, {
    [className]: className !== undefined,
  });

  return (
    <div className={rootClasses}>
      <div className={classes.titleRow}>
        <div className={classNames(classes.iconContain, 'icon-contain')}>
          <i className={icon} />
        </div>
        <div className={classNames(classes.title, 'title')}>
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
      </div>
      <div className={classNames(classes.content, 'content')}>
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
  size: PropTypes.number,
  fullWidthContent: PropTypes.bool,
  className: PropTypes.string,
};

export default PureWidget;
