import React, { useState } from 'react';
// import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import MContainer from 'mui/MContainer';
import { Grid, Typography, Box } from '@material-ui/core';
import { MTab, MTabs } from 'mui/MTabs';
// import messages from './messages';
import styles from './style';
import AccountSetting from './accountSetting';
import PaymentHistory from './paymentHistory';

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
  const [tab, setTab] = useState('1');
  const { user, loadPaymentHistory, paymentHistory } = props;

  const handleTabChange = (e, val) => {
    setTab(val);
    if (val === '2' && paymentHistory.length === 0) loadPaymentHistory();
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
                <MTab label="تنظیمات حساب کاربری" value="1" />
                <MTab label="تاریخچه پرداخت ها" value="2" />
                <MTab label="بستن حساب کاربری" value="3" />
              </MTabs>
              <TabPanel value={tab} index="1" className={classes.tabContent}>
                <AccountSetting user={user} />
              </TabPanel>
              <TabPanel value={tab} index="2" className={classes.tabContent}>
                <PaymentHistory paymentHistory={paymentHistory} />
              </TabPanel>
              <TabPanel value={tab} index="3" className={classes.tabContent}>
                Tab ۳
              </TabPanel>
            </div>
          </Grid>
        </Grid>
      </MContainer>
    </div>
  );
}

JobsList.propTypes = {
  user: PropTypes.object.isRequired,
  loadPaymentHistory: PropTypes.func.isRequired,
  paymentHistory: PropTypes.array,
};

export default JobsList;
