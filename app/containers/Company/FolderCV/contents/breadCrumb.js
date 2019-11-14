import React from 'react';
import { Breadcrumbs, Grid, makeStyles, Typography } from '@material-ui/core';
import { NavigateBefore as NavigateBeforeIcon } from '@material-ui/icons';

const styles = makeStyles(theme => ({
  root: {
    padding: '20px 0',
  },
  breadcrumb: {
    '& p': {
      fontSize: 12,
      color: '#818181',
      cursor: 'pointer',
    },
    '& li:last-child p': {
      color: theme.palette.primary.main,
      cursor: 'default',
    },
  },
}));

function BreadCrumb() {
  const classes = styles();

  return (
    <div className={classes.root}>
      <Breadcrumbs
        separator={<NavigateBeforeIcon fontSize="small" />}
        aria-label="breadcrumb"
        className={classes.breadcrumb}
      >
        <Typography>خانه</Typography>
        <Typography>مدیریت آگهی ها</Typography>
        <Typography>طراح تجربه کاربری</Typography>
        <Typography>رزومه ایکس</Typography>
      </Breadcrumbs>
    </div>
  )
}

export default BreadCrumb;
