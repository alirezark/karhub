import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { MButton } from 'mui/index';

const styles = makeStyles(() => ({
  root: {
    width: '70%',
    background: '#f5f5f5',
    borderRadius: 6,
    padding: 15,
    margin: '20px auto',
  },
  titleRow: {
    display: 'flex',
    '& h2': {
      marginTop: 5,
    },
    '&>div:first-child': {
      flexGrow: 1,
    },
  },
  btnEdit: {
    fontSize: 12,
    color: '#509b96',
  },
  btnDelete: {
    fontSize: 12,
    color: '#ff2929',
  },
  subHead: {
    margin: '3px 0 15px',
    fontSize: 12,
    color: '#717171',
    fontWeight: 300,
  },
  content: {
    fontSize: 14,
    color: '#bbb',
    fontWeight: 300,
  },
}));

function Preview() {
  const classes = styles();

  return (
    <div className={classes.root}>
      <div className={classes.titleRow}>
        <div>
          <Typography variant="h2">طراح تجربه کاربری</Typography>
        </div>
        <div>
          <MButton className={classes.btnEdit}>ویرایش</MButton>
          <MButton className={classes.btnDelete}>حذف</MButton>
        </div>
      </div>
      <div className={classes.subHead}>مدت زمان همکاری: ۱سال و ۶ ماه</div>
      <Typography className={classes.content}>
        با توجه به محدودیت های مختلف در حوزه مبادلات و پرداخت های بین المللی و
        همچنین توسعه تکنولوژی های نوین دنیا. سپهر به عنوان پیشگام در توسعه کسب و
        کارهای نوینو روش های مبادلات نوین می باشد. تیم ما در ارایه محصولات جهت
        تسهیل مبادلات صنایع مختلف تمرکز دارد.
      </Typography>
    </div>
  );
}

export default Preview;
