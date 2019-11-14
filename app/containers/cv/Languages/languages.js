import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Grid } from '@material-ui/core';
import PureWidget from '../contents/pureWidget';

const styles = makeStyles(() => ({
  item: {
    fontSize: props => (props.larger ? 14 : 12),
    '& span': {
      margin: '0 5px',
      width: 72,
      lineHeight: props => (props.larger ? '26px' : '20px'),
      textAlign: 'center',
      color: '#444',
      background: '#fcba4c',
      display: 'inline-block',
      borderRadius: 10,
    },
  },
}));

function Languages(props) {
  const { editable, larger = false, col = 2 } = props;
  const classes = styles({ larger });
  const gridMD = 12 / col;

  return (
    <PureWidget
      title="زبان"
      icon="flaticon-translation"
      editable={editable}
      larger={larger}
    >
      <Grid container spacing={4}>
        <Grid item md={gridMD}>
          <div className={classes.item}>
            انگلیسی <span>پیشرفته</span>
          </div>
        </Grid>
        <Grid item md={gridMD}>
          <div className={classes.item}>
            فرانسه <span>متوسط</span>
          </div>
        </Grid>
      </Grid>
    </PureWidget>
  );
}

Languages.propTypes = {
  editable: PropTypes.bool,
  larger: PropTypes.bool,
  col: PropTypes.number,
};

export default Languages;
