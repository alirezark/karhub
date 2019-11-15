// TODO: it's a duplicate code of job component
import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import MButton from 'mui/MButton';
import JobCard from 'app/components/JobCard';

const styles = makeStyles(theme => ({}));

const jobs = [
  {
    id: 1,
    title: 'مدیر فنی و پشتیبانی',
    company: 'ایرانسل',
    location: 'تهران',
  },
  {
    id: 2,
    title: 'مدیر فنی و پشتیبانی',
    company: 'ایرانسل',
    location: 'تهران',
  },
  {
    id: 3,
    title: 'مدیر فنی و پشتیبانی',
    company: 'ایرانسل',
    location: 'تهران',
  },
];

function Jobs() {
  const classes = styles();

  return (
    <div>
      <Grid container spacing={1}>
        {jobs.map(job => (
          <Grid key={job.id} item md={12}>
            <JobCard
              job={job}
              className={classes.card}
              hideNavigation
              showSendCV
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Jobs;
