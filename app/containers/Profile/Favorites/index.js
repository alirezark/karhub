import React, { useState } from 'react';
// import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import MContainer from 'mui/MContainer';
import { Grid, Typography, Box } from '@material-ui/core';
import { MTab, MTabs } from 'mui/MTabs';
// import messages from './messages';
import { isEmpty } from 'lodash';
import styles from './style';
import FavoriteJobs from './favoriteJobs';
import SentCV from './sentCV';
import FavoriteCompanies from './favoriteCompanies';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={0}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function Favorites(props) {
  const classes = styles();
  const [tab, setTab] = useState(1);
  const {
    favoriteJobs,
    loadSentCV,
    sentCVs,
    favoriteCompanies,
    loadFavoriteCompanies,
  } = props;

  const handleTabChange = (e, val) => {
    setTab(val);
    if (val === 2 && isEmpty(sentCVs)) loadSentCV();
    else if (val === 3 && isEmpty(favoriteCompanies)) loadFavoriteCompanies();
  };

  return (
    <div className={classes.greyContainer}>
      <MContainer maxWidth="md" mt={6} className={classes.root}>
        <Grid container>
          <Grid item md={1} />
          <Grid item md={10}>
            <div className={classes.panel}>
              <MTabs
                value={tab}
                className={classes.tabs}
                onChange={handleTabChange}
              >
                <MTab label="فرصت های مورد علاقه" value={1} />
                <MTab label="رزومه های ارسال شده" value={2} />
                <MTab label="شرکت های مورد علاقه" value={3} />
              </MTabs>
              <TabPanel value={tab} index={1} className={classes.tabContent}>
                <FavoriteJobs favoriteJobs={favoriteJobs} />
              </TabPanel>
              <TabPanel value={tab} index={2} className={classes.tabContent}>
                <SentCV CVs={sentCVs} />
              </TabPanel>
              <TabPanel value={tab} index={3} className={classes.tabContent}>
                <FavoriteCompanies favoriteCompanies={favoriteCompanies} />
              </TabPanel>
            </div>
          </Grid>
        </Grid>
      </MContainer>
    </div>
  );
}

Favorites.propTypes = {
  favoriteJobs: PropTypes.array.isRequired,
  loadSentCV: PropTypes.func.isRequired,
  sentCVs: PropTypes.array,
  favoriteCompanies: PropTypes.array,
  loadFavoriteCompanies: PropTypes.func.isRequired,
};

export default Favorites;
