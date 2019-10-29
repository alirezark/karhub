import React from 'react';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = makeStyles(theme => ({
  root: {
    margin: '100px auto 0',
    width: '90%',
  },
  featBox: {
    textAlign: 'center',
    padding: theme.spacing(5),
    '& h2': {
      fontWeight: 'bold',
      marginTop: 10,
      marginBottom: 5,
    },
    '& p': {
      fontSize: '.65rem',
      marginTop: '1rem',
      lineHeight: '20px',
      color: '#606062',
    },
  },
}));

function Features() {
  const classes = styles();

  return (
    <Grid container spacing={10} className={classes.root}>
      <Grid item md={4} className={classes.featBox}>
        <i className="ic-create-cv"/>
        <Typography variant="h2">
          مزیت اول
        </Typography>
        <Typography variant="body2">
          به راحتی رزومه خودت رو بساز و برای کارفرما ارسال کن
        </Typography>
      </Grid>
      <Grid item md={4} className={classes.featBox}>
        <i className="ic-tests"/>
        <Typography variant="h2">
          مزیت دوم
        </Typography>
        <Typography variant="body2">
          با شرکت در آزمون های کارهاب خودت رو بسنج و عملکرد بهتری داشته باش
        </Typography>
      </Grid>
      <Grid item md={4} className={classes.featBox}>
        <i className="ic-company-info"/>
        <Typography variant="h2">
          مزیت سوم
        </Typography>
        <Typography variant="body2">
          به راحتی رزومه خودت رو بساز و برای کارفرما ارسال کن
        </Typography>
      </Grid>
    </Grid>);
}

export default Features;
