import React from 'react';
import PropTypes from 'prop-types';
import { Grid, makeStyles } from '@material-ui/core';
import JobCard from 'components/JobCard';

const styles = makeStyles(() => ({
  card: {
    boxShadow: 'none',
    '&:hover': {
      boxShadow: '0 0 14px 0 rgba(75,187,129,0.5)',
    },
  },
}));

function SentCV(props) {
  const classes = styles();
  const { CVs } = props;

  if (!CVs) return <div />;

  return (
    <Grid container spacing={1}>
      {CVs.map(job => (
        <Grid key={job.id} item md={12}>
          <JobCard job={job} className={classes.card} showSentDetails />
        </Grid>
      ))}
    </Grid>
  );
}

SentCV.propTypes = {
  CVs: PropTypes.array.isRequired,
};

export default SentCV;
