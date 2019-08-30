/**
 *
 * Profile
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import User from 'app/selectors/user';
import { isEmpty } from 'underscore';
import makeSelectProfile from './selectors';
import reducer from './reducer';
import { profileSaga, paymentHistorySaga, abstractCVSaga } from './saga';
import UserInfo from './UserInfo';
import MainTabs from './MainTabs';
import Settings from './Settings';
import MyCV from './MyCV';
import * as actions from './actions';

export function Profile(props) {
  const [selectedTab, setSelectedTab] = useState(0);
  const { dispatch, user, profile } = props;

  useInjectReducer({ key: 'profile', reducer });
  useInjectSaga({ key: 'profile', saga: () => profileSaga(user.id) });
  useInjectSaga({ key: 'profile_paymentHistory', saga: paymentHistorySaga });
  useInjectSaga({ key: 'profile_abstractCV', saga: abstractCVSaga });

  const handleSetSelectedTab = selected => {
    setSelectedTab(selected);

    if (selected === 1 && isEmpty(profile.abstractCV))
      dispatch(actions.requestAbstractCVAction(user.id));
  };

  const loadPaymentHistory = () => {
    dispatch(actions.requestPaymentHistoryAction(user.id));
  };

  return (
    <div>
      <Helmet>
        <title>Profile</title>
        <meta name="description" content="Description of Profile" />
      </Helmet>
      <UserInfo user={profile.profile} />
      <MainTabs selected={selectedTab} setSelected={handleSetSelectedTab} />
      {selectedTab === 0 && (
        <Settings
          user={profile.profile}
          loadPaymentHistory={loadPaymentHistory}
          paymentHistory={profile.paymentHistory}
        />
      )}
      {selectedTab === 1 && (
        <MyCV abstractCV={profile.abstractCV} user={user} />
      )}
    </div>
  );
}

Profile.propTypes = {
  user: PropTypes.object,
  profile: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  profile: makeSelectProfile(),
  user: User(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Profile);
