import React from 'react';
import { makeStyles, Grid, Typography } from '@material-ui/core';
import { MThumbLink } from 'mui';

const styles = makeStyles(() => ({
  head: {
    fontWeight: 800,
    margin: '10px 0 20px',
  },
}));

function Footer() {
  const classes = styles();

  return (
    <div>
      <Typography variant="h2" className={classes.head}>
        اضافه کردن اطلاعات تکمیلی
      </Typography>
      <Grid container spacing={4}>
        <Grid item md={3}>
          <MThumbLink
            colorId="1"
            icon="flaticon-video-player"
            title="معرفی ویدیوی"
          />
        </Grid>
        <Grid item md={3}>
          <MThumbLink
            colorId="2"
            icon="flaticon-microphone"
            title="معرفی صوتی"
          />
        </Grid>
        <Grid item md={3}>
          <MThumbLink
            colorId="3"
            icon="flaticon-profile"
            title="لینک نمونه کار"
          />
        </Grid>
        <Grid item md={3}>
          <MThumbLink
            colorId="4"
            icon="flaticon-translation"
            title="مهارت زبان"
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
