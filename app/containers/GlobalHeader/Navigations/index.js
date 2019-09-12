import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';
import { MTabs, MTab } from 'mui/MTabs';
import { some } from 'lodash';
import messages from './messages';

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
    <MTabs value={tab} onChange={handleTabChange}>
      <MTab
        style={{ width: '93px' }}
        label={intl.formatMessage({ ...messages.home })}
        value="/"
      />
      <MTab
        style={{ width: '156px' }}
        label={intl.formatMessage({
          ...messages.jobs_opportunities,
        })}
        value="/Jobs"
      />
      <MTab
        style={{ width: '158px' }}
        label={intl.formatMessage({ ...messages.companies_info })}
        value="/Company"
      />
      <MTab
        style={{ width: '93px' }}
        label={intl.formatMessage({ ...messages.exam })}
      />
      <MTab
        style={{ width: '98px' }}
        label={intl.formatMessage({ ...messages.cv_maker })}
      />
      <MTab
        style={{ width: '93px' }}
        label={intl.formatMessage({ ...messages.blog })}
      />
    </MTabs>
  );
}

Navigations.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(Navigations);
