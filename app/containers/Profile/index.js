import React from 'react';
import ProfileProvider from './profile.provider';
// eslint-disable-next-line import/no-named-default
import { default as ProfileComponent } from './profile';

const Profile = () => (
  <ProfileProvider>
    <ProfileComponent />
  </ProfileProvider>
);

export default Profile;
