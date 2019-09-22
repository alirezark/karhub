import React from 'react';
import PropTypes from 'prop-types';
import GeneralViewProvider from './generalView.provider';
import GeneralView from './generalView';

const GeneralViewWrapper = ({ companyId }) => (
  <GeneralViewProvider companyId={companyId}>
    <GeneralView />
  </GeneralViewProvider>
);

GeneralViewWrapper.propTypes = {
  companyId: PropTypes.any,
};

export { GeneralViewWrapper as GeneralView };
