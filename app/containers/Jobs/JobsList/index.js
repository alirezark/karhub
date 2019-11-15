import React  from 'react';
import PropTypes from 'prop-types';
import MContainer from 'mui/MContainer';
import { Grid, Typography, Box } from '@material-ui/core';
import JobCard from 'components/JobCard';
import styles from './style';
import Job from '../../Company/Job';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={0}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function JobsList() {
  const classes = styles();

  const jobs = [
    {
      id: 1,
      title: 'مدیر فنی و پشتیبانی',
      company: 'ایرانسل',
      location: 'تهران',
      icon: 1,
    },
    {
      id: 2,
      title: 'استخدام برنامه نویس',
      company: 'ایرانسل',
      location: 'تهران',
      icon: 2,
    },
    {
      id: 3,
      title: 'طراح و برنامه نویس موبایل',
      company: 'ایرانسل',
      location: 'تهران',
      icon: 3,
    },
    {
      id: 4,
      title: 'استخدام دیجتال مارکتینگ',
      company: 'ایرانسل',
      location: 'تهران',
      icon: 1,
    },
    {
      id: 5,
      title: 'طراح و برنامه نویس موبایل',
      company: 'ایرانسل',
      location: 'تهران',
      icon: 3,
    },
    {
      id: 6,
      title: 'استخدام برنامه نویس',
      company: 'ایرانسل',
      location: 'تهران',
      icon: 2,
    },
  ];

  return (
    <MContainer maxWidth="md" mt={6} className={classes.root}>
      <Grid container spacing={3}>
        <Grid item md={4}>
          <Typography variant="h2" component="h2" className={classes.head}>
            برنامه نویس و مدیر فنی
            <div className={classes.headInfo}>423 مورد</div>
          </Typography>
          {jobs.map(job => (
            <JobCard key={job.id} job={job} />
          ))}
        </Grid>
        <Grid item md={8}>
          <div className={classes.panel}>
            <Job />
          </div>
        </Grid>
      </Grid>
    </MContainer>
  );
}

export default JobsList;
