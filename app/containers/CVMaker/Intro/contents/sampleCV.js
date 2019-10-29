import React from 'react';
import { makeStyles, Typography, Grid } from '@material-ui/core';
import imgCV1 from 'app/assets/images/temp/cv_sample_1.jpg';
import imgCV2 from 'app/assets/images/temp/cv_sample_2.jpg';
import imgCV3 from 'app/assets/images/temp/cv_sample_3.jpg';

const styles = makeStyles(() => ({
  root: {
    marginTop: 50,
  },
  head: {
    fontWeight: 900,
  },
  content: {
    width: '90%',
    margin: '20px auto',
  },
  sampleCV: {
    overflow: 'hidden',
    cursor: 'pointer',
    position: 'relative',
    background: '#333',
    boxShadow: '0 0 14px 0 rgba(178,178,178,0.5)',
    '& img': {
      width: '100%',
      transition: '100ms',
    },
    '&:hover img': {
      opacity: '.8',
    },
    '&:hover div': {
      bottom: 0,
    },
  },
  btnView: {
    position: 'absolute',
    bottom: '-100px',
    left: 0,
    width: '100%',
    color: 'white',
    background: 'rgba(75, 187, 129, .7)',
    lineHeight: '60px',
    textAlign: 'center',
    transition: '100ms',
  },
}));

function SampleCV() {
  const classes = styles();

  return (
    <div className={classes.root}>
      <Typography variant="h1" className={classes.head}>
        نمونه رزومه های ساخته شده در کارهاب
      </Typography>
      <Grid container spacing={6} className={classes.content}>
        <Grid item md={4}>
          <div className={classes.sampleCV}>
            <img alt="cv" src={imgCV1} />
            <div className={classes.btnView}>مشاهده</div>
          </div>
        </Grid>
        <Grid item md={4}>
          <div className={classes.sampleCV}>
            <img alt="cv" src={imgCV2} />
            <div className={classes.btnView}>مشاهده</div>
          </div>
        </Grid>
        <Grid item md={4}>
          <div className={classes.sampleCV}>
            <img alt="cv" src={imgCV3} />
            <div className={classes.btnView}>مشاهده</div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default SampleCV;
