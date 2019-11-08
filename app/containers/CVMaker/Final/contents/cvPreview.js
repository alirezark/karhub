import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { AboutMe, WorkExperience } from 'app/containers/cv';

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
    </div>
  );
}

export default CVPreview;
