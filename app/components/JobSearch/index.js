/**
 *
 * JobSearch
 *
 */

import React from 'react';
import Grid from '@material-ui/core/Grid';
import MTextField from '../../mui/MTextField';
import MButton from '../../mui/MButton';
// import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

const style = makeStyles({
  root: {
    flexGrow: 1,
  },
  width_2: {
    maxWidth: '38%',
    flexBasis: '38%',
  },
  width_1: {
    maxWidth: '22%',
    flexBasis: '22%',
  },
  btn_search: {
    lineHeight: '38px',
    marginTop: 3,
    fontSize: '1.2rem',
  },
});

function JobSearch() {
  const classes = style();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item md={5} className={classes.width_2}>
          <MTextField fullWidth label="عنوان شغلی" />
        </Grid>
        <Grid item md={5} className={classes.width_2}>
          <MTextField fullWidth label="در کدام شهر" />
        </Grid>
        <Grid item md={2} className={classes.width_1}>
          <MButton
            fullWidth
            variant="contained"
            color="primary"
            className={classes.btn_search}
          >
            جستجو
          </MButton>
        </Grid>
      </Grid>
    </div>
  );
}

JobSearch.propTypes = {};

export default JobSearch;
