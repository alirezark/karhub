import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import MButton from 'mui/MButton';
import MChip from 'mui/MChip';

const styles = makeStyles(theme => ({
  panelHead: {
    fontWeight: 900,
    marginBottom: '1rem',
    lineHeight: '3rem',
  },
  btnBlue: {
    float: 'right',
    backgroundColor: '#6682C3',
    width: 180,
    height: 48,
  },
  icoInfoContain: {
    marginBottom: '1rem',
  },
  icoInfo: {
    marginRight: '2rem',
    fontWeight: 500,
    fontSize: 12,
    color: '#606062',
    '& i': {
      marginRight: '.5rem',
    },
    '&:last-child': {
      margin: 0,
    },
  },
  btnInfoContain: {
    float: 'right',
  },
  panelLine: {
    borderTop: '1px solid #979797',
    opacity: '.5',
  },
  rowInfo: {
    fontSize: 14,
    color: '#818181',
    lineHeight: '3rem',
    '& div': {
      fontSize: 14,
      fontWeight: 900,
      float: 'right',
      margin: 0,
    },
  },
  tabs: {
    padding: 0,
    borderBottom: '1px solid #ccc',
    '& button': {
      fontSize: '1rem',
      lineHeight: '3.5rem',
      padding: 0,
      minWidth: 82,
      marginRight: '1rem',
      '&.Mui-selected': {
        color: theme.palette.primary.main,
      },
    },
  },
  tabContent: {
    whiteSpace: 'pre-line',
    fontSize: 14,
    color: '#606062',
    lineHeight: '1.5rem',
    padding: 0,
    marginTop: '1rem',
  },
  infoTags: {
    '& h5': {
      marginBottom: '.8rem',
    },
  },
  Chip: {
    border: 'none',
    margin: '0 .5rem 1rem 0',
    '& .MuiChip-label': {
      padding: '0 18px',
      minWidth: 90,
      justifyContent: 'center',
    },
  },
  btnGreenLink: {
    color: theme.palette.primary.main,
    float: 'right',
    backgroundColor: 'transparent',
    height: 48,
  },
  tabInfo: {
    fontSize: 16,
    lineHeight: '2rem',
    color: '#606062',
  },
}));

function Jobs() {
  const classes = styles();

  return (
    <div className={classes.panel}>
      <Typography variant="h5" component="h5" className={classes.panelHead}>
        مدیر فنی و پشتیبانی
        <MButton className={classes.btnBlue} variant="contained">
          ارسال رزومه
        </MButton>
      </Typography>
      <div className={classes.icoInfoContain}>
        <span className={classes.icoInfo}>
          <i className="i-company" />
          ایرانسل
        </span>
        <span className={classes.icoInfo}>
          <i className="i-location" />
          تهران
        </span>
        <span className={classes.icoInfo}>
          <i className="i-company" />
          یک هفته پیش
        </span>
        <div className={classes.btnInfoContain}>
          <MButton className={classes.icoInfo}>
            <i className="i-location" />
            اشتراک
          </MButton>
          <MButton className={classes.icoInfo}>
            <i className="i-company" />
            ذخیره
          </MButton>
        </div>
      </div>

      <div className={classes.panelLine} />

      <Typography variant="h5" component="h5" className={classes.rowInfo}>
        ۴۸ نفر برای این موقعیت شغلی رزومه خود را ارسال کرد‌ه‌اند
        <div>محدوده حقوق: ۲ میلیون تا ۴ میلیون تومان</div>
      </Typography>

      <div className={classes.panelLine} />

      <div className={classes.tabContent}>
        {`                برای تجربه چالشهای پیش روی یه کسب و کار مالی و طراحی راهکارهای مناسب به تیم فنی ما بپیوندید برای تجربه چالشهای پیش روی یه کسب و کار مالی و طراحی راهکارهای مناسب به تیم فنی ما بپیوندید.

                توامندی های مورد انتظار:
                - تسلط کامل بر زبان برنامه نویسی Java 8
                - تجربه بالا در توسعه سرویس های مبتنی بر j2ee با استفاده از Spring Framework
                - تجربه عملیاتی در استفاده از Spring Boot
                - تجربه کار با In-Memory Databases
                - تجربه کار با انواع Message Brokers مانند Kafka
                - تجربه توسعه سرویس های مبتنی بر معماری Microservices
                - شناخت کامل بر Spring Cloud (Service Registry - Service Discovery - Gateway Service
                - آشنایی با معماری Reactive و شناخت WebFlux
                - شناخت کامل بر Spring Cloud (Service Registry - Service Discovery - Gateway Service
                - آشنایی با معماری Reactive و شناخت WebFlux`}
        <div className={classes.panelLine} style={{ margin: '1rem 0' }} />
        <Grid container space={2}>
          <Grid item md={4} className={classes.infoTags}>
            <Typography variant="h5">دسته بندی:</Typography>
            <MChip className={classes.Chip} label="طراح یوایکس" />
            <MChip className={classes.Chip} label="برنامه نویس" />
          </Grid>
          <Grid item md={4} className={classes.infoTags}>
            <Typography variant="h5">موقعیت مکانی:</Typography>
            <MChip className={classes.Chip} label="برنامه نویس" />
          </Grid>
          <Grid item md={4} className={classes.infoTags}>
            <Typography variant="h5">حداقل سابقه کار:</Typography>
            <MChip className={classes.Chip} label="سه سال" />
          </Grid>
        </Grid>
        <Grid container space={2}>
          <Grid item md={4} className={classes.infoTags}>
            <Typography variant="h5">نوع همکاری:</Typography>
            <MChip className={classes.Chip} label="برنامه نویس" />
            <MChip className={classes.Chip} label="برنامه نویس" />
            <MChip className={classes.Chip} label="برنامه نویس" />
          </Grid>
          <Grid item md={4} className={classes.infoTags}>
            <Typography variant="h5">نوع قرارداد:</Typography>
            <MChip className={classes.Chip} label="برنامه نویس و مدیر فنی" />
          </Grid>
          <Grid item md={4} className={classes.infoTags}>
            <Typography variant="h5">سطح ارشدیت:</Typography>
            <MChip className={classes.Chip} label="مهم نیست " />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Jobs;
