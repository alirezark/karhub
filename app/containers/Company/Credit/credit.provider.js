import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import configs from 'app/config';

export const CreditContext = React.createContext();

function CreditProvider(props) {
  const [state, setState] = useState({
    creditHistory: [],
    isLoading: false,
  });

  useEffect(() => {
    if (!isEmpty(state) && isEmpty(state.creditHistory) && !state.isLoading)
      load();
  });

  const load = () => {
    setState({
      ...state,
      isLoading: true,
    });

    fetch(`${configs.services.company.creditHistory}`)
      .then(response => response.json())
      .then(response => {
        setState({
          ...state,
          creditHistory: response,
          isLoading: false,
        });
      });
  };

  return (
    <CreditContext.Provider value={{ creditHistory: state.creditHistory }}>
      {props.children}
    </CreditContext.Provider>
  );
}

CreditProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default CreditProvider;
