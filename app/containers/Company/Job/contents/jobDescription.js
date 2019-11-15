import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import MChip from 'mui/MChip';

const styles = makeStyles(() => ({
  panelLine: {
    borderTop: '1px solid #979797',
    opacity: '.5',
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
}));

function JobDescription() {
  const classes = styles();

  return (
    <div>
      {/* eslint-disable-next-line max-len */}
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
  );
}

export default JobDescription;
