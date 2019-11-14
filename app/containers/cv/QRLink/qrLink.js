import React from 'react';
import { makeStyles, Typography, Link } from '@material-ui/core';

const styles = makeStyles(() => ({
  root: {
    fontSize: 14,
  },
  qrContain: {
    textAlign: 'right',
    '& div': {
      width: 125,
      height: 125,
      borderRadius: 8,
      background: '#d8d8d8',
      display: 'inline-block',
      margin: '10px 0',
    },
  },
  link: {
    color: '#666',
    float: 'right',
    '& i:before': {
      fontSize: 19,
      marginLeft: 2,
    },
  },
}));

function QRLink() {
  const classes = styles();
  return (
    <div className={classes.root}>
      <Typography>
        برای مشاهده توضیحات کامل درباره نتایج آزمون شخصیت شناسی کد مقابل را اسکن
        کنید
      </Typography>
      <div className={classes.qrContain}>
        <div />
      </div>
      <Link
        to="http://inre.ir"
        target="_blank"
        rel="noopener"
        className={classes.link}
      >
        <i className="flaticon-link" /> http://inre.ir/test/A1288HQ
      </Link>
    </div>
  );
}

export default QRLink;
