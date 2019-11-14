import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { MContainer } from 'mui/index';
import Grid from '@material-ui/core/Grid';
import ExamCard from 'app/components/ExamCard';
import icon1 from 'app/assets/images/icons/tests.png';

const styles = makeStyles(() => ({
  root: {
    marginTop: 40,
    '&>h2': {
      fontWeight: 800,
    },
    '&>p': {
      margin: '20px 0 30px',
      fontSize: 14,
      color: '#666',
    },
  },
  line: {
    borderTop: '2px solid #f5f5f5',
    marginBottom: 50,
  },
}));

function ExamRequest() {
  const classes = styles();

  return (
    <MContainer className={classes.root}>
      <div className={classes.line} />
      <Typography variant="h2">درخواست آزمون شخصیت</Typography>
      <Typography>
        با شرکت در آزمون های کارهاب خودت رو بسنج و عملکرد بهتری داشته باش! شما
        می توانید با انتخاب یکی از آزمون ها وارد صفحه آزمون شده و این متن به
        صورت تست می باشد
      </Typography>
      <Grid container spacing={8}>
        <Grid item md={3}>
          <ExamCard
            icon={icon1}
            title="آزمون هوش‌های چندگانه Aptitude Test"
            questionCount={30}
            time={45}
          />
        </Grid>
        <Grid item md={3}>
          <ExamCard
            icon={icon1}
            title="آزمون هوش‌های چندگانه Aptitude Test"
            questionCount={30}
            time={45}
          />
        </Grid>
        <Grid item md={3}>
          <ExamCard
            icon={icon1}
            title="آزمون هوش‌های چندگانه Aptitude Test"
            questionCount={30}
            time={45}
          />
        </Grid>
        <Grid item md={3}>
          <ExamCard
            icon={icon1}
            title="آزمون هوش‌های چندگانه Aptitude Test"
            questionCount={30}
            time={45}
          />
        </Grid>
      </Grid>
    </MContainer>
  );
}

export default ExamRequest;
