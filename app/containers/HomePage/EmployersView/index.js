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
import imgTestmonial from '../../../assets/images/icons/testmonial_h.png';
import icon1 from '../../../assets/images/icons/chim_job.png';
import icon2 from '../../../assets/images/icons/digital_marketer.png';
import icon3 from '../../../assets/images/icons/web_developer.png';
import MAvatar from 'mui/MAvatar';
import imgAvatar1 from '../../../assets/images/avatar_grey_1.jpg';
import imgAvatar2 from '../../../assets/images/avatar_grey_2.jpg';
import imgQuote from '../../../assets/images/icons/qoute.png';

function EmployersView() {
  const classes = styles();

  return (
    <MContainer maxWidth="md" mt={6} className={classes.root}>
      <Typography variant="h1" component="h1" className={classes.sectionHead}>
        <FormattedMessage {...messages.title} />
      </Typography>
      <Grid container>
        <Grid item md={3}>
          <img alt="Tests" className={classes.section_img} src={imgTestmonial} />
        </Grid>
        <Grid item md={9}>
          <Grid container>
            <Grid item md={6}>
              <Card className={classes.card} raised>
                <MAvatar
                  src={imgAvatar2}
                  alt="user name"
                />
                <CardContent className={classes.cardContent}>
                  <Typography
                    component="h5"
                    variant="h5"
                    className={classes.cardTitle}
                  >
                    فرهاد جعفری
                  </Typography>
                  <Typography
                    component="subtitle2"
                    variant="subtitle2"
                    className={classes.cardSubTitle}>
                    مدیر عامل استدیو ایکس
                  </Typography>
                  <div className={classes.cardSeparator}>
                    <img src={imgQuote} />
                    <span></span>
                  </div>
                  <Typography
                    component="subtitle2"
                    variant="subtitle2"
                    className={classes.cardText}>
                    با شرکت در آزمون‌های کارهاب خودت رو بسنج و عملکرد بهتری داشته باش! شما میتوانید با انتخاب یکی از آزمون ها وارد صفحه آزمون شده و این متن به صورت تست می‌باشدبهتری داشته باش! شما میتوانید با انتخاب یکی شما میتوانید با انتخاب یکی  .
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item md={6}>
              <Card className={classes.card} raised>
                <MAvatar
                  src={imgAvatar1}
                  alt="user name"
                />
                <CardContent className={classes.cardContent}>
                  <Typography
                    component="h5"
                    variant="h5"
                    className={classes.cardTitle}
                  >
                    پدرام فرزین
                  </Typography>
                  <Typography
                    component="subtitle2"
                    variant="subtitle2"
                    className={classes.cardSubTitle}>
                    مدیر عامل پتروشیمی
                  </Typography>
                  <div className={classes.cardSeparator}>
                    <img src={imgQuote} />
                    <span></span>
                  </div>
                  <Typography
                    component="subtitle2"
                    variant="subtitle2"
                    className={classes.cardText}>
                    با شرکت در آزمون‌های کارهاب خودت رو بسنج و عملکرد بهتری داشته باش! شما میتوانید با انتخاب یکی از آزمون ها وارد صفحه آزمون شده و این متن به صورت تست می‌باشدبهتری داشته باش! شما میتوانید با انتخاب یکی شما میتوانید با انتخاب یکی  .
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </MContainer>
  );
}

export default EmployersView;
