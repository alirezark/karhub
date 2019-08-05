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
            <MTextField
              className={classes.inputField}
              label="ایمیل خود را وارد نمایید"
            />
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
        <div className={classes.separator} />
        <Typography variant="h1" className={classes.title}>
          <FormattedMessage {...messages.title} />
        </Typography>
        <Typography variant="subtitle2" className={classes.subtitle}>
          <FormattedMessage {...messages.subtitle} />
        </Typography>
        <Grid container spacing={3}>
          <Grid item md={3}>
            <Typography variant="h1" className={classes.title}>
              <FormattedMessage {...messages.karhub} />
            </Typography>
            <Typography variant="subtitle2" className={classes.subtitle}>
              <FormattedMessage {...messages.subtitle2} />
            </Typography>
          </Grid>
          <Grid item md={3}>
            <Typography variant="h2" className={classes.head2}>
              <FormattedMessage {...messages.quickAccess} />
            </Typography>
            <div className={classes.linksContainer}>
              <ul className={classes.links}>
                <li>
                  <a href="#">خانه</a>
                </li>
                <li>
                  <a href="#">فرصت‌های شغلی</a>
                </li>
                <li>
                  <a href="#">اطلاعات شرکت‌ها</a>
                </li>
                <li>
                  <a href="#">آزمون</a>
                </li>
                <li>
                  <a href="#">رزمه‌ساز</a>
                </li>
                <li>
                  <a href="#">بلاگ</a>
                </li>
              </ul>
            </div>
          </Grid>
          <Grid item md={3}>
            <Typography variant="h2" className={classes.head2}>
              <FormattedMessage {...messages.quickAccess} />
            </Typography>
            <div className={classes.linksContainer}>
              <ul className={classes.links}>
                <li>
                  <a href="#">خانه</a>
                </li>
                <li>
                  <a href="#">فرصت‌های شغلی</a>
                </li>
                <li>
                  <a href="#">اطلاعات شرکت‌ها</a>
                </li>
                <li>
                  <a href="#">آزمون</a>
                </li>
                <li>
                  <a href="#">رزمه‌ساز</a>
                </li>
                <li>
                  <a href="#">بلاگ</a>
                </li>
              </ul>
            </div>
          </Grid>
          <Grid item md={3}>
            <Typography
              variant="h2"
              className={classes.head2}
              style={{ textAlign: 'justify' }}
            >
              <FormattedMessage {...messages.contactInfo} />
            </Typography>
            <div className={classes.subtitle2}>
              <FormattedMessage {...messages.address} />
            </div>
            <div className={classes.contactInfo}>ایمیل: info@karhub.ir</div>
            <div className={classes.contactInfo}>
              مرکز پاسخگویی : ۰۲۱۲۲۵۵۶۶۳۲۱
            </div>
          </Grid>
        </Grid>
      </MContent>
      <div className={classes.corporate}>
        <FormattedMessage {...messages.corporate} />
      </div>
    </div>
  );
}

GlobalFooter.propTypes = {};

export default GlobalFooter;
