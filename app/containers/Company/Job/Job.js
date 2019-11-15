import React, { useState } from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import MButton from 'mui/MButton';
import { MTab, MTabs } from 'mui/MTabs';
import MChip from 'mui/MChip';
import PropTypes from 'prop-types';
import styles from './job.style';
import { withSendCVDialog } from '../../SendCvDialog/sendCVDialog.context';
import TopInfo from './contents/topInfo';
import JobDescription from './contents/jobDescription';
import AboutCompany from './contents/aboutCompany';
import CreateAlertDialog from 'app/containers/Jobs/contents/createAlertDialog';
import ShareJobDialog from 'app/containers/Jobs/contents/shareJobDialog';
import JobsList from 'app/containers/Jobs/JobsList';

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

function Job(props) {
  const classes = styles();
  const [tab, setTab] = useState('1');
  const [openShareJob, setOpenShareJob] = useState(false);
  const { showSendCVDialog } = props;

  const handleTabChange = (e, val) => {
    setTab(val);
  };

  const openShareJobDialog = () => {
    setOpenShareJob(true);
  };

  const closeShareJobDialog = () => {
    setOpenShareJob(false);
  };

  return (
    <div>
      <TopInfo
        showSendCVDialog={showSendCVDialog}
        showShareJobDialog={openShareJobDialog}
      />

      <MTabs value={tab} className={classes.tabs} onChange={handleTabChange}>
        <MTab label="توضیحات" value="1" />
        <MTab label="درباره شرکت" value="2" />
      </MTabs>

      <TabPanel value={tab} index="1" className={classes.tabContent}>
        <JobDescription />
      </TabPanel>
      <TabPanel value={tab} index="2" className={classes.tabContent}>
        <AboutCompany />
      </TabPanel>

      <ShareJobDialog open={openShareJob} onClose={closeShareJobDialog} />
    </div>
  );
}

Job.propTypes = {
  showSendCVDialog: PropTypes.func,
};

export default withSendCVDialog(Job);
