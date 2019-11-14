import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import configs from 'app/config';

export const FolderCVContext = React.createContext();

function FolderCVProvider(props) {
  return <FolderCVContext.Provider>{props.children}</FolderCVContext.Provider>;
}

FolderCVProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default FolderCVProvider;
