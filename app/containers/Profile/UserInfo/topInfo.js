import React from 'react';
import propTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import MButton from 'mui/MButton';

const styles = makeStyles(theme => ({
  root: {
    display: 'flex',
    padding: '8px 0 8px 20px',
  },
  menu: {
    flexBasis: '120px',
  },
  viewCount: {
    flexGrow: 1,
    lineHeight: '36px',
    '& span': {
      color: theme.palette.primary.main,
      fontWeight: 900,
      marginLeft: '.2rem',
    },
  },
  icoInfo: {
    fontWeight: 500,
    fontSize: 'inherit',
    color: 'inherit',
    '& i': {
      color: theme.palette.primary.light,
      marginRight: '.5rem',
    },
  },
}));

function TopInfo(props) {
  const classes = styles();
  const { viewCount, shareCV, downloadCV } = props;

  return (
    <div className={classes.root}>
      <div className={classes.viewCount}>
        بازدید از پروفایل شما:
        <span>{viewCount} بار</span>
      </div>
      <div className={classes.menu}>
        <MButton className={classes.icoInfo} onClick={shareCV}>
          <i className="flaticon-share" />
          اشتراک گذاری
        </MButton>
      </div>
      <div className={classes.menu}>
        <MButton className={classes.icoInfo} onClick={downloadCV}>
          <i className="flaticon-download" />
          ذخیره رزومه
        </MButton>
      </div>
    </div>
  );
}

TopInfo.propTypes = {
  viewCount: propTypes.number.isRequired,
  shareCV: propTypes.func.isRequired,
  downloadCV: propTypes.func.isRequired,
};

export default TopInfo;
