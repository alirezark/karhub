import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import configs from 'app/config';

export const GeneralViewContext = React.createContext();

function GeneralViewProvider(props) {
  const { companyId } = props;
  const [state, setState] = useState({
    info: {},
    isLoadingInfo: false,
  });

  useEffect(() => {
    if (!isEmpty(state) && isEmpty(state.info) && !state.isLoadingInfo)
      loadCompany();
  });

  const loadCompany = () => {
    setState({
      ...state,
      isLoadingInfo: true,
    });
    fetch(`${configs.services.company.profile}/${companyId}`)
      .then(response => response.json())
      .then(response => {
        setState({
          ...state,
          info: response,
          isLoadingInfo: false,
        });
      });
  };

  return (
    <GeneralViewContext.Provider value={{ info: state.info }}>
      {props.children}
    </GeneralViewContext.Provider>
  );
}

GeneralViewProvider.propTypes = {
  companyId: PropTypes.number.isRequired,
  children: PropTypes.element.isRequired,
};

export default GeneralViewProvider;
