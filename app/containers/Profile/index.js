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
import makeSelectProfile from './selectors';
import reducer from './reducer';
import saga from './saga';
import UserInfo from './UserInfo';
import MainTabs from './MainTabs';
import Settings from './Settings';

export function Profile(props) {
  const [selectedTab, setSelectedTab] = useState(0);
  const { user, profile } = props;

  useInjectReducer({ key: 'profile', reducer });
  useInjectSaga({ key: 'profile', saga: () => saga(user.id) });

  const handleSetSelectedTab = selected => {
    setSelectedTab(selected);
  };

  return (
    <div>
      <Helmet>
        <title>Profile</title>
        <meta name="description" content="Description of Profile" />
      </Helmet>
      <UserInfo user={profile.profile} />
      <MainTabs selected={selectedTab} setSelected={handleSetSelectedTab} />
      {selectedTab === 0 && <Settings user={profile.profile} />}
    </div>
  );
}

Profile.propTypes = {
  user: PropTypes.object,
  profile: PropTypes.object,
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
