import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Grid, makeStyles } from '@material-ui/core';
import JobCard from 'components/JobCard';

const styles = makeStyles(theme => ({
  card: {
    boxShadow: 'none',
    '&:hover': {
      boxShadow: '0 0 14px 0 rgba(75,187,129,0.5)',
    },
  },
}));

function FavoriteJobs(props) {
  const classes = styles();
  const { favoriteJobs } = props;
  const [jobs, setJobs] = useState({
    list: favoriteJobs,
  });

  useEffect(() => {
    if (jobs.list.length !== favoriteJobs.length)
      setJobs({
        list: favoriteJobs,
      });
  });

  if (!favoriteJobs) return <div />;

  const handleDelete = index => {
    favoriteJobs.splice(index, 1);
    setJobs({
      list: favoriteJobs,
    });
  };

  return (
    <Grid container spacing={3}>
      {jobs.list.map((job, index) => (
        <Grid key={job.id} item md={6}>
          <JobCard
            job={job}
            className={classes.card}
            onDelete={() => handleDelete(index)}
          />
        </Grid>
      ))}
    </Grid>
  );
}

FavoriteJobs.propTypes = {
  favoriteJobs: PropTypes.array.isRequired,
};

export default FavoriteJobs;
