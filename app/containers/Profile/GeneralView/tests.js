import React from 'react';
import PropTypes from 'prop-types';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import icon1 from 'app/assets/images/icons/Aptitude Test.png';
import icon2 from 'app/assets/images/icons/bar_on test.png';
import icon3 from 'app/assets/images/icons/mbti_test.png';

const styles = makeStyles(theme => ({
  panel: {
    borderRadius: 8,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    '& img': {
      maxWidth: 70,
    },
  },
  detail: {
    flexGrow: 1,
    padding: 22,
    '& h2': {
      fontWeight: 900,
      flexGrow: 1,
      fontSize: '1rem',
    },
    '& h3': {
      fontWeight: 500,
      flexGrow: 1,
      fontSize: 16,
    },
    '& div': {
      display: 'flex',
      alignItems: 'center',
    },
  },
  secondRow: {
    marginTop: '1rem',
  },
  viewLink: {
    color: theme.palette.primary.main,
    fontSize: 12,
  },
  arrow: {
    flexBasis: '40px',
    textAlign: 'center',
  },
  separator: {
    borderBottom: '1px solid #ccc',
    marginLeft: 90,
  },
}));

const selectIcon = icon => {
  if (icon === 1) return icon1;
  if (icon === 2) return icon2;
  return icon3;
};

function Tests(props) {
  const classes = styles();
  const { tests } = props;

  return (
    <Grid container>
      {tests.map(test => (
        <Grid key={test.id} item md={12}>
          <div className={classes.panel}>
            <div>
              <img alt="test" src={selectIcon(test.icon)} />
            </div>
            <div className={classes.detail}>
              <div>
                <Typography variant="h2">{test.title}</Typography>
                <div>تاریخ انجام: {test.date}</div>
              </div>
              <div className={classes.secondRow}>
                <Typography variant="h3">{test.description}</Typography>
                <div className={classes.viewLink}>مشاهده</div>
              </div>
            </div>
            <div className={classes.arrow}>
              <i className="i-arrow-left" />
            </div>
          </div>
          <div className={classes.separator} />
        </Grid>
      ))}
    </Grid>
  );
}

Tests.propTypes = {
  tests: PropTypes.array,
};

export default Tests;
