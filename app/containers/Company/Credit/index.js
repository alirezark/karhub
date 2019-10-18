import React from 'react';
import PropTypes from 'prop-types';
import CreditProvider from './credit.provider';
import Credit from './credit';

const CreditWrapper = ({ embedded }) => (
  <CreditProvider>
    <Credit embedded={embedded} />
  </CreditProvider>
);

CreditWrapper.propTypes = {
  embedded: PropTypes.bool,
};

export { CreditWrapper as Credit };
