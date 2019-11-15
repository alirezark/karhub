import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, Box } from '@material-ui/core';
import { isEmpty } from 'lodash';
import cover from 'app/assets/images/temp/companies_cover.jpg';
import MContainer from 'mui/MContainer';
import { MTab, MTabs } from 'mui/MTabs';
import CompanyInfo from './contents/comanyInfo';
import TopInfo from './contents/topInfo';
import Job from '../Job';
import Jobs from './contents/jobs';
import styles from './generalView.style';
import { GeneralViewContext } from './generalView.provider';

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

function Tabs(props) {
  const classes = styles();
  const { company } = props;
  const [tab, setTab] = useState(1);

  const handleTabChange = (e, val) => {
    setTab(val);
  };

  return (
    <div>
      <MTabs value={tab} className={classes.tabs} onChange={handleTabChange}>
        <MTab label="درباره شرکت" value={1} />
        <MTab label="شغل های فعال ۳مورد" value={2} />
        <MTab label="گالری تصاویر" value={3} />
      </MTabs>
      <TabPanel value={tab} index={1} className={classes.tabContent}>
        <CompanyInfo company={company} />
      </TabPanel>
      <TabPanel value={tab} index={2} className={classes.tabContent}>
        <Jobs />
      </TabPanel>
      <TabPanel value={tab} index={3} className={classes.tabContent}>
        Image gallery
      </TabPanel>
    </div>
  );
}

Tabs.propTypes = {
  company: PropTypes.object.isRequired,
};

function GeneralView() {
  const { info } = useContext(GeneralViewContext);
  const classes = styles();

  if (isEmpty(info)) return <div>Loading...</div>;

  return (
    <div>
      <div
        className={classes.cover}
        style={{ backgroundImage: `url(${cover})` }}
      />
      <MContainer maxWidth="md" mt={6} className={classes.root}>
        <Grid container>
          <Grid item md={1} />
          <Grid item md={10}>
            <div className={classes.panel}>
              <TopInfo company={info} />
              <div className={classes.content}>
                <Tabs company={info} />
              </div>
            </div>
          </Grid>
        </Grid>
      </MContainer>
    </div>
  );
}

export default GeneralView;
