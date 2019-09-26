import React from 'react';
import PropTypes from 'prop-types';
import GeneralViewProvider from './generalView.provider';
import GeneralView from './generalView';

const GeneralViewWrapper = ({ match }) => (
  <GeneralViewProvider companyId={match.params.id}>
    <GeneralView />
  </GeneralViewProvider>
);

GeneralViewWrapper.propTypes = {
  match: PropTypes.any,
};

export { GeneralViewWrapper as GeneralView };
