import React from 'react';
import CreditProvider from './credit.provider';
import Credit from './credit';

const CreditWrapper = () => (
  <CreditProvider>
    <Credit />
  </CreditProvider>
);

export { CreditWrapper as Credit };
