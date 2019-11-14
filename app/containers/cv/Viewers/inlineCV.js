import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import {
  AboutMe,
  WorkExperience,
  EducationExperience,
  CourseExperience,
  Skills,
  Awards,
  Exams,
  Languages,
  QRLink,
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
            <CourseExperience larger />
          </Grid>
          <Grid item md={6}>
            <EducationExperience larger />
            <Skills col={1} larger />
          </Grid>
        </Grid>
      </div>

      <div className={classes.cvBox}>
        <Grid container spacing={4}>
          <Grid item md={8}>
            <Exams larger />
          </Grid>
          <Grid item md={4}>
            <QRLink />
          </Grid>
        </Grid>
      </div>

      <div className={classes.cvBox}>
        <Grid container spacing={4}>
          <Grid item md={6}>
            <Awards larger />
          </Grid>
          <Grid item md={6}>
            <Languages larger col={1} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default InlineCV;
