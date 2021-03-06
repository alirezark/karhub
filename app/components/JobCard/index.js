/**
 *
 * JobCard
 *
 */

import React from 'react';
import classNames from 'classnames';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
} from '@material-ui/core';
import icon1 from 'app/assets/images/icon-1.png';
import icon2 from 'app/assets/images/icon-2.png';
import icon3 from 'app/assets/images/icon-3.png';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { MButton } from 'mui/index';
import styles from './style';

const selectIcon = icon => {
  if (icon === 1) return icon1;
  if (icon === 2) return icon2;
  return icon3;
};

function JobCard(props) {
  const classes = styles();
  const {
    job,
    hideNavigation,
    className,
    onDelete,
    showSentDetails,
    history,
    showSendCV,
    onClick,
    handleShowSendCV,
  } = props;
  const cardClasses = classNames(classes.card, className);

  const handleOpenJob = () => {
    if (onClick === undefined)
      history.push({
        pathname: `/Company/${job.id}`,
      });
    onClick();
  };

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
        className={classNames(classes.cover, 'card-cover')}
        image={selectIcon(job.icon)}
        title="Live from space album cover"
        onClick={handleOpenJob}
      />
      <div className={classes.details}>
        <CardContent className={classes.content} onClick={handleOpenJob}>
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
          <div className={classes.sentDetail} onClick={handleOpenJob}>
            <div> ?????????? ??????????: {job.date}</div>
            <Typography>{job.state}</Typography>
          </div>
        )}
        {showSendCV && (
          <div className={classes.sendCVContain}>
            <div>
              <MButton btnBlue onClick={handleShowSendCV}>
                ?????????? ??????????
              </MButton>
            </div>
            <div>
              <MButton iconic className={classes.btnBookmark}>
                <i className="flaticon-bookmark" />
                ??????????
              </MButton>
            </div>
          </div>
        )}
        {!hideNavigation && (
          <div className={classes.arrow} onClick={handleOpenJob}>
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
  showSendCV: PropTypes.bool,
  className: PropTypes.string,
  onDelete: PropTypes.func,
  onClick: PropTypes.func,
  showSentDetails: PropTypes.bool,
  history: PropTypes.object,
  handleShowSendCV: PropTypes.func,
};

export default withRouter(JobCard);
