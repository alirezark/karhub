import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MContainer from 'mui/MContainer';
import { Grid, Typography, Box } from '@material-ui/core';
import { MTab, MTabs } from 'mui/MTabs';
import AbstractCV from 'components/AbstractCv';
import { isEmpty } from 'lodash';
import CVList from './CVList';
import styles from './style';

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

function JobsList(props) {
  const classes = styles();
  const [tab, setTab] = useState(1);
  const { abstractCV, user, uploadedCV, loadUploadedCV } = props;

  const handleTabChange = (e, val) => {
    setTab(val);
    if (val === 2 && isEmpty(uploadedCV)) loadUploadedCV();
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
                <MTab label="رزومه‌ی کارهاب" value={1} />
                <MTab label="رزومه‌های آپلود شده" value={2} />
              </MTabs>
              <TabPanel value={tab} index={1} className={classes.tabContent}>
                <AbstractCV cv={abstractCV} user={user} />
              </TabPanel>
              <TabPanel value={tab} index={2} className={classes.tabContent}>
                <CVList uploadedCV={uploadedCV} />
              </TabPanel>
            </div>
          </Grid>
        </Grid>
      </MContainer>
    </div>
  );
}

JobsList.propTypes = {
  abstractCV: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  loadUploadedCV: PropTypes.func.isRequired,
  uploadedCV: PropTypes.array.isRequired,
};

export default JobsList;
