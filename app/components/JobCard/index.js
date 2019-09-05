/**
 *
 * JobCard
 *
 */

import React from 'react';
import classNames from 'classnames';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import icon1 from 'app/assets/images/icon-1.png';
import icon2 from 'app/assets/images/icon-2.png';
import icon3 from 'app/assets/images/icon-3.png';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import styles from './style';

const selectIcon = icon => {
  if (icon === 1) return icon1;
  if (icon === 2) return icon2;
  return icon3;
};

function JobCard(props) {
  const classes = styles();
  const { job, hideNavigation, className, onDelete, showSentDetails } = props;
  const cardClasses = classNames(classes.card, className);
  console.log(showSentDetails);
  return (
    <Card className={cardClasses} raised>
      {onDelete && (
        <div
          className={classNames(classes.deleteIcon, 'delete-icon')}
          onClick={onDelete}
        >
          <i className="flaticon-close" />
        </div>
      )}
      <CardMedia
        className={classes.cover}
        image={selectIcon(job.icon)}
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5" className={classes.title}>
            {job.title}
          </Typography>
          <Grid container space={10} className={classes.icons}>
            <Grid item md={6}>
              <i className="i-company" />
              {job.company}
            </Grid>
            <Grid item md={6}>
              <i className="i-location" />
              {job.location}
            </Grid>
          </Grid>
        </CardContent>
        {showSentDetails && (
          <div className={classes.sentDetail}>
            <div> تاریخ ارسال: {job.date}</div>
            <Typography>{job.state}</Typography>
          </div>
        )}
        {!hideNavigation && (
          <div className={classes.arrow}>
            <i className="i-arrow-left" />
          </div>
        )}
      </div>
    </Card>
  );
}

JobCard.propTypes = {
  job: PropTypes.object.isRequired,
  hideNavigation: PropTypes.bool,
  className: PropTypes.string,
  onDelete: PropTypes.func,
  showSentDetails: PropTypes.bool,
};

export default JobCard;
