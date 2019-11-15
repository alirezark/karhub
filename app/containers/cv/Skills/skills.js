import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { makeStyles, Grid } from '@material-ui/core';
import PureWidget from '../contents/pureWidget';

const SIZES = {
  PROGRESS_HEAD_SIZE: [12, 12, 14],
  PROGRESS_ABSOLUTE_HEAD_TOP: [-6, -6, -8],
  PROGRESS_HEIGHT: [4, 4, 6],
  PROGRESS_PERCENT_SIZE: [10, 10, 12],
  PROGRESS_PERCENT_TOP: [-15, -15, -18],
};

const styles = makeStyles(() => ({
  root: {
    marginTop: 0,
    marginBottom: 0,
  },
  progressContain: {
    display: props => (props.progressFullWidth ? 'block' : 'flex'),
    alignItems: 'center',
    whiteSpace: 'nowrap',
    padding: '10px 32px!important',
    '&>div:first-child': {
      flexGrow: 1,
      direction: 'rtl',
    },
    '&>div:last-child': {
      flexBasis: 100,
      width: 100,
      flexShrink: 0,
      flexGrow: 0,
      textAlign: 'right',
      fontSize: props => SIZES.PROGRESS_HEAD_SIZE[props.size],
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      direction: 'rtl',
    },
  },
  fullWidthProgressContain: {
    position: 'relative',
    marginBottom: 10,
    '&>div:last-child': {
      position: 'absolute',
      fontSize: props => SIZES.PROGRESS_HEAD_SIZE[props.size],
      top: props => SIZES.PROGRESS_ABSOLUTE_HEAD_TOP[props.size],
      right: 32,
    },
  },
  progress: {
    position: 'relative',
    height: props => SIZES.PROGRESS_HEIGHT[props.size],
    width: '100%',
    borderRadius: 4,
    background:
      'linear-gradient(90deg, rgb(126,203,197) 0%, rgb(77,186,128) 100%)',
    '& span': {
      position: 'absolute',
      left: 1,
      fontSize: props => SIZES.PROGRESS_PERCENT_SIZE[props.size],
      top: props => SIZES.PROGRESS_PERCENT_TOP[props.size],
    },
  },
}));

function Skills(props) {
  const { editable, size = 1, col = 3, progressFullWidth = false } = props;
  const classes = styles({ size, progressFullWidth });
  const gridMD = 12 / col;

  const containerClass = classNames(classes.progressContain, {
    [classes.fullWidthProgressContain]: progressFullWidth,
  });

  return (
    <PureWidget
      title="مهارت ها"
      icon="flaticon-lamp"
      editable={editable}
      size={size}
    >
      <Grid container spacing={8} className={classes.root}>
        <Grid item md={gridMD} className={containerClass}>
          <div>
            <div className={classes.progress}>
              <span>100%</span>
            </div>
          </div>
          <div>PHP</div>
        </Grid>
        <Grid item md={gridMD} className={containerClass}>
          <div>
            <div className={classes.progress} style={{ width: '80%' }}>
              <span>80%</span>
            </div>
          </div>
          <div>Coffee Script</div>
        </Grid>
        <Grid item md={gridMD} className={containerClass}>
          <div>
            <div className={classes.progress} style={{ width: '100%' }}>
              <span>100%</span>
            </div>
          </div>
          <div>VueJS</div>
        </Grid>
        <Grid item md={gridMD} className={containerClass}>
          <div>
            <div className={classes.progress} style={{ width: '40%' }}>
              <span>40%</span>
            </div>
          </div>
          <div>Angular</div>
        </Grid>
        <Grid item md={gridMD} className={containerClass}>
          <div>
            <div className={classes.progress} style={{ width: '100%' }}>
              <span>100%</span>
            </div>
          </div>
          <div>React</div>
        </Grid>
        <Grid item md={gridMD} className={containerClass}>
          <div>
            <div className={classes.progress} style={{ width: '100%' }}>
              <span>100%</span>
            </div>
          </div>
          <div>Database</div>
        </Grid>
        <Grid item md={gridMD} className={containerClass}>
          <div>
            <div className={classes.progress} style={{ width: '100%' }}>
              <span>100%</span>
            </div>
          </div>
          <div>مدیریت انسانی</div>
        </Grid>
        <Grid item md={gridMD} className={containerClass}>
          <div>
            <div className={classes.progress} style={{ width: '100%' }}>
              <span>100%</span>
            </div>
          </div>
          <div>Database</div>
        </Grid>
        <Grid item md={gridMD} className={containerClass}>
          <div>
            <div className={classes.progress} style={{ width: '100%' }}>
              <span>100%</span>
            </div>
          </div>
          <div title="Material UI Designs">Material UI Designs</div>
        </Grid>
      </Grid>
    </PureWidget>
  );
}

Skills.propTypes = {
  editable: PropTypes.bool,
  progressFullWidth: PropTypes.bool,
  size: PropTypes.number,
  col: PropTypes.number,
};

export default Skills;
