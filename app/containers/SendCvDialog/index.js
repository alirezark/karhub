import React from 'react';
import SendCVDialogProvider from './sendCVDialog.provider';
// eslint-disable-next-line import/no-named-default
import { default as SendCVDialogComponent } from './sendCvDialog';

const SendCVDialog = () => (
  <SendCVDialogProvider>
    <SendCVDialogComponent />
  </SendCVDialogProvider>
);

export default SendCVDialog;
