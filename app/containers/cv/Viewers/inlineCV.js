import React from 'react';
import PropTypes from 'prop-types';
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

function InlineCV(props) {
  const classes = styles();
  const { hidePersonals = false } = props;

  return (
    <div>
      {!hidePersonals && <CVPersonalsHorizontal />}
      <div className={classes.cvBox}>
        <AboutMe size={2} />
      </div>
      <div className={classes.cvBox}>
        <Grid container spacing={4}>
          <Grid item md={6}>
            <WorkExperience size={2} />
            <CourseExperience size={2} />
          </Grid>
          <Grid item md={6}>
            <EducationExperience size={2} />
            <Skills col={1} size={1} />
          </Grid>
        </Grid>
      </div>

      <div className={classes.cvBox}>
        <Grid container spacing={4}>
          <Grid item md={8}>
            <Exams size={2} />
          </Grid>
          <Grid item md={4}>
            <QRLink />
          </Grid>
        </Grid>
      </div>

      <div className={classes.cvBox}>
        <Grid container spacing={4}>
          <Grid item md={6}>
            <Awards size={2} />
          </Grid>
          <Grid item md={6}>
            <Languages size={1} col={1} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

InlineCV.propTypes = {
  hidePersonals: PropTypes.bool,
};

export default InlineCV;
