import React  from 'react';
import PropTypes from 'prop-types';

export const AddAdvertisementContext = React.createContext();

function AddAdvertisementProvider(props) {
  return (
    <AddAdvertisementContext.Provider>
      {props.children}
    </AddAdvertisementContext.Provider>
  );
}

AddAdvertisementProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AddAdvertisementProvider;
