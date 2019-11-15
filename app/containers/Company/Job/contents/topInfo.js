import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Typography } from '@material-ui/core';
import MButton from 'mui/MButton';

const job = {
  id: 1,
  title: 'مدیر فنی و پشتیبانی',
  company: 'ایرانسل',
  location: 'تهران',
  icon: 1,
};

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
}));

function TopInfo(props) {
  const classes = styles();
  const { showSendCVDialog, showShareJobDialog } = props;

  return (
    <div>
      <Typography variant="h5" component="h5" className={classes.panelHead}>
        مدیر فنی و پشتیبانی
        <MButton
          className={classes.btnBlue}
          onClick={() => showSendCVDialog(job)}
          variant="contained"
        >
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
          <MButton className={classes.icoInfo} onClick={showShareJobDialog}>
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
    </div>
  );
}

TopInfo.propTypes = {
  showSendCVDialog: PropTypes.func.isRequired,
  showShareJobDialog: PropTypes.func.isRequired,
};

export default TopInfo;
