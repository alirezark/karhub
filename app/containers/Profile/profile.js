/**
 *
 * Profile
 *
 */

import React, { useState, useContext } from 'react';
import { Helmet } from 'react-helmet';
import { isEmpty } from 'lodash';
import { UserContext } from 'app/containers/GlobalHeader/UserProvider';
import UserInfo from './UserInfo';
import MainTabs from './MainTabs';
import Settings from './Settings';
import Favorites from './Favorites';
import MyCV from './MyCV';
import Notifications from './Notifications';
import GeneralView from './GeneralView';
import { ProfileContext } from './profile.provider';

export function Profile() {
  const { user } = useContext(UserContext);
  const {
    profile,
    loadPaymentHistory,
    loadAbstractCV,
    loadUploadedCV,
    loadFavoriteCompanies,
    loadFavoriteJobs,
    loadSentCV,
    loadEmployerRequests,
    loadTests,
  } = useContext(ProfileContext);
  const [selectedTab, setSelectedTab] = useState(
    user.role === 'company' ? 0 : -1,
  );

  const handleSetSelectedTab = selected => {
    setSelectedTab(selected);

    if (selected === 1 && isEmpty(profile.abstractCV)) loadAbstractCV();

    if (selected === 2 && isEmpty(profile.favoriteJobs)) loadFavoriteJobs();

    if (selected === 3 && isEmpty(profile.sentCVs)) loadSentCV();
  };

  return (
    <div>
      <Helmet>
        <title>Profile</title>
        <meta name="description" content="Description of Profile" />
      </Helmet>
      <UserInfo user={profile.profile} role={user.role} />
      {user.role === 'user' && (
        <MainTabs selected={selectedTab} setSelected={handleSetSelectedTab} />
      )}
      {selectedTab === -1 && (
        <GeneralView
          sentCVs={profile.sentCVs}
          loadSentCV={loadSentCV}
          loadTests={loadTests}
          tests={profile.tests}
          employerRequests={profile.employerRequests}
          loadEmplyerRequests={loadEmployerRequests}
        />
      )}
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

export default Profile;
