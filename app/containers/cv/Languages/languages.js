import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Grid } from '@material-ui/core';
import PureWidget from '../contents/pureWidget';

const styles = makeStyles(() => ({
  item: {
    padding: 5,
    '& span': {
      margin: '0 5px',
      width: 72,
      lineHeight: '20px',
      textAlign: 'center',
      background: '#fcba4c',
      display: 'inline-block',
      borderRadius: 10,
      fontSize: 12,
    },
  },
}));

function Languages(props) {
  const classes = styles();
  const { editable } = props;

  return (
    <PureWidget title="زبان" icon="flaticon-language" editable={editable}>
      <Grid container spacing={4}>
        <Grid item md={6}>
          <div className={classes.item}>
            انگلیسی <span>پیشرفته</span>
          </div>
        </Grid>
        <Grid item md={6}>
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
};

export default Languages;
