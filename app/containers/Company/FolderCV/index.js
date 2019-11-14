import React from 'react';
import FolderCVProvider from './folderCV.provider';
import FolderCV from './folderCV';

const FolderCVWrapper = () => (
  <FolderCVProvider>
    <FolderCV />
  </FolderCVProvider>
);

export { FolderCVWrapper as FolderCV };
