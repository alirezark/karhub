import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import { MAvatar, MBtnLink } from 'mui/index';
import imgAvatar from 'app/assets/images/avatar.jpeg';

const styles = makeStyles(theme => ({
  avatar: {
    position: 'relative',
    right: 0,
    margin: 0,
    width: 135,
    height: 135,
    padding: 5,
    boxShadow: '0 0 7px 0 rgba(178,178,178,0.75)',
    border: 'none',
  },
  profileInfoContain: {
    marginBottom: 40,
  },
  profileInfo: {
    display: 'flex',
    '&>div:first-child': {
      flexBasis: 145,
      flexGrow: 0,
      flexShrink: 0,
    },
  },
  userMainInfos: {
    '& h1': {
      fontWeight: 800,
      margin: '40px 10px 0',
    },
    '& h2': {
      fontWeight: 400,
      fontSize: 16,
      color: '#888',
      margin: 10,
    },
  },
  btnLink: {
    '&&': {
      color: theme.palette.primary.main,
      padding: '2px 10px',
      fontSize: 14,
    },
    '&& i:before': {
      color: '#666',
      fontSize: 20,
      verticalAlign: '2px',
    },
  },
  userInfo: {
    marginBottom: 20,
    '& .label': {
      color: theme.palette.primary.main,
      fontSize: 14,
      '& i:before': {
        color: '#666',
        verticalAlign: 'middle',
      },
    },
    '&>div:last-child': {
      fontSize: 18,
      margin: '5px 0',
      fontWeight: 300,
      color: '#666',
    },
  },
}));

function CVPersonalsHorizontal() {
  const classes = styles();

  return (
    <Grid container spacing={3} className={classes.profileInfoContain}>
      <Grid item md={6} className={classes.profileInfo}>
        <div>
          <MAvatar className={classes.avatar} src={imgAvatar} />
        </div>
        <div className={classes.userMainInfos}>
          <Typography variant="h1">مانکی دی لوفی</Typography>
          <Typography variant="h2">پیاده سازی رابط کاربری وب</Typography>
          <MBtnLink to="www.go.com" iconic className={classes.btnLink}>
            www.MonkeyDLuffy.com
            <i className="flaticon-link" />
          </MBtnLink>
        </div>
      </Grid>
      <Grid item md={6}>
        <Grid container spacing={3}>
          <Grid item md={6}>
            <div className={classes.userInfo}>
              <div className="label">
                <i className="flaticon-telephone" /> موبایل:
              </div>
              <div>۰۹۱۲۳۵۴۶۴۸۴</div>
            </div>
            <div className={classes.userInfo}>
              <div className="label">
                <i className="flaticon-e-mail" /> ایمیل:
              </div>
              <div>alavi.ali@gmail.com</div>
            </div>
          </Grid>
          <Grid item md={6}>
            <div className={classes.userInfo}>
              <div className="label">
                <i className="flaticon-location" /> آدرس:
              </div>
              <div>تهران. یاخچی آباد ...</div>
            </div>
            <div className={classes.userInfo}>
              <div className="label">
                <i className="flaticon-calendar" /> تاریخ تولد:
              </div>
              <div>۱۳۶۸/۱۲/۳</div>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default CVPersonalsHorizontal;
