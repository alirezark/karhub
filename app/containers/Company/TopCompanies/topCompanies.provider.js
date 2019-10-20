import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import configs from 'app/config';

export const TopCompaniesContext = React.createContext();

function TopCopmaniesProvider(props) {
  const [state, setState] = useState({
    list: [],
    isLoading: false,
  });

  useEffect(() => {
    if (!isEmpty(state) && isEmpty(state.list) && !state.isLoading) load();
  });

  const load = () => {
    setState({
      ...state,
      isLoading: true,
    });

    fetch(`${configs.services.company.Top}`)
      .then(response => response.json())
      .then(response => {
        setState({
          ...state,
          list: response.slice(0, 9),
          isLoading: false,
        });
      });
  };

  return (
    <TopCompaniesContext.Provider value={{ list: state.list, load }}>
      {props.children}
    </TopCompaniesContext.Provider>
  );
}

TopCopmaniesProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default TopCopmaniesProvider;
