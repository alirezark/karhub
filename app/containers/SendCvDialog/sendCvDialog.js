/**
 *
 * SendCvDialog
 *
 */

import React, { useContext } from 'react';
// import { FormattedMessage } from 'react-intl';
import { UserContext } from 'app/containers/GlobalHeader/UserProvider';
// import messages from './messages';
import GuestCVDialog from './GuestCVDialog';
import UserCVDialog from './UserCVDialog';
import SuccessDialog from './SuccessDialog';
import { SendCVDialogContext } from './sendCVDialog.context';

export function SendCvDialog() {
  const { showLogin, user } = useContext(UserContext);
  const {
    job,
    showSendCVDialog,
    showSuccessDialog,
    abstractCV,
    handleCloseSendCVDialog,
    handleSendCV,
    handleCloseSuccessSendCV,
  } = useContext(SendCVDialogContext);
  const showGuestDialog = showSendCVDialog && !user.isLogin;
  const showUserDialog = showSendCVDialog && user.isLogin;

  return (
    <div>
      <GuestCVDialog
        job={job}
        open={showGuestDialog}
        handleClose={handleCloseSendCVDialog}
        handleSendCV={handleSendCV}
        showLogin={showLogin}
      />
      <UserCVDialog
        job={job}
        open={showUserDialog}
        abstractCV={abstractCV}
        user={user}
        handleClose={handleCloseSendCVDialog}
        handleSendCV={handleSendCV}
      />
      <SuccessDialog
        open={showSuccessDialog}
        handleClose={handleCloseSuccessSendCV}
        job={job}
      />
    </div>
  );
}

export default SendCvDialog;
