import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import MButton from 'mui/MButton';
import MBtnLink from 'mui/MBtnLink';

const styles = makeStyles(() => ({
  root: {
    margin: '100px 40px 0',
    width: '60%',
    position: 'relative',
    '& h1, & h2': {
      fontWeight: 900,
      fontSize: '2.5rem',
      marginBottom: 20,
      color: '#6b6b6d',
    },
    '& h2': {
      fontSize: '1.9rem',
    },
    '& p': {
      fontSize: 14,
      color: '#6b6b6d',
      lineHeight: '26px',
    },
  },
  headFooter: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 20,
    '& div:first-child': {
      flexGrow: 1,
    },
    cursor: 'pointer',
  },
  videoLink: {
    color: '#3a69db',
    fontWeight: 300,
    '& i:before': {
      fontSize: 30,
      verticalAlign: 'middle',
      color: '#aaa',
    },
  },
}));

function Explanation() {
  const classes = styles();
  return (
    <div className={classes.root}>
      <Typography variant="h1">به راحتی رزومه تو بساز,</Typography>
      <Typography variant="h2">و با یک کلیک ارسال کن!</Typography>
      <Typography>
        کارفرمایان معمولا برای هر موقعیت شغلی حقوق ثابتی را با تغییرات
        ناچیز در نظر می گیرند. برای آن ها فرقی نمی کند.
      </Typography>
      <div className={classes.headFooter}>
        <div>
          <div className={classes.videoLink}>
            {' '}
            <i className="flaticon-play-button" /> آموزش ساخت رزومه
          </div>
        </div>
        <div>
          <MBtnLink to="/CVMaker/SelectTemplate" primary>شروع ساخت رزومه</MBtnLink>
        </div>
      </div>
    </div>);
};

export default Explanation;
