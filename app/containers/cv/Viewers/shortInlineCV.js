import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import {
  AboutMe,
  WorkExperience,
  EducationExperience,
  Skills,
} from 'app/containers/cv/widgets';
import CVPersonalsHorizontal from '../contents/cvPersonalsHorizontal';

const styles = makeStyles(() => ({
  cvBox: {
    marginBottom: 30,
  },
}));

function InlineCV() {
  const classes = styles();

  return (
    <div>
      <CVPersonalsHorizontal />
      <div className={classes.cvBox}>
        <AboutMe larger />
      </div>
      <div className={classes.cvBox}>
        <Grid container spacing={4}>
          <Grid item md={6}>
            <WorkExperience larger />
          </Grid>
          <Grid item md={6}>
            <EducationExperience larger />
            <Skills col={1} larger />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default InlineCV;
