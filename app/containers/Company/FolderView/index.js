import React from 'react';
import PropTypes from 'prop-types';
import FolderProvider from './folder.provider';
import Folder from './folder';

const FolderWrapper = ({ match }) => (
  <FolderProvider id={match.params.id}>
    <Folder />
  </FolderProvider>
);

FolderWrapper.propTypes = {
  id: PropTypes.number.isRequired,
};

export { FolderWrapper as Folder };
