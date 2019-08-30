import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Grid, makeStyles, Typography } from '@material-ui/core';

const styles = makeStyles(theme => ({
  cvPanel: {
    borderRadius: 8,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    '&:hover': {
      boxShadow: '0 0 14px 0 rgba(75,187,129,0.5)',
      '& .delete-icon': {
        display: 'block',
      },
    },
  },
  cvDetail: {
    flexGrow: 1,
    padding: 22,
    '& h3': {
      fontWeight: 500,
    },
    '& p': {
      marginTop: 14,
      fontSize: 12,
      color: '#9B9B9B',
    },
  },
  viewLink: {
    color: theme.palette.primary.main,
    flexBasis: '60px',
    textAlign: 'center',
    fontSize: 12,
  },
  arrow: {
    flexBasis: '40px',
    textAlign: 'center',
  },
  deleteIcon: {
    position: 'absolute',
    top: 5,
    left: 5,
    opacity: '.7',
    cursor: 'pointer',
    display: 'none',
    '& i:before': {
      fontSize: 16,
    },
    '&:hover': {
      opacity: 1,
    },
  },
}));

function PaymentHistory(props) {
  const classes = styles();
  const { uploadedCV } = props;

  if (!uploadedCV) return <div />;

  return (
    <Grid container spacing={3}>
      {uploadedCV.map(cv => (
        <Grid key={cv.id} item md={6}>
          <div className={classes.cvPanel}>
            <div className={classes.cvDetail}>
              <div className={classNames(classes.deleteIcon, 'delete-icon')}>
                <i className="flaticon-close" />
              </div>
              <Typography variant="h3">{cv.title}</Typography>
              <Typography>تاریخ بارگذاری: {cv.date}</Typography>
            </div>
            <div className={classes.viewLink}>مشاهده</div>
            <div className={classes.arrow}>
              <i className="i-arrow-left" />
            </div>
          </div>
        </Grid>
      ))}
    </Grid>
  );
}

PaymentHistory.propTypes = {
  uploadedCV: PropTypes.array.isRequired,
};

export default PaymentHistory;
