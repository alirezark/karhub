import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import {
  AboutMe,
  WorkExperience,
  EducationExperience,
} from 'app/containers/cv';

const styles = makeStyles(() => ({
  cvBox: {
    marginBottom: 30,
  },
}));

function CVPreview() {
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
        </Grid>
      </div>
    </div>
  );
}

export default CVPreview;
