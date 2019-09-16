import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';
import { MTabs, MTab } from 'mui/MTabs';
import { some } from 'lodash';
import messages from './messages';
import styles from './style';

const DEFAULT_NAV = {
  HOME_LOCATIONS: ['/', '/Categories', '/Profile'],
  JOB_LOCATIONS: ['/Jobs'],
  COMPANY_LOCATIONS: ['/Company'],
};

const COMPANY_NAV = {
  SEARCH_CV: ['/Company/Search_CV'],
  SETTINGS: ['/Company/Settings'],
  FAQ: ['/Company/FAQ'],
  SEND_TICKET: ['/Company/Send_Ticket'],
};

function locationToNav(location, nav) {
  if (nav === 'default') {
    if (DEFAULT_NAV.HOME_LOCATIONS.indexOf(location) > -1) return '/';
    if (DEFAULT_NAV.JOB_LOCATIONS.indexOf(location) > -1) return '/Jobs';
    if (some(DEFAULT_NAV.COMPANY_LOCATIONS, loc => location.indexOf(loc) > -1))
      return '/Company';
  } else {
    if (COMPANY_NAV.SEARCH_CV.indexOf(location) > -1)
      return '/Company/Search_CV';
    if (COMPANY_NAV.SETTINGS.indexOf(location) > -1) return '/Company/Settings';
    if (COMPANY_NAV.FAQ.indexOf(location) > -1) return '/Company/FAQ';
    if (COMPANY_NAV.SEND_TICKET.indexOf(location) > -1)
      return '/Company/Send_Ticket';
  }
  return '';
}

function CompanyNavigations(props) {
  const { history } = props;
  const classes = styles();
  const [tab, setTab] = useState(
    locationToNav(history.location.pathname, 'company'),
  );

  useEffect(() => {
    setTab(locationToNav(history.location.pathname, 'company'));
  }, [history.location.key]);

  function handleTabChange(e, val) {
    props.history.push(val);
  }

  return (
    <MTabs
      value={tab}
      className={classNames(classes.tabs, classes.tabs_rtl)}
      onChange={handleTabChange}
    >
      <MTab
        style={{ width: '' }}
        label="ارسال تیکت"
        value="/Company/Send_Ticket"
      />
      <MTab style={{ width: '' }} label="سوالات متداول" value="/Company/FAQ" />
      <MTab style={{ width: '' }} label="تنظیمات" value="/Company/Settings" />
      <MTab
        style={{ width: '' }}
        label="جستجوی رزومه"
        value="/Company/Search_CV"
      />
    </MTabs>
  );
}

CompanyNavigations.propTypes = {
  history: PropTypes.object.isRequired,
};

function DefaultNavigations(props) {
  const intl = useIntl();
  const { history } = props;
  const classes = styles();
  console.log('nav', locationToNav(history.location.pathname, 'default'));
  const [tab, setTab] = useState(
    locationToNav(history.location.pathname, 'default'),
  );

  useEffect(() => {
    setTab(locationToNav(history.location.pathname, 'default'));
  }, [history.location.key]);

  function handleTabChange(e, val) {
    props.history.push(val);
  }

  return (
    <MTabs value={tab} className={classes.tabs} onChange={handleTabChange}>
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

DefaultNavigations.propTypes = {
  history: PropTypes.object.isRequired,
};

function Navigations(props) {
  const { history, user } = props;

  if (user && user.role === 'company')
    return <CompanyNavigations history={history} />;
  return <DefaultNavigations history={history} />;
}

Navigations.propTypes = {
  history: PropTypes.object.isRequired,
  user: PropTypes.object,
};

export default withRouter(Navigations);
