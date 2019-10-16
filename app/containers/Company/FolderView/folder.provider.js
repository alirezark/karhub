import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import configs from 'app/config';

export const FolderContext = React.createContext();

function FolderProvider(props) {
  const { id } = props;
  const [state, setState] = useState({
    folder: [],
    isLoading: false,
  });

  useEffect(() => {
    if (!isEmpty(state) && isEmpty(state.folder) && !state.isLoading) load();
  });

  const load = () => {
    setState({
      ...state,
      isLoading: true,
    });

    fetch(`${configs.services.company.folder}/${id}`)
      .then(response => response.json())
      .then(response => {
        setState({
          ...state,
          folder: response,
          isLoading: false,
        });
      });
  };

  return (
    <FolderContext.Provider value={{ folder: state.folder, load }}>
      {props.children}
    </FolderContext.Provider>
  );
}

FolderProvider.propTypes = {
  children: PropTypes.element.isRequired,
  id: PropTypes.number.isRequired,
};

export default FolderProvider;
