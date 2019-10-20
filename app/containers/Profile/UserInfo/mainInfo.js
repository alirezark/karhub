import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';
import { makeStyles, Typography, Link, Grid } from '@material-ui/core';
import MButton from 'mui/MButton';

const styles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
    marginTop: '1rem',
    '& h2': {
      fontWeight: 900,
    },
  },
  websiteLink: {
    margin: '.5rem 0',
    display: 'inline-block',
    '& i': {
      fontSize: 14,
      verticalAlign: 'middle',
      margin: '0 5px',
      color: '#4a4a4a',
    },
  },
  job: {
    fontSize: '1.17em',
  },
  iconInfo: {
    margin: '1rem 0',
    '& i': {
      color: theme.palette.primary.main,
      margin: '0 5px',
      verticalAlign: 'middle',
    },
  },
  footerInfoContain: {
    background: '#7BCCC4',
    color: '#606062',
    borderRadius: '0 0 8px 8px',
  },
  footerInfo: {
    padding: 10,
    display: 'inline-block',
    textAlign: 'initial',
    '& i': {
      float: 'left',
      '&:before': {
        fontSize: '1rem',
      },
    },
    '& div': {
      marginLeft: 20,
    },
    '& strong': {
      display: 'block',
      fontWeight: 900,
      marginBottom: 10,
    },
  },
  companyFooterInfo: {
    background: '#b5e2df',
    '& h3': {
      lineHeight: '40px',
    },
  },
  companyBtns: {
    width: '95%',
    margin: '0px auto 30px',
    whiteSpace: 'nowrap',
  },
}));

function UserInfoFooter({ user }) {
  const classes = styles();
  return (
    <div className={classes.footerInfoContain}>
      <Grid container>
        <Grid item md={3}>
          <div className={classes.footerInfo}>
            <i className="flaticon-telephone" />
            <div className={classes.footerInfoDetail}>
              <strong>موبایل:</strong>
              {user.mobile}
            </div>
          </div>
        </Grid>
        <Grid item md={3}>
          <div className={classes.footerInfo}>
            <i className="flaticon-e-mail" />
            <div className={classes.footerInfoDetail}>
              <strong>ایمیل:</strong>
              {user.email}
            </div>
          </div>
        </Grid>
        <Grid item md={3}>
          <div className={classes.footerInfo}>
            <i className="flaticon-location" />
            <div className={classes.footerInfoDetail}>
              <strong>آدرس:</strong>
              {user.address}
            </div>
          </div>
        </Grid>
        <Grid item md={3}>
          <div className={classes.footerInfo}>
            <i className="flaticon-calendar" />
            <div className={classes.footerInfoDetail}>
              <strong>تاریخ تولد:</strong>
              {user.birthDate}
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

UserInfoFooter.propTypes = {
  user: propTypes.object,
};

function CompanyFooterInfo() {
  const classes = styles();
  return (
    <div
      className={classNames(
        classes.footerInfoContain,
        classes.companyFooterInfo,
      )}
    >
      <Grid container spacing={3}>
        <Grid item md={4}>
          <Typography variant="h3"> تعداد آگهی ثبت شده: ۲۵ عدد</Typography>
        </Grid>
        <Grid item md={4}>
          <Typography variant="h3"> بسته فعال: موجود نیست</Typography>
        </Grid>
        <Grid item md={4}>
          <Typography variant="h3"> اعتبار:‌۰ تومان</Typography>
        </Grid>
      </Grid>
    </div>
  );
}

function MainInfo(props) {
  const classes = styles();
  const { user, role } = props;

  return (
    <div className={classes.root}>
      <Typography variant="h2">{user.name}</Typography>
      {role === 'user' && (
        <>
          <Link href={user.website} className={classes.websiteLink}>
            <i className="flaticon-link" />
            {user.website}
          </Link>
          <Typography className={classes.job}>{user.job}</Typography>
        </>
      )}
      <Grid container>
        <Grid item md={4} />
        <Grid item md={2}>
          <div className={classes.iconInfo}>
            <i className="flaticon-company" />
            {user.company}
          </div>
        </Grid>
        <Grid item md={2}>
          <div className={classes.iconInfo}>
            <i className="flaticon-location" />
            {user.city}
          </div>
        </Grid>
      </Grid>
      {role === 'company' && (
        <Grid container className={classes.companyBtns} spacing={3}>
          <Grid item md={3} />
          <Grid item md={3}>
            <MButton btnBlue fullWidth>مشاهده پروفایل شرکت</MButton>
          </Grid>
          <Grid item md={3}>
            <MButton btnBlue fullWidth>ارتقا پروفایل شرکت</MButton>
          </Grid>
        </Grid>
      )}
      {role === 'company' ? (
        <CompanyFooterInfo />
      ) : (
        <UserInfoFooter user={user} />
      )}
    </div>
  );
}

MainInfo.propTypes = {
  user: propTypes.object.isRequired,
  role: propTypes.string.isRequired,
};

export default MainInfo;
