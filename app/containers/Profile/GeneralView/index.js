import React, { useState } from 'react';
// import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import MContainer from 'mui/MContainer';
import { Grid, Typography, Box, Badge } from '@material-ui/core';
import { MTab, MTabs } from 'mui/MTabs';
// import messages from './messages';
import { isEmpty } from 'lodash';
import styles from './style';
import SentCV from '../Favorites/sentCV';
import EmployerRequests from './employerRequests';
import Tests from './tests';

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

function GeneralView(props) {
  const classes = styles();
  const [tab, setTab] = useState(1);
  const {
    loadSentCV,
    sentCVs,
    loadEmplyerRequests,
    employerRequests,
    loadTests,
    tests,
  } = props;

  const handleTabChange = (e, val) => {
    setTab(val);
    if (val === 2 && isEmpty(sentCVs)) loadSentCV();
    else if (val === 3 && isEmpty(employerRequests)) loadEmplyerRequests();
    else if (val === 4 && isEmpty(tests)) loadTests();
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
                <MTab label="پروفایل" value={1} />
                <MTab label="رزومه های ارسالی ۳ بار" value={2} />
                <MTab
                  label={
                    <Badge
                      className={classes.badge}
                      color="secondary"
                      badgeContent={2}
                    >
                      درخواست های از سمت کارفرما
                    </Badge>
                  }
                  value={3}
                />
                <MTab label="آزمون ها" value={4} />
              </MTabs>
              <TabPanel value={tab} index={1} className={classes.tabContent}>
                Profile
              </TabPanel>
              <TabPanel value={tab} index={2} className={classes.tabContent}>
                <SentCV CVs={sentCVs} />
              </TabPanel>
              <TabPanel value={tab} index={3} className={classes.tabContent}>
                <EmployerRequests employerRequests={employerRequests} />
              </TabPanel>
              <TabPanel value={tab} index={4} className={classes.tabContent}>
                <Tests tests={tests} />
              </TabPanel>
            </div>
          </Grid>
        </Grid>
      </MContainer>
    </div>
  );
}

GeneralView.propTypes = {
  sentCVs: PropTypes.array,
  loadSentCV: PropTypes.func.isRequired,
  employerRequests: PropTypes.array,
  loadEmplyerRequests: PropTypes.func.isRequired,
  loadTests: PropTypes.func.isRequired,
  tests: PropTypes.array,
};

export default GeneralView;
