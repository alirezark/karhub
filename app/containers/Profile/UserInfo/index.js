import React from 'react';
import { FormattedMessage } from 'react-intl';
import MContainer from 'mui/MContainer';
import PropTypes from 'prop-types';
import { Typography, Grid, Breadcrumbs, Link } from '@material-ui/core';
import messages from './messages';
import styles from './style';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import MAvatar from 'mui/MAvatar';
import imgAvatar2 from 'app/assets/images/avatar.jpeg';
import TopInfo from './TopInfo';

function UserInfo() {
  const classes = styles();

  const handleClick = function() {};

  return (
    <div className={classes.greyContainer}>
      <MContainer maxWidth="md" mt={6} className={classes.root}>
        <Grid container>
          <Grid item xs={12}>
            <Breadcrumbs
              separator={<NavigateBeforeIcon fontSize="small" />}
              aria-label="breadcrumb"
              className={classes.breadcrumb}
            >
              <Typography>خانه</Typography>
              <Typography>پروفایل</Typography>
            </Breadcrumbs>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item md={1} />
          <Grid item md={10}>
            <div className={classes.panel}>
              <MAvatar src={imgAvatar2} alt="user name" />
              <TopInfo viewCount={28} shareCV={handleClick} downloadCV={handleClick}/>
            </div>
          </Grid>
        </Grid>
      </MContainer>
    </div>
  );
}

UserInfo.propTypes = {
  user: PropTypes.object,
};

export default UserInfo;
