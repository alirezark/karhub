import React from 'react';
import { Grid } from '@material-ui/core';
import MContainer from 'mui/MContainer';
import img2 from 'app/assets/images/Oval_success.png';
import img1 from 'app/assets/images/most_test_h.png';
import Explanation from './contents/explanation';
import Features from './contents/features';
import SampleCV from './contents/sampleCV';
import UsersView from './contents/usersView';
import styles from './intro.style';

function Intro() {
  const classes = styles();

  return (
    <MContainer className={classes.root}>
      <Grid container>
        <Grid item md={1}>
          <img alt="cover" src={img2} className={classes.cover2} />
        </Grid>
        <Grid item md={10}>
          <Explanation />
          <Features />
          <SampleCV />
          <UsersView />
        </Grid>
        <Grid item md={1}>
          <img alt="cover" src={img1} className={classes.cover1} />
        </Grid>
      </Grid>
    </MContainer>
  );
}

export default Intro;
