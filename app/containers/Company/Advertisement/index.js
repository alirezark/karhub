import React from 'react';
import PropTypes from 'prop-types';
import AdvertisementProvider from './advertisement.provider';
import Advertisement from './advertisement';

const AdvertisementWrapper = () => (
  <AdvertisementProvider>
    <Advertisement />
  </AdvertisementProvider>
);

AdvertisementWrapper.propTypes = {};

export { AdvertisementWrapper as Advertisement };
