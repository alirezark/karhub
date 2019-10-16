import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import configs from 'app/config';

export const FoldersContext = React.createContext();

function FoldersProvider(props) {
  const { embedded } = props;
  const [state, setState] = useState({
    list: [],
    isLoading: false,
    showBtnMore: false,
  });

  useEffect(() => {
    if (!isEmpty(state) && isEmpty(state.list) && !state.isLoading) load();
  });

  const load = () => {
    setState({
      ...state,
      isLoading: true,
    });

    fetch(`${configs.services.company.folders}`)
      .then(response => response.json())
      .then(response => {
        setState({
          ...state,
          list: embedded ? response.slice(0, 5) : response,
          isLoading: false,
          showBtnMore: embedded && response.length > 5,
        });
      });
  };

  return (
    <FoldersContext.Provider
      value={{ list: state.list, load, showBtnMore: state.showBtnMore }}
    >
      {props.children}
    </FoldersContext.Provider>
  );
}

FoldersProvider.propTypes = {
  children: PropTypes.element.isRequired,
  embedded: PropTypes.bool,
};

export default FoldersProvider;
