/**
 *
 * SendCvDialog
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import user from 'app/selectors/user';
import makeSelectSendCvDialog from './selectors';
import { makeSelectJob } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import GuestCVDialog from './GuestCVDialog';
import UserCVDialog from './UserCVDialog';
import SuccessDialog from './SuccessDialog';
import * as actions from './actions';
import { openLoginDialogAction } from 'containers/GlobalHeader/actions';

export function SendCvDialog(props) {
  useInjectReducer({ key: 'sendCvDialog', reducer });
  useInjectSaga({ key: 'sendCvDialog', saga });

  const { job, sendCvDialog } = props;
  const showGuestDialog = sendCvDialog.showSendCVDialog && !props.user.isLogin;
  const showUserDialog = sendCvDialog.showSendCVDialog && props.user.isLogin;
  console.log(props);

  const handleClose = function() {
    props.dispatch(actions.closeSendCVAction());
  };

  const handleSendCV = function() {
    props.dispatch(actions.sendCVAction());
  };

  const showLogin = function() {
    props.dispatch(openLoginDialogAction());
  };

  return (
    <div>
      <GuestCVDialog job={job} open={showGuestDialog} handleClose={handleClose} handleSendCV={handleSendCV} showLogin={showLogin}/>
    </div>
  );
}

SendCvDialog.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  sendCvDialog: makeSelectSendCvDialog(),
  user: user(),
  job: makeSelectJob(),
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

export default compose(withConnect)(SendCvDialog);
