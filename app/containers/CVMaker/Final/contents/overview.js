import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import AvatarUploader from 'app/components/AvatarUploader';
import { styled } from 'styled-components';
import { MButton } from 'mui/index';
import MChip from 'mui/MChip';

const styles = makeStyles(theme => ({
  firstRow: {
    display: 'flex',
    '& div:first-child': {
      flexBasis: 70,
    },
    '& div:last-child': {
      flexGrow: 1,
    },
  },
  progressInfo: {
    '& span': {
      color: theme.palette.primary.main,
      marginRight: 5,
      '&:first-child': {
        fontWeight: 900,
      },
    },
  },
  progress: {
    position: 'relative',
    height: 6,
    background: '#efefef',
    borderRadius: 4,
    '& div:last-child': {
      position: 'absolute',
      top: -8,
      left: '79%',
      width: 22,
      height: 22,
      background: '#91ffc6',
      borderRadius: 10,
      textAlign: 'center',
      lineHeight: '22px',
      fontSize: 9,
      fontWeight: 900,
      color: '#666',
    },
  },
  progressBorder: {
    height: 6,
    width: '80%',
    borderRadius: 4,
    padding: 1,
    marginTop: 10,
    background:
      'linear-gradient(90deg, rgb(123,221,180) 0%, rgb(123,221,180) 20%, rgb(112,167,136) 100%)',
    '& div': {
      height: 4,
      borderRadius: 4,
      background:
        'linear-gradient(90deg, rgb(79,255,182) 0%, rgb(68,190,129) 100%)',
    },
  },
  btnChangeTemplate: {
    color: '#333',
    marginTop: 10,
  },
  actions: {
    textAlign: 'right',
    marginBottom: 10,
  },
  action: {
    color: '#888',
    fontSize: 12,
    margin: '0 5px',
    '& i:before': {
      color: theme.palette.primary.main,
      fontSize: 16,
      marginRight: 8,
    },
  },
  remainContain: {
    display: 'flex',
    fontSize: 12,
    '&>div:first-child': {
      flexGrow: 1,
      textAlign: 'right',
      paddingRight: 10,
      whiteSpace: 'nowrap',
    },
    '& .MuiChip-root': {
      marginBottom: 10,
    },
  },
}));

function Overview() {
  const classes = styles();
  return (
    <Grid container spacing={4}>
      <Grid item md={6} className={classes.firstRow}>
        <div>
          <AvatarUploader small />
        </div>
        <div>
          <div className={classes.progressInfo}>
            <span>20</span>
            <span>درصد</span>
            تا تکمیل رزومه
          </div>
          <div className={classes.progress}>
            <div className={classes.progressBorder}>
              <div />
            </div>
            <div>80%</div>
          </div>
          <MButton className={classes.btnChangeTemplate}>
            تعویض قالب رزومه
          </MButton>
        </div>
      </Grid>
      <Grid item md={6}>
        <div className={classes.actions}>
          <MButton className={classes.action}>چاپ رزومه</MButton>
          <MButton className={classes.action}>
            <i className="flaticon-share" />
            اشتراک گذاری
          </MButton>
          <MButton className={classes.action}>
            <i className="flaticon-download" />
            ذخیره رزومه
          </MButton>
        </div>
        <div className={classes.remainContain}>
          <div>اطلاعات تکمیل نشده:</div>
          <div>
            <MChip small orange label="اطلاعات تحصیلی" />
            <MChip small orange label="تصویر پروفایل" />
            <MChip small orange label="تصویر پروفایل" />
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

export default Overview;
