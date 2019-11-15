import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Grid } from '@material-ui/core';
import PureWidget from '../contents/pureWidget';

const SIZES = {
  ITEM_FONT_SIZE: [12, 12, 14],
  ITEM_LINE_HEIGHT: ['20px', '20px', '26px'],
};

const styles = makeStyles(() => ({
  item: {
    fontSize: props => SIZES.ITEM_FONT_SIZE[props.size],
    '& span': {
      margin: '0 5px',
      width: 72,
      lineHeight: props => SIZES.ITEM_LINE_HEIGHT[props.size],
      textAlign: 'center',
      color: '#444',
      background: '#fcba4c',
      display: 'inline-block',
      borderRadius: 10,
    },
  },
}));

function Languages(props) {
  const { editable, size = 1, col = 2 } = props;
  const classes = styles({ size });
  const gridMD = 12 / col;

  return (
    <PureWidget
      title="زبان"
      icon="flaticon-translation"
      editable={editable}
      size={size}
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
  size: PropTypes.number,
  col: PropTypes.number,
};

export default Languages;
