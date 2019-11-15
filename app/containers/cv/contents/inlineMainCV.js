import React from 'react';
import { makeStyles } from '@material-ui/core';
import {
  WorkExperience,
  EducationExperience,
  CourseExperience,
  Skills,
  Languages,
} from 'app/containers/cv/widgets';

const styles = makeStyles(() => ({
  cvBox: {
    marginBottom: 30,
  },
}));

function InlineMainCV() {
  const classes = styles();

  return (
    <div>
      <div className={classes.cvBox}>
        <WorkExperience leftDescribe size={0} />
      </div>
      <div className={classes.cvBox}>
        <EducationExperience leftDescribe size={0} />
      </div>
      <div className={classes.cvBox}>
        <Skills col={2} size={0} progressFullWidth />
      </div>
      <div className={classes.cvBox}>
        <CourseExperience leftDescribe size={0} />
      </div>
      <div className={classes.cvBox}>
        <Languages col={2} size={0} />
      </div>
    </div>
  );
}

export default InlineMainCV;
