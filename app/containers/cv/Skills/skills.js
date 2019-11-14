import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Typography, Grid } from '@material-ui/core';
import { MButton } from 'mui/index';
import PureWidget from '../contents/pureWidget';

const styles = makeStyles(() => ({
  root: {
    marginTop: 0,
    marginBottom: 0,
  },
  progressContain: {
    display: 'flex',
    alignItems: 'center',
    whiteSpace: 'nowrap',
    padding: '10px 32px!important',
    '&>div:first-child': {
      flexGrow: 1,
      direction: 'rtl',
    },
    '&>div:last-child': {
      flexBasis: 100,
      flexShrink: 0,
      flexGrow: 0,
      textAlign: 'right',
      fontSize: props => (props.larger ? 14 : 12),
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      direction: 'rtl',
    },
  },
  progress: {
    position: 'relative',
    height: props => (props.larger ? 6 : 4),
    width: '100%',
    borderRadius: 4,
    background:
      'linear-gradient(90deg, rgb(126,203,197) 0%, rgb(77,186,128) 100%)',
    '& span': {
      position: 'absolute',
      left: 1,
      fontSize: props => (props.larger ? 12 : 10),
      top: props => (props.larger ? -18 : -15),
    },
  },
}));

function Skills(props) {
  const { editable, larger = false, col = 3 } = props;
  const classes = styles({ larger });
  const gridMD = 12 / col;

  return (
    <PureWidget
      title="مهارت ها"
      icon="flaticon-lamp"
      editable={editable}
      larger={larger}
    >
      <Grid container spacing={8} className={classes.root}>
        <Grid item md={gridMD} className={classes.progressContain}>
          <div>
            <div className={classes.progress}>
              <span>100%</span>
            </div>
          </div>
          <div>PHP</div>
        </Grid>
        <Grid item md={gridMD} className={classes.progressContain}>
          <div>
            <div className={classes.progress} style={{ width: '80%' }}>
              <span>80%</span>
            </div>
          </div>
          <div>Coffee Script</div>
        </Grid>
        <Grid item md={gridMD} className={classes.progressContain}>
          <div>
            <div className={classes.progress} style={{ width: '100%' }}>
              <span>100%</span>
            </div>
          </div>
          <div>VueJS</div>
        </Grid>
        <Grid item md={gridMD} className={classes.progressContain}>
          <div>
            <div className={classes.progress} style={{ width: '40%' }}>
              <span>40%</span>
            </div>
          </div>
          <div>Angular</div>
        </Grid>
        <Grid item md={gridMD} className={classes.progressContain}>
          <div>
            <div className={classes.progress} style={{ width: '100%' }}>
              <span>100%</span>
            </div>
          </div>
          <div>React</div>
        </Grid>
        <Grid item md={gridMD} className={classes.progressContain}>
          <div>
            <div className={classes.progress} style={{ width: '100%' }}>
              <span>100%</span>
            </div>
          </div>
          <div>Database</div>
        </Grid>
        <Grid item md={gridMD} className={classes.progressContain}>
          <div>
            <div className={classes.progress} style={{ width: '100%' }}>
              <span>100%</span>
            </div>
          </div>
          <div>مدیریت انسانی</div>
        </Grid>
        <Grid item md={gridMD} className={classes.progressContain}>
          <div>
            <div className={classes.progress} style={{ width: '100%' }}>
              <span>100%</span>
            </div>
          </div>
          <div>Database</div>
        </Grid>
        <Grid item md={gridMD} className={classes.progressContain}>
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
  larger: PropTypes.bool,
  col: PropTypes.number,
};

export default Skills;
