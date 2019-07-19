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

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

const style = makeStyles({
  root: {
    flexGrow: 1,
  },
});

function JobSearch() {
  const classes = style();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item md={5} spacing={3}>
          <MTextField label="عنوان شغلی" />
        </Grid>
        <Grid item md={5}>
          <MTextField label="در کدام شهر" />
        </Grid>
        <Grid item md={2}>
          <MButton fullWidth variant="contained" color="primary">
            جستجو
          </MButton>
        </Grid>
      </Grid>
    </div>
  );
}

JobSearch.propTypes = {};

export default JobSearch;
