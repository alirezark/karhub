import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Typography, makeStyles, Grid } from '@material-ui/core';
import { isEmpty } from 'underscore';
import cover from 'app/assets/images/temp/companies_cover.jpg';
import map from 'app/assets/images/temp/map.jpg';
import QuoteCard from 'app/components/QuoteCard';

const quotes = [
  {
    id: 1,
    name: 'فرهاد جعفری',
    position: 'مدیر عامل استدیو ایکس',
    avatar: 'avatar1',
  },
  {
    id: 2,
    name: 'پدرام فرزین',
    position: 'مدیر عامل پتروشیمی',
    avatar: 'avatar2',
  },
  {
    id: 3,
    name: 'فرهاد جعفری',
    position: 'مدیر عامل استدیو ایکس',
    avatar: 'avatar1',
  },
];

const styles = makeStyles(theme => ({
  root: {
    '& p': {
      marginBottom: '2.5rem',
      lineHeight: '28px',
      fontWeight: 300,
    },
    '& img': {
      maxWidth: '100%',
      maxHeight: 300,
      margin: '0 .5rem',
    },
    '& h2': {
      margin: '3rem 0 1rem',
      color: theme.palette.primary.main,
    },
  },
  circle: {
    width: 87,
    height: 87,
    padding: '10px 25px',
    whiteSpace: 'nowrap',
    borderRadius: 87,
    '& div': {
      fontWeight: 300,
      margin: '5px 0 2px',
      fontSize: '1rem',
    },
    '& span': {
      fontWeight: 900,
    },
  },
  color1: {
    background: '#ddf1f0',
    color: '#49bb7d',
  },
  color2: {
    background: '#fdecd0',
    color: '#f7c049',
  },
  color3: {
    background: '#d1edde',
    color: '#509c92',
  },
  color4: {
    background: '#dce2f2',
    color: '#3b69d9',
  },
  quote: {
    '& .card-text': {
      fontSize: '.7rem',
      color: '#9a9a9a',
      lineHeight: '24px',
      textAlign: 'center',
    },
    '& .card-avatar': {
      width: 100,
      height: 100,
      margin: '-50px',
    },
  },
  bottomInfo: {
    marginTop: '3rem',
    '& h3': {
      color: '#9a9a9a',
      fontWeight: 800,
      margin: '2rem 0 1.5rem',
    },
    '& p': {
      margin: '.6rem 0',
      color: '#949494',
    },
  },
}));

function CompanyInfo(props) {
  const classes = styles();
  const { company } = props;

  if (isEmpty(company)) return <div />;

  return (
    <div className={classes.root}>
      <Typography>{company.description}</Typography>
      <img src={cover} alt={company.name} />
      <Typography variant="h2">چرا ما؟</Typography>
      <Typography>{company.whyUs}</Typography>
      <Grid container spacing={3}>
        <Grid item md={3}>
          <div className={classes.circleInfo}>
            <div className={classNames(classes.circle, classes.color1)}>
              <div>صنعت:</div>
              <span>نام صنعت مورد نظر</span>
            </div>
          </div>
        </Grid>
        <Grid item md={3}>
          <div className={classes.circleInfo}>
            <div className={classNames(classes.circle, classes.color2)}>
              <div>ساعت تاسیس:</div>
              <span>1389</span>
            </div>
          </div>
        </Grid>
        <Grid item md={3}>
          <div className={classes.circleInfo}>
            <div className={classNames(classes.circle, classes.color3)}>
              <div>تعداد کارمندان:</div>
              <span>۱۰۰ الی ۲۰۰ نفر</span>
            </div>
          </div>
        </Grid>
        <Grid item md={3}>
          <div className={classes.circleInfo}>
            <div className={classNames(classes.circle, classes.color4)}>
              <div>مالکیت:</div>
              <span>نیمه دولتی</span>
            </div>
          </div>
        </Grid>
      </Grid>
      <Typography variant="h2">نظر کارفرما در مورد {company.name}</Typography>
      <Grid container spacing={1}>
        {quotes.map(quote => (
          <Grid key={quote.id} item md={4}>
            <QuoteCard className={classes.quote} quote={quote} />
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={4} className={classes.bottomInfo}>
        <Grid item md={6}>
          <img src={map} alt="map" />
        </Grid>
        <Grid item md={6}>
          <Typography variant="h3">اطلاعات تماس:</Typography>
          <Typography>ایمیل: farhad.846@gmail.com</Typography>
          <Typography>
            آدرس: تهران. میدان صنعت. خیابان ایکس. کوچه وای. پ ۴
          </Typography>
          <Typography>تلفن: ۰۲۱۴۲۰۰۲۱۲ - ۰۲۱۴۲۰۰۲۱۳ - ۰۲۱۴۲۰۰۲۱۴</Typography>
        </Grid>
      </Grid>
    </div>
  );
}

CompanyInfo.propTypes = {
  company: PropTypes.object.isRequired,
};

export default CompanyInfo;
