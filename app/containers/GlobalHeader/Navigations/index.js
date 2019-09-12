import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';
import { MTabs, MTab } from 'mui/MTabs';
import { some } from 'lodash';
import messages from './messages';
import styles from './style';

const HOME_LOCATIONS = ['/', '/Categories', '/Profile'];
const JOB_LOCATIONS = ['/Jobs'];
const COMPANY_LOCATIONS = ['/Company'];

function locationToNav(location) {
  if (HOME_LOCATIONS.indexOf(location) > -1) return '/';
  if (JOB_LOCATIONS.indexOf(location) > -1) return '/Jobs';
  if (some(COMPANY_LOCATIONS, loc => location.indexOf(loc) > -1))
    return '/Company';
  return '';
}

function Navigations(props) {
  const classes = styles();
  const intl = useIntl();
  const [tab, setTab] = useState(
    locationToNav(props.history.location.pathname),
  );

  useEffect(() => {
    setTab(locationToNav(props.history.location.pathname));
  }, [props.history.location.key]);

  function handleTabChange(e, val) {
    props.history.push(val);
  }

  return (
    <MTabs value={tab} className={classes.tabs} onChange={handleTabChange}>
      <MTab label={intl.formatMessage({ ...messages.home })} value="/" />
      <MTab
        label={intl.formatMessage({
          ...messages.jobs_opportunities,
        })}
        value="/Jobs"
      />
      <MTab
        label={intl.formatMessage({ ...messages.companies_info })}
        value="/Company"
      />
      <MTab label={intl.formatMessage({ ...messages.exam })} />
      <MTab label={intl.formatMessage({ ...messages.cv_maker })} />
      <MTab label={intl.formatMessage({ ...messages.blog })} />
    </MTabs>
  );
}

Navigations.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(Navigations);
