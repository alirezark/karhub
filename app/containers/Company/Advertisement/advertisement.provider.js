import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import configs from 'app/config';

export const AdvertisementContext = React.createContext();

const FILTERS = {
  ALL_ADVERTISES: 'all',
  ACTIVE_ADVERTISES: 'active',
  DRAFT_ADVERTISES: 'draft',
  CLOSED_ADVERTISES: 'closed',
};

function AdvertisementProvider(props) {
  const [state, setState] = useState({
    list: [],
    isLoading: false,
  });

  useEffect(() => {
    if (!isEmpty(state) && isEmpty(state.list) && !state.isLoading) load();
  });

  const load = (filter = FILTERS.ALL_ADVERTISES) => {
    setState({
      ...state,
      isLoading: true,
    });
    fetch(`${configs.services.company.advertisements}/${filter}`)
      .then(response => response.json())
      .then(response => {
        setState({
          ...state,
          list: response,
          isLoading: false,
        });
      });
  };

  return (
    <AdvertisementContext.Provider value={{ list: state.list, load }}>
      {props.children}
    </AdvertisementContext.Provider>
  );
}

AdvertisementProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AdvertisementProvider;
export { FILTERS as AdvertisementFilter };
