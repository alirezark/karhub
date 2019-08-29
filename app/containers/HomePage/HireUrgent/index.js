import React from 'react';
import { FormattedMessage } from 'react-intl';
import MContainer from 'mui/MContainer';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import JobCard from 'components/JobCard';
import messages from './messages';
import styles from './style';

function HireUrgent() {
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
      <Typography variant="h1" component="h1" className={classes.sectionHead}>
        <FormattedMessage {...messages.title} />
        <Link to="/Jobs" className={classes.blueLink} component="button">
          مشاهده همه
        </Link>
      </Typography>

      <Grid container spacing={3}>
        {jobs.map(job => (
          <Grid key={job.id} item md={6}>
            <JobCard job={job} />
          </Grid>
        ))}
      </Grid>
    </MContainer>
  );
}

export default HireUrgent;
