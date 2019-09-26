import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { MTabs, MTab } from 'mui/MTabs';
import styles from './Navigations.style';
import { Container } from '@material-ui/core';

const DEFAULT_NAV = {
  DASHBOARD_LOCATIONS: ['/Company/Dashboard'],
  JOB_LOCATIONS: ['/Jobs'],
  COMPANY_LOCATIONS: ['/Company'],
};

function locationToNav(location) {
  if (DEFAULT_NAV.DASHBOARD_LOCATIONS.indexOf(location) > -1)
    return '/Company/Dashboard';
  return '/Company/Dashboard';
}

function Navigations(props) {
  const { history } = props;
  const classes = styles();
  const [tab, setTab] = useState(
    locationToNav(history.location.pathname, 'default'),
  );

  useEffect(() => {
    setTab(locationToNav(history.location.pathname, 'default'));
  }, [history.location.key]);

  function handleTabChange(e, val) {
    history.push(val);
  }

  return (
    <div className={classes.root}>
      <Container>
        <MTabs value={tab} className={classes.tabs} onChange={handleTabChange}>
          <MTab label="داشبورد" value="/Company/Dashboard" />
          <MTab label="مدیریت آگهی" />
          <MTab label="آزمون" />
          <MTab label="مدیریت شرکت" />
          <MTab label="اعتبار" />
          <MTab label="مدیریت پوشه ها" />
        </MTabs>
      </Container>
    </div>
  );
}

Navigations.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(Navigations);
