import React from 'react';
import { FormattedMessage } from 'react-intl';
import MContainer from 'mui/MContainer';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import messages from './messages';
import styles from './style';
import imgJobs from '../../../assets/images/icons/top_jobs_h.png';
import icon1 from '../../../assets/images/icons/chim_job.png';
import icon2 from '../../../assets/images/icons/digital_marketer.png';
import icon3 from '../../../assets/images/icons/web_developer.png';

function PopularJobs() {
  const classes = styles();

  return (
    <MContainer maxWidth="md" mt={6} className={classes.root}>
      <Grid container>
        <Grid item md={3}>
          <img alt="Tests" className={classes.section_img} src={imgJobs} />
        </Grid>
        <Grid item md={9}>
          <Typography
            variant="h1"
            component="h1"
            className={classes.sectionHead}
          >
            <FormattedMessage {...messages.title} />
          </Typography>
          <Typography variant="subtitle1" component="p">
            <FormattedMessage {...messages.sub_head} />
          </Typography>
          <Grid container>
            <Grid item md={4}>
              <Card className={classes.card} raised>
                <CardMedia
                  className={classes.icon}
                  image={icon3}
                  title="Live from space album cover"
                />
                <CardContent className={classes.cardContent}>
                  <Typography
                    component="h6"
                    variant="h6"
                    className={classes.cardTitle}
                  >
                    برنامه نویس و طراح وب
                  </Typography>
                  <div className={classes.cardFooter}>
                    <span>شغل: ۲۷۳</span>
                    <span>شرکت: ۱۷۶</span>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item md={4}>
              <Card className={classes.card} raised>
                <CardMedia
                  className={classes.icon}
                  image={icon2}
                  title="Live from space album cover"
                />
                <CardContent className={classes.cardContent}>
                  <Typography
                    component="h6"
                    variant="h6"
                    className={classes.cardTitle}
                  >
                    دیجیتال مارکتینگ
                  </Typography>
                  <div className={classes.cardFooter}>
                    <span>شغل: ۲۷۳</span>
                    <span>شرکت: ۱۷۶</span>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item md={4}>
              <Card className={classes.card} raised>
                <CardMedia
                  className={classes.icon}
                  image={icon1}
                  title="Live from space album cover"
                />
                <CardContent className={classes.cardContent}>
                  <Typography
                    component="h6"
                    variant="h6"
                    className={classes.cardTitle}
                  >
                    مهندس پتروشیمی
                  </Typography>
                  <div className={classes.cardFooter}>
                    <span>شغل: ۲۷۳</span>
                    <span>شرکت: ۱۷۶</span>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </MContainer>
  );
}

export default PopularJobs;
