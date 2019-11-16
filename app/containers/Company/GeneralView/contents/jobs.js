// TODO: it's a duplicate code of job component
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import JobCard from 'app/components/JobCard';
import Job from 'app/containers/Company/Job';
import { withSendCVDialog } from '../../../SendCvDialog/sendCVDialog.context';

const styles = makeStyles(() => ({
  similarJobsHead: {
    margin: '40px 0 30px',
  },
}));

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

function Jobs(props) {
  const classes = styles();
  const { showSendCVDialog } = props;
  const [showJob, setShowJob] = useState(false);

  const onJobClick = () => {
    setShowJob(true);
  };

  return (
    <div>
      <Grid container spacing={1}>
        {showJob && (
          <div>
            <Job />
            <Typography className={classes.similarJobsHead} variant="h3">
              شغل های مشابه
            </Typography>
          </div>
        )}
        {jobs.map(job => (
          <Grid key={job.id} item md={12}>
            <JobCard
              job={job}
              onClick={onJobClick}
              className={classes.card}
              hideNavigation
              showSendCV
              handleShowSendCV={() => showSendCVDialog(job)}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

Jobs.propTypes = {
  showSendCVDialog: PropTypes.func.isRequired,
};

export default withSendCVDialog(Jobs);
