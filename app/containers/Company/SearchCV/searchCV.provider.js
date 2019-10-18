import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import configs from 'app/config';
import { isEmpty } from 'lodash';

export const SearchCVContext = React.createContext();

function SearchCVProvider(props) {
  const [state, setState] = useState({
    result: [],
    filters: [],
    isLoadingFilters: false,
    isLoadingResults: false,
  });

  useEffect(() => {
    if (!isEmpty(state) && isEmpty(state.filters) && !state.isLoadingFilters)
      loadFilters();
    if (!isEmpty(state) && isEmpty(state.result) && !state.isLoadingResults)
      loadResults();
  });

  const loadFilters = () => {
    setState({ ...state, isLoadingFilters: true });

    fetch(`${configs.services.company.searchCVFilters}`)
      .then(response => response.json())
      .then(response => {
        setState({
          ...state,
          filters: response,
          isLoadingFilters: false,
        });
      });
  };

  const loadResults = () => {
    setState({ ...state, isLoadingResults: true });

    fetch(`${configs.services.company.searchCV}`)
      .then(response => response.json())
      .then(response => {
        setState({
          ...state,
          result: response,
          isLoadingResults: false,
        });
      });
  }

  return (
    <SearchCVContext.Provider
      value={{ result: state.result, filters: state.filters }}
    >
      {props.children}
    </SearchCVContext.Provider>
  );
}

SearchCVProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default SearchCVProvider;
