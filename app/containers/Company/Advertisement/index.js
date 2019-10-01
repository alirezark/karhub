import React from 'react';
import PropTypes from 'prop-types';
import AdvertisementProvider from './advertisement.provider';
import Advertisement from './advertisement';

const AdvertisementWrapper = ({ embedded }) => (
  <AdvertisementProvider embedded={embedded}>
    <Advertisement />
  </AdvertisementProvider>
);

AdvertisementWrapper.propTypes = {
  embedded: PropTypes.bool,
};

export { AdvertisementWrapper as Advertisement };
