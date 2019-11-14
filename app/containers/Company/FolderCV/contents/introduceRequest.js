import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import { MContainer, MThumbLink } from 'mui/index';

const styles = makeStyles(() => ({
  root: {
    marginTop: 50,
    '&>h2': {
      fontWeight: 800,
    },
    '&>p': {
      margin: '20px 0 30px',
      fontSize: 14,
      color: '#666',
    },
  },
}));

function IntroduceRequest() {
  const classes = styles();
  return (
    <MContainer className={classes.root}>
      <Typography variant="h2">درخواست معرفی</Typography>
      <Typography>
        با شرکت در آزمون های کارهاب خودت رو بسنج و عملکرد بهتری داشته باش! شما
        می توانید با انتخاب یکی از آزمون ها وارد صفحه آزمون شده و این متن به
        صورت تست می باشد
      </Typography>
      <Grid container>
        <Grid item md={4}>
          <MThumbLink
            colorId="1"
            icon="flaticon-video-player"
            title="معرفی ویدیوی"
          />
        </Grid>
        <Grid item md={4}>
          <MThumbLink
            colorId="2"
            icon="flaticon-microphone"
            title="معرفی صوتی"
          />
        </Grid>
        <Grid item md={4}>
          <MThumbLink
            colorId="3"
            icon="flaticon-profile"
            title="ارسال نمونه کار"
          />
        </Grid>
      </Grid>
    </MContainer>
  );
}

export default IntroduceRequest;
