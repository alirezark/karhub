import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';
import { withRouter } from 'react-router-dom';
import { MTabs, MTab } from '../../mui/MTabs';
import messages from './messages';
import styles from './style';

const HOME_LOCATIONS = ['/', '/Categories']
const JOB_LOCATIONS = ['/Jobs'];

function locationToNav(location) {
  if (HOME_LOCATIONS.indexOf(location) > -1) return '/';
  if (JOB_LOCATIONS.indexOf(location) > -1) return '/Jobs';
  return '';
}

function Navigations(props) {
  const classes = styles();
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
      <MTab label={props.intl.formatMessage({ ...messages.home })} value="/" />
      <MTab
        label={props.intl.formatMessage({
          ...messages.jobs_opportunities,
        })}
        value="/Jobs"
      />
      <MTab label={props.intl.formatMessage({ ...messages.companies_info })} />
      <MTab label={props.intl.formatMessage({ ...messages.exam })} />
      <MTab label={props.intl.formatMessage({ ...messages.cv_maker })} />
      <MTab label={props.intl.formatMessage({ ...messages.blog })} />
    </MTabs>
  );
}

Navigations.propTypes = {
  intl: intlShape.isRequired,
  history: PropTypes.object.isRequired,
};

export default injectIntl(withRouter(Navigations));
