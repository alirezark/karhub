import React, { useState, useEffect } from 'react';
// import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import MContainer from 'mui/MContainer';
import { Grid, Typography, Box } from '@material-ui/core';
import { MTab, MTabs } from 'mui/MTabs';
// import messages from './messages';
import { map } from 'lodash';
import JobCard from 'app/components/JobCard';
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

function Notifications(props) {
  const classes = styles();
  let { notifications } = props;
  notifications = map(notifications, notification => ({
    ...notification,
    state: 'مشاهده',
  }));

  const [notifs, setNotifs] = useState({
    list: notifications,
  });

  useEffect(() => {
    if (notifs.list.length === 0 && notifs.list.length !== notifications.length)
      setNotifs({
        list: notifications,
      });
  }, [notifications]);

  if (!notifications) return <div />;

  const handleDelete = index => {
    notifs.list.splice(index, 1);
    setNotifs({
      list: notifs.list,
    });
  };

  return (
    <div className={classes.greyContainer}>
      <MContainer maxWidth="md" mt={6} className={classes.root}>
        <Grid container>
          <Grid item md={1} />
          <Grid item md={10}>
            <div className={classes.panel}>
              <MTabs value={1} className={classes.tabs}>
                <MTab label="تنظیمات اعلان ها" value={1} />
              </MTabs>
              <TabPanel value={1} index={1} className={classes.tabContent}>
                <Grid container spacing={3}>
                  {notifs.list.map((notification, index) => (
                    <Grid key={notification.id} item md={6}>
                      <JobCard
                        job={notification}
                        className={classes.card}
                        showSentDetails
                        onDelete={() => handleDelete(index)}
                      />
                    </Grid>
                  ))}
                </Grid>
              </TabPanel>
            </div>
          </Grid>
        </Grid>
      </MContainer>
    </div>
  );
}

Notifications.propTypes = {
  notifications: PropTypes.array,
};

export default Notifications;
