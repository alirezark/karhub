import React from 'react';
import { FormattedMessage } from 'react-intl';
import MContainer from 'mui/MContainer';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ExamCard from 'components/ExamCard';
import messages from './messages';
import styles from './style';
import imgTests from '../../../assets/images/most_test_h.png';
import icon1 from '../../../assets/images/icons/tests.png';

function PopularTests() {
  const classes = styles();

  return (
    <MContainer maxWidth="md" mt={6} className={classes.root}>
      <Grid container>
        <Grid item md={9}>
          <Typography
            variant="h1"
            component="h1"
            className={classes.sectionHead}
          >
            <FormattedMessage {...messages.title} />
          </Typography>
          <Typography
            variant="subtitle1"
            component="p"
            className={classes.subTitle}
          >
            <FormattedMessage {...messages.sub_head} />
          </Typography>
          <Grid container spacing={4}>
            <Grid item md={4}>
              <ExamCard
                icon={icon1}
                title="آزمون هوش‌های چندگانه Aptitude Test"
                questionCount={30}
                time={45}
              />
            </Grid>
            <Grid item md={4}>
              <ExamCard
                icon={icon1}
                title="آزمون هوش‌های چندگانه Aptitude Test"
                questionCount={30}
                time={45}
              />
            </Grid>
            <Grid item md={4}>
              <ExamCard
                icon={icon1}
                title="آزمون هوش‌های چندگانه Aptitude Test"
                questionCount={30}
                time={45}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={3}>
          <img alt="Tests" className={classes.section_img} src={imgTests} />
        </Grid>
      </Grid>
    </MContainer>
  );
}

export default PopularTests;
