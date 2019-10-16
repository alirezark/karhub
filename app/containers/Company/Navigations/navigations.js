import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { MTabs, MTab } from 'mui/MTabs';
import styles from './Navigations.style';
import { Container } from '@material-ui/core';

const DEFAULT_NAV = {
  DASHBOARD_LOCATIONS: ['/Company/Dashboard'],
  Advertisements_LOCATIONS: ['/Company/Advertisements'],
  FOLDERS_LOCATIONS: ['/Company/Folders'],
};

function locationToNav(location) {
  if (DEFAULT_NAV.DASHBOARD_LOCATIONS.indexOf(location) > -1)
    return '/Company/Dashboard';
  if (DEFAULT_NAV.Advertisements_LOCATIONS.indexOf(location) > -1)
    return '/Company/Advertisements';
  if (DEFAULT_NAV.FOLDERS_LOCATIONS.indexOf(location) > -1)
    return '/Company/Folders';
  return '/Company/Dashboard';
}

function Navigations(props) {
  const { history } = props;
  const classes = styles();
  const [tab, setTab] = useState(
    locationToNav(history.location.pathname),
  );

  useEffect(() => {
    setTab(locationToNav(history.location.pathname));
  }, [history.location.key]);

  function handleTabChange(e, val) {
    history.push(val);
  }

  return (
    <div className={classes.root}>
      <Container>
        <MTabs value={tab} className={classes.tabs} onChange={handleTabChange}>
          <MTab label="داشبورد" value="/Company/Dashboard" />
          <MTab label="مدیریت آگهی" value="/Company/Advertisements" />
          <MTab label="آزمون" />
          <MTab label="مدیریت شرکت" />
          <MTab label="اعتبار" />
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
