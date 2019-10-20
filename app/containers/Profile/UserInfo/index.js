import React from 'react';
// import { FormattedMessage } from 'react-intl';
import MContainer from 'mui/MContainer';
import PropTypes from 'prop-types';
import { Typography, Grid, Breadcrumbs } from '@material-ui/core';
// import messages from './messages';
import { NavigateBefore as NavigateBeforeIcon } from '@material-ui/icons';
import MAvatar from 'mui/MAvatar';
import imgAvatar2 from 'app/assets/images/avatar.jpeg';
import companyAvatar from 'app/assets/images/icon-1.png';
import styles from './style';
import TopInfo from './topInfo';
import MainInfo from './mainInfo';

function UserInfo(props) {
  const classes = styles();
  const { user, role } = props;

  const handleClick = function() {};

  return (
    <div className={classes.greyContainer}>
      <MContainer maxWidth="md" mt={6} className={classes.root}>
        {role === 'user' && (
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
        )}
        {role === 'company' && <div className={classes.whiteSpace} />}
        <Grid container>
          <Grid item md={1} />
          <Grid item md={10}>
            <div className={classes.panel}>
              <MAvatar
                src={role === 'company' ? companyAvatar : imgAvatar2}
                alt="user name"
              />
              <TopInfo
                viewCount={28}
                shareCV={() => handleClick()}
                downloadCV={() => handleClick()}
                role={role}
              />
              <MainInfo user={user} role={role} />
            </div>
          </Grid>
        </Grid>
      </MContainer>
    </div>
  );
}

UserInfo.propTypes = {
  user: PropTypes.object,
  role: PropTypes.string.isRequired,
};

export default UserInfo;
