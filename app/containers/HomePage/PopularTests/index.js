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
                    آزمون هوش‌های چندگانه Aptitude Test
                  </Typography>
                  <div className={classes.cardFooter}>
                    <span>سوال: ۳۰</span>
                    <span>دقیقه: ۴۵</span>
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
                    آزمون هوش‌های چندگانه Aptitude Test
                  </Typography>
                  <div className={classes.cardFooter}>
                    <span>سوال: ۳۰</span>
                    <span>دقیقه: ۴۵</span>
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
                    آزمون هوش‌های چندگانه Aptitude Test
                  </Typography>
                  <div className={classes.cardFooter}>
                    <span>سوال: ۳۰</span>
                    <span>دقیقه: ۴۵</span>
                  </div>
                </CardContent>
              </Card>
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
