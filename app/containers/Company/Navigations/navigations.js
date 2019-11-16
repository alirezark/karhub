import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { MTabs, MTab } from 'mui/MTabs';
import { Container } from '@material-ui/core';
import { some } from 'lodash';
import styles from './navigations.style';

const DEFAULT_NAV = {
  DASHBOARD_LOCATIONS: ['/Company/Dashboard'],
  ADVERTISEMENT_LOCATIONS: [
    '/Company/Advertisements',
    '/Company/AddAdvertisement',
  ],
  FOLDERS_LOCATIONS: ['/Company/Folders', '/Company/Folder'],
  CREDIT_LOCATIONS: ['/Company/Credit'],
  MANAGEMENT_LOCATIONS: ['/Company/Manage'],
};

function locationToNav(location) {
  if (DEFAULT_NAV.DASHBOARD_LOCATIONS.indexOf(location) > -1)
    return '/Company/Dashboard';
  if (DEFAULT_NAV.ADVERTISEMENT_LOCATIONS.indexOf(location) > -1)
    return '/Company/Advertisements';
  if (some(DEFAULT_NAV.FOLDERS_LOCATIONS, loc => location.indexOf(loc) > -1))
    return '/Company/Folders';
  if (DEFAULT_NAV.CREDIT_LOCATIONS.indexOf(location) > -1)
    return '/Company/Credit';
  if (DEFAULT_NAV.MANAGEMENT_LOCATIONS.indexOf(location) > -1)
    return '/Company/Manage';
  return '';
}

function Navigations(props) {
  const { history } = props;
  const classes = styles();
  const [tab, setTab] = useState(locationToNav(history.location.pathname));

  useEffect(() => {
    setTab(locationToNav(history.location.pathname));
  }, [history.location.key]);

  function handleTabChange(e, val) {
    history.push(val);
  }
  if (tab === '') return <div />;

  return (
    <div className={classes.root}>
      <Container>
        <MTabs value={tab} className={classes.tabs} onChange={handleTabChange}>
          <MTab label="داشبورد" value="/Company/Dashboard" />
          <MTab label="مدیریت آگهی" value="/Company/Advertisements" />
          <MTab label="آزمون" />
          <MTab label="مدیریت شرکت" value="/Company/Manage" />
          <MTab label="اعتبار" value="/Company/Credit" />
          <MTab label="مدیریت پوشه ها" value="/Company/Folders" />
        </MTabs>
      </Container>
    </div>
  );
}

Navigations.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(Navigations);
