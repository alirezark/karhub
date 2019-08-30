import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import MButton from 'mui/MButton';

const styles = makeStyles(() => ({
  root: {
    textAlign: 'center',
  },
  label: {
    margin: '4rem 0 !important',
    color: '#606062',
    fontSize: '.85rem',
    lineHeight: '32px',
  },
  button: {
    fontSize: 18,
    lineHeight: '36px',
  },
}));

function CloseAccount() {
  const classes = styles();

  const handleCloseAccount = () => window.confirm('Are you sure?');

  return (
    <div className={classes.root}>
      <Typography className={classes.label}>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون. متن
        ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
        است.
      </Typography>
      <div>
        <MButton
          variant="contained"
          color="secondary"
          className={classes.button}
          onClick={handleCloseAccount}
        >
          بستن حساب کاربری
        </MButton>
      </div>
    </div>
  );
}

export default CloseAccount;
