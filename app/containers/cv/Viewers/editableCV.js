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
} from 'app/containers/cv/widgets';

const styles = makeStyles(() => ({
  cvBox: {
    marginBottom: 30,
  },
}));

function EditableCV() {
  const classes = styles();

  return (
    <div>
      <div className={classes.cvBox}>
        <AboutMe editable />
      </div>
      <div className={classes.cvBox}>
        <WorkExperience editable />
      </div>
      <div className={classes.cvBox}>
        <Grid container spacing={4}>
          <Grid item md={6}>
            <EducationExperience editable />
          </Grid>
          <Grid item md={6}>
            <CourseExperience editable />
          </Grid>
        </Grid>
      </div>
      <div className={classes.cvBox}>
        <Skills editable />
      </div>
      <div className={classes.cvBox}>
        <Grid container spacing={4}>
          <Grid item md={6}>
            <Awards editable />
          </Grid>
          <Grid item md={6}>
            <Exams editable />
          </Grid>
        </Grid>
      </div>
      <div className={classes.cvBox}>
        <Grid container spacing={4}>
          <Grid item md={6}>
            <Languages editable />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default EditableCV;
