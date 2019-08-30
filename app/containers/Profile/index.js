/**
 *
 * Profile
 *
 */

import React from 'react';
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

export function Profile(props) {
  const { user, profile } = props;

  useInjectReducer({ key: 'profile', reducer });
  useInjectSaga({ key: 'profile', saga: () => saga(user.id) });

  return (
    <div>
      <Helmet>
        <title>Profile</title>
        <meta name="description" content="Description of Profile" />
      </Helmet>
      <UserInfo user={profile.profile} />
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
