/**
 *
 * GlobalFooter
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Grid, Typography } from '@material-ui/core';
import MContent from 'mui/MContainer';
import { FormattedMessage } from 'react-intl';
import MTextField from 'mui/MTextField';
import MButton from 'mui/MButton';
import messages from './messages';
import styles from './style';

function GlobalFooter() {
  const classes = styles();

  return (
    <div className={classes.root}>
      <MContent mt={5}>
        <Grid container spacing={3}>
          <Grid item md={5}>
            <Typography variant="h1" className={classes.title}>
              <FormattedMessage {...messages.subscribe_title} />
            </Typography>
            <Typography variant="subtitle2" className={classes.subtitle}>
              <FormattedMessage {...messages.subscribe_subtitle} />
            </Typography>
          </Grid>
          <Grid item md={5}>
            <MTextField className={classes.inputField} label="ایمیل خود را وارد نمایید" />
          </Grid>
          <Grid item md={2}>
            <MButton
              fullWidth
              variant="contained"
              color="primary"
              className={classes.btn}
            >
              عضویت
            </MButton>
          </Grid>
        </Grid>
      </MContent>
    </div>
  );
}

GlobalFooter.propTypes = {};

export default GlobalFooter;
