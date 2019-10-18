import React from 'react';
import PropTypes from 'prop-types';
import FoldersProvider from './folders.provider';
import Folders from './folders';

const FoldersWrapper = ({ embedded }) => (
  <FoldersProvider embedded={embedded}>
    <Folders embedded={embedded} />
  </FoldersProvider>
);

FoldersWrapper.propTypes = {
  embedded: PropTypes.bool,
};

export { FoldersWrapper as Folders };
