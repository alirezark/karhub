/**
 *
 * AbstractCv
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Grid } from '@material-ui/core';
import MButton from 'mui/MButton';
import styles from './style';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function AbstractCv(props) {
  const { cv, user } = props;
  const classes = styles();

  if (!cv.job || !cv.education) return <div />;

  return (
    <div className={classes.root}>
      <Typography variant="h5" component="h5" className={classes.head}>
        خلاصه رزومه شما
        <MButton className={classes.btnEditCV}>ویرایش رزومه</MButton>
      </Typography>
      <Typography variant="h2">{user.name}</Typography>
      <Grid container className={classes.iconDetail}>
        <Grid item md={3}>
          <i className="flaticon-location" />
          {cv.country}, {cv.city}
        </Grid>
        <Grid item md={3}>
          <i className="flaticon-telephone" />
          {cv.mobile}
        </Grid>
        <Grid item md={3}>
          <i className="flaticon-e-mail" />
          {cv.email}
        </Grid>
        <Grid item md={3}>
          <i className="flaticon-calendar" />
          {cv.birthDate}
        </Grid>
      </Grid>
      <div className={classes.divider} />
      <Grid container>
        <Grid item xs={6} className={classes.bottomDetail}>
          <Typography variant="h3">{cv.job.title}</Typography>
          <span>{cv.job.company}</span>
          {cv.job.duration}
        </Grid>
        <Grid item xs={6} className={classes.bottomDetail}>
          <div className={classes.bottomDetailRight}>
            <Typography variant="h3">{cv.education.title}</Typography>
            {'موسسه/دانشگاه: '} {cv.education.place} {cv.education.duration}
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

AbstractCv.propTypes = {
  cv: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

export default AbstractCv;
