import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Typography, makeStyles, Grid } from '@material-ui/core';
import { isEmpty } from 'underscore';
import cover from 'app/assets/images/temp/companies_cover.jpg';

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
      margin: '0 .5rem 2rem',
    },
    '& h2': {
      margin: '1rem 0',
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
    </div>
  );
}

CompanyInfo.propTypes = {
  company: PropTypes.object.isRequired,
};

export default CompanyInfo;
