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
  const { embedded } = props;
  const [state, setState] = useState({
    list: [],
    isLoading: false,
    showBtnMore: false,
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
          list: embedded ? response.slice(0, 5) : response,
          isLoading: false,
          showBtnMore: embedded && response.length > 5,
        });
      });
  };

  return (
    <AdvertisementContext.Provider
      value={{ list: state.list, load, showBtnMore: state.showBtnMore }}
    >
      {props.children}
    </AdvertisementContext.Provider>
  );
}

AdvertisementProvider.propTypes = {
  children: PropTypes.element.isRequired,
  embedded: PropTypes.bool,
};

export default AdvertisementProvider;
export { FILTERS as AdvertisementFilter };
