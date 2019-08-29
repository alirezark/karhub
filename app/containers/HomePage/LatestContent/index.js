import React from 'react';
import { FormattedMessage } from 'react-intl';
import MContainer from 'mui/MContainer';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import imgInterview from 'app/assets/images/interview.jpg';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Link from '@material-ui/core/Link';
import styles from './style';
import messages from './messages';

function Companies() {
  const classes = styles();

  return (
    <MContainer maxWidth="md" mt={6} className={classes.root}>
      <Typography component="h2" variant="h2" className={classes.title}>
        <FormattedMessage {...messages.title} />
      </Typography>
      <Grid container spacing={5}>
        <Grid item md={4}>
          <Card className={classes.card} raised>
            <CardMedia
              className={classes.cardMedia}
              image={imgInterview}
              title="Live from space album cover"
            />
            <CardContent className={classes.cardContent}>
              <Typography
                component="h6"
                variant="h6"
                className={classes.cardTitle}
              >
                ۱۰ اشتباه بزرگ که ممکن است در یک مصاحبه شغلی مرتکب شوید!
              </Typography>
              <Typography
                variant="subtitle2"
                className={classes.cardDescription}
              >
                بعد از برگزاری موفقیت‌آمیز دومین آزمون استخدام بخش خصوصی در
                سراسر کشور و معرفی پذیرفته‌شدگان به شرکت‌های متقاضی نیرو در طی
                مرحله حضوری…
              </Typography>
              <div className={classes.cardFooter}>
                <span>۱۳۹۸/۰۳/۰۲</span>
                <Link to="/" component="button">
                  مشاهده
                </Link>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={4}>
          <Card className={classes.card} raised>
            <CardMedia
              className={classes.cardMedia}
              image={imgInterview}
              title="Live from space album cover"
            />
            <CardContent className={classes.cardContent}>
              <Typography
                component="h6"
                variant="h6"
                className={classes.cardTitle}
              >
                ۱۰ اشتباه بزرگ که ممکن است در یک مصاحبه شغلی مرتکب شوید!
              </Typography>
              <Typography
                variant="subtitle2"
                className={classes.cardDescription}
              >
                بعد از برگزاری موفقیت‌آمیز دومین آزمون استخدام بخش خصوصی در
                سراسر کشور و معرفی پذیرفته‌شدگان به شرکت‌های متقاضی نیرو در طی
                مرحله حضوری…
              </Typography>
              <div className={classes.cardFooter}>
                <span>۱۳۹۸/۰۳/۰۲</span>
                <Link to="/" component="button">
                  مشاهده
                </Link>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={4}>
          <Card className={classes.card} raised>
            <CardMedia
              className={classes.cardMedia}
              image={imgInterview}
              title="Live from space album cover"
            />
            <CardContent className={classes.cardContent}>
              <Typography
                component="h6"
                variant="h6"
                className={classes.cardTitle}
              >
                ۱۰ اشتباه بزرگ که ممکن است در یک مصاحبه شغلی مرتکب شوید!
              </Typography>
              <Typography
                variant="subtitle2"
                className={classes.cardDescription}
              >
                بعد از برگزاری موفقیت‌آمیز دومین آزمون استخدام بخش خصوصی در
                سراسر کشور و معرفی پذیرفته‌شدگان به شرکت‌های متقاضی نیرو در طی
                مرحله حضوری…
              </Typography>
              <div className={classes.cardFooter}>
                <span>۱۳۹۸/۰۳/۰۲</span>
                <Link to="/" component="button">
                  مشاهده
                </Link>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </MContainer>
  );
}

export default Companies;
