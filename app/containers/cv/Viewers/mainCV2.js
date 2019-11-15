import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import { MContainer } from 'mui/index';
import InlineMainCV from '../contents/inlineMainCV';
import CVPersonalsVertical from '../contents/cvPersonalsVertical';

const styles = makeStyles(theme => ({
  root: {
    background: '#7bccc5',
  },
  personalInfoContainer: {
    background: '#7bccc5',
  },
  contentContainer: {
    background: '#fff',
  },
  container: {
    [theme.breakpoints.up('lg')]: {
      '&&': {
        maxWidth: '900px',
      },
    },
  },
  cvContainer: {
    padding: '25px 20px',
  },
}));

function MainCV2() {
  const classes = styles();

  return (
    <div className={classes.root}>
      <MContainer smaller className={classes.container}>
        <Grid container spacing={0}>
          <Grid item md={4} className={classes.personalInfoContainer}>
            <CVPersonalsVertical theme="green" />
          </Grid>
          <Grid item md={8} className={classes.contentContainer}>
            <div className={classes.cvContainer}>
              <InlineMainCV />
            </div>
          </Grid>
        </Grid>
      </MContainer>
    </div>
  );
}

export default MainCV2;
