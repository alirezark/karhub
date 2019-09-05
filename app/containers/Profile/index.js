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
import {
  profileSaga,
  paymentHistorySaga,
  abstractCVSaga,
  uploadedCVSaga,
  favoriteJobsSaga,
  sentCVSaga,
  favoriteCompaniesSaga,
} from './saga';
import UserInfo from './UserInfo';
import MainTabs from './MainTabs';
import Settings from './Settings';
import Favorites from './Favorites';
import MyCV from './MyCV';
import Notifications from './Notifications';
import * as actions from './actions';

export function Profile(props) {
  const [selectedTab, setSelectedTab] = useState(0);
  const { dispatch, user, profile } = props;

  useInjectReducer({ key: 'profile', reducer });
  useInjectSaga({ key: 'profile', saga: () => profileSaga(user.id) });
  useInjectSaga({ key: 'profile_paymentHistory', saga: paymentHistorySaga });
  useInjectSaga({ key: 'profile_abstractCV', saga: abstractCVSaga });
  useInjectSaga({ key: 'profile_uploadedCV', saga: uploadedCVSaga });
  useInjectSaga({ key: 'profile_favoriteJobs', saga: favoriteJobsSaga });
  useInjectSaga({ key: 'profile_sentCV', saga: sentCVSaga });
  useInjectSaga({
    key: 'profile_favoriteCompanies',
    saga: favoriteCompaniesSaga,
  });

  const handleSetSelectedTab = selected => {
    setSelectedTab(selected);

    if (selected === 1 && isEmpty(profile.abstractCV))
      dispatch(actions.requestAbstractCVAction(user.id));

    if (selected === 2 && isEmpty(profile.favoriteJobs))
      dispatch(actions.requestFavoriteJobsAction(user.id));

    if (selected === 3 && isEmpty(profile.sentCVs))
      dispatch(actions.requestSentCVAction(user.id));
  };

  const loadPaymentHistory = () => {
    dispatch(actions.requestPaymentHistoryAction(user.id));
  };

  const loadSentCV = () => {
    dispatch(actions.requestSentCVAction(user.id));
  };

  const loadFavoriteCompanies = () => {
    dispatch(actions.requestFavoriteCompaniesAction(user.id));
  };

  const loadUploadedCV = () => {
    dispatch(actions.requestUploadedCVAction(user.id));
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
        <MyCV
          abstractCV={profile.abstractCV}
          user={user}
          loadUploadedCV={loadUploadedCV}
          uploadedCV={profile.uploadedCV}
        />
      )}
      {selectedTab === 2 && (
        <Favorites
          favoriteJobs={profile.favoriteJobs}
          favoriteCompanies={profile.favoriteCompanies}
          loadFavoriteCompanies={loadFavoriteCompanies}
          sentCVs={profile.sentCVs}
          loadSentCV={loadSentCV}
        />
      )}
      {selectedTab === 3 && <Notifications notifications={profile.sentCVs} />}
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
