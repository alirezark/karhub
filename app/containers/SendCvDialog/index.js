/**
 *
 * SendCvDialog
 *
 */

import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { isEmpty } from 'lodash';
import { UserContext } from 'app/containers/GlobalHeader/UserProvider';
import makeSelectSendCvDialog, { makeSelectJob } from './selectors';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';
import GuestCVDialog from './GuestCVDialog';
import UserCVDialog from './UserCVDialog';
import SuccessDialog from './SuccessDialog';
import * as actions from './actions';

export function SendCvDialog(props) {
  useInjectReducer({ key: 'sendCvDialog', reducer });
  useInjectSaga({ key: 'sendCvDialog', saga });

  const { showLogin, user } = useContext(UserContext);
  const { job, sendCvDialog, dispatch } = props;
  const showGuestDialog = sendCvDialog.showSendCVDialog && !user.isLogin;
  const showUserDialog = sendCvDialog.showSendCVDialog && user.isLogin;
  const { showSuccessDialog } = sendCvDialog;

  useEffect(() => {
    if (
      showUserDialog &&
      isEmpty(sendCvDialog.abstractCV) &&
      !sendCvDialog.isLoadingCV
    ) {
      dispatch(actions.requestAbstractCVAction(user));
    }
  });

  const handleClose = () => {
    props.dispatch(actions.closeSendCVAction());
  };

  const handleSendCV = () => {
    props.dispatch(actions.sendCVAction());
  };

  const handleCloseSuccess = () => {
    props.dispatch(actions.closeSuccessDialogAction());
  };

  return (
    <div>
      <GuestCVDialog
        job={job}
        open={showGuestDialog}
        handleClose={handleClose}
        handleSendCV={handleSendCV}
        showLogin={showLogin}
      />
      <UserCVDialog
        job={job}
        open={showUserDialog}
        abstractCV={sendCvDialog.abstractCV}
        user={user}
        handleClose={handleClose}
        handleSendCV={handleSendCV}
      />
      <SuccessDialog
        open={showSuccessDialog}
        handleClose={handleCloseSuccess}
        job={job}
      />
    </div>
  );
}

SendCvDialog.propTypes = {
  dispatch: PropTypes.func.isRequired,
  job: PropTypes.object,
  sendCvDialog: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  sendCvDialog: makeSelectSendCvDialog(),
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
