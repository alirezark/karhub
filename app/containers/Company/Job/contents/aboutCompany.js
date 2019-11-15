import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import MChip from 'mui/MChip';
import MButton from 'mui/MButton';

const styles = makeStyles(theme => ({
  panelHead: {
    fontWeight: 900,
    marginBottom: '1rem',
    lineHeight: '3rem',
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
      {`با توجه به محدودیت‌های مختلف در حوزه مبادلات و پرداخت‌های بین‌المللی و همچنین توسعه تکنولوژی‌های نوین دنیا، سپهر به عنوان پیشگام در توسعه کسب و کارهای نوین و روشهای مبادلات نوین می‌باشد. تیم ما در ارائه محصولات جهت تسهیل مبادلات صنایع مختلف تمرکز دارد. ما همچنین در توسعه و نگهداری محصولات نرم‌افزاری، پورتال‌های تجارت الکترونیک، بازار، تجزیه و تحلیل کسب و کار تجارب زیادی داریم.  سپهر به عنوان پیشگام در توسعه کسب و کارهای نوین و روشهای مبادلات نوین می‌باشد. تیم ما در ارائه محصولات جهت تسهیل مبادلات صنایع مختلف تمرکز دارد.`}
      <Grid container spacing={2} style={{ marginTop: '1rem' }}>
        <Grid item md={3} className={classes.infoTags}>
          <Typography variant="h5">صنعت:</Typography>
          <MChip className={classes.Chip} label="برنامه نویس و مدیر فنی" />
        </Grid>
        <Grid item md={3} className={classes.infoTags}>
          <Typography variant="h5">سال تاسیس:</Typography>
          <MChip className={classes.Chip} label="1389" />
        </Grid>
        <Grid item md={3} className={classes.infoTags}>
          <Typography variant="h5">تعداد کارمندان:</Typography>
          <MChip className={classes.Chip} label="۱۰۰ الی ۲۰۰ نفر" />
        </Grid>
        <Grid item md={3} className={classes.infoTags}>
          <Typography variant="h5">تعداد کارمندان:</Typography>
          <MChip className={classes.Chip} label="خصوصی" />
        </Grid>
      </Grid>

      <Typography
        variant="h5"
        component="h5"
        className={classes.panelHead}
        style={{ margin: 0 }}
      >
        چرا ما؟
        <MButton className={classes.btnGreenLink} variant="contained">
          مشاهده پروفایل شرکت
        </MButton>
      </Typography>
      <Typography className={classes.tabInfo}>
        {
          // eslint-disable-next-line max-len
          'با توجه به محدودیت‌های مختلف در حوزه مبادلات و پرداخت‌های بین‌المللی و همچنین توسعه تکنولوژی‌های نوین دنیا، سپهر به عنوان پیشگام در توسعه کسب و کارهای نوین و روشهای مبادلات نوین می‌باشد. تیم ما در ارائه محصولات جهت تسهیل مبادلات صنایع مختلف تمرکز دارد.ما همچنین در توسعه و نگهداری محصولات نرم‌افزاری، پورتال‌های تجارت الکترونیک، بازار، تجزیه و تحلیل کسب و کار تجارب زیادی داریم. '
        }
      </Typography>
    </div>
  );
}

export default JobDescription;
