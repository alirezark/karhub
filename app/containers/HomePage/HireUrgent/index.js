import React from 'react';
import { FormattedMessage } from 'react-intl';
import MContainer from 'mui/MContainer';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import JobCard from 'components/JobCard';
import messages from './messages';
import styles from './style';

function HireUrgent() {
  const classes = styles();

  const jobs = [
    { title: 'مدیر فنی و پشتیبانی', company: 'ایرانسل', location: 'تهران', icon: 1 },
    { title: 'استخدام برنامه نویس', company: 'ایرانسل', location: 'تهران', icon: 2 },
    { title: 'طراح و برنامه نویس موبایل', company: 'ایرانسل', location: 'تهران', icon: 3 },
    { title: 'استخدام دیجتال مارکتینگ', company: 'ایرانسل', location: 'تهران', icon: 1 },
    { title: 'طراح و برنامه نویس موبایل', company: 'ایرانسل', location: 'تهران', icon: 3 },
    { title: 'استخدام برنامه نویس', company: 'ایرانسل', location: 'تهران', icon: 2 },
  ];

  return (
    <MContainer maxWidth="md" mt={6} className={classes.root}>
      <Typography variant="h1" component="h1" className={classes.sectionHead}>
        <FormattedMessage {...messages.title} />
        <Link className={classes.blueLink} component="button">
          مشاهده همه
        </Link>
      </Typography>

      <Grid container spacing={3}>
        {jobs.map(job => (
          <Grid item md={6}>
            <JobCard job={job} />
          </Grid>
        ))}
      </Grid>
    </MContainer>
  );
}

export default HireUrgent;
