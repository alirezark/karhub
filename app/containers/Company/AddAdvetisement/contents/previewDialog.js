import React from 'react';
import PropTypes from 'prop-types';
import { MDialog, MDialogContent, MDialogTitle } from 'mui/MDialog';
import { makeStyles, Typography, Grid } from '@material-ui/core';
import MButton from 'mui/MButton';
import MChip from 'mui/MChip';

const styles = makeStyles(() => ({
  textContain: {
    whiteSpace: 'pre',
    lineHeight: '24px',
    '& h3': {
      fontSize: 14,
      margin: '20px 0 15px',
    },
  },
  flexRow: {
    display: 'flex',
    alignItems: 'center',
    '&>div:first-child': {
      flexGrow: 1,
      alignItems: 'center',
      fontWeight: 300,
    },
    '& h3': {
      fontSize: 16,
      fontWeight: 800,
    },
  },
  panel: {
    background: '#fff',
    borderRadius: 8,
    boxShadow: '0 0 14px 0 rgba(178,178,178,0.5)',
    color: '#606062',
    fontSize: 14,
    fontWeight: 300,
    marginTop: 30,
    padding: '1px 20px 20px 20px',
  },
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
  title: {
    margin: '30px 0 20px',
    color: '#000',
    fontSize: 14,
  },
  footer: {
    margin: '50px 0 30px',
    textAlign: 'center',
  },
  btnSubmit: {
    width: 160,
    lineHeight: '30px',
    marginLeft: 10,
  },
}));

function PreviewDialog(props) {
  const classes = styles();
  const { open, onClose } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <MDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      fullWidth
      maxWidth="sm"
    >
      <MDialogTitle id="customized-dialog-title" onClose={handleClose}>
        بررسی نهایی آگهی شغلی
      </MDialogTitle>
      <MDialogContent>
        <div className={classes.panel}>
          <div className={classes.textContain}>
            <div className={classes.flexRow}>
              <div>
                <Typography variant="h3">برنامه نویس PHP</Typography>
              </div>
              <div>
                <MButton
                  className={classes.btnSubmit}
                  primaryOutlined
                  onClick={onClose}
                >
                  ویرایش
                </MButton>
              </div>
            </div>
            {`کارهاب      شهر: تهران       نوع همکاری: تمام وقت       حقوق: ‌۸ تا ۱۲ میلیون`}
            <Typography variant="h3">توضیحات شغل</Typography>
            {/* eslint-disable-next-line max-len */}
            {`برنامه نویس PHP سمت سرور با سطح تجرفه متوسط یا حرفه ای:
    - تسلط کامل بر زبان برنامه نویسی Java 8
    - تجربه بالا در توسعه سرویس های مبتنی بر j2ee با استفاده از Spring Framework
    - تجربه عملیاتی در استفاده از Spring Boot
    - تجربه کار با In-Memory Databases
موارد زیر جزو اولویت های استخدام است:
    - تجربه کار با انواع Message Brokers مانند Kafka
    - تجربه توسعه سرویس های مبتنی بر معماری Microservices
    - شناخت کامل بر Spring Cloud (Service Registry - Service Discovery - Gateway Service
    - آشنایی با معماری Reactive و شناخت WebFlux
    - شناخت کامل بر Spring Cloud (Service Registry - Service Discovery - Gateway Service
    - آشنایی با معماری Reactive و شناخت WebFlux`}
          </div>
          <Typography variant="h3" className={classes.title}>ویژگی ها:</Typography>
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
        <div className={classes.footer}>
          <MButton className={classes.btnSubmit} primary onClick={onClose}>
            تایید و ثبت
          </MButton>
          <MButton
            className={classes.btnSubmit}
            primaryOutlined
            onClick={onClose}
          >
            ویرایش
          </MButton>
        </div>
      </MDialogContent>
    </MDialog>
  );
}

PreviewDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default PreviewDialog;
