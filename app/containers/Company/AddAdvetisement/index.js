import React from 'react';
import AddAdvertisementProvider from './addAdvertisement.provider';
import AddAdvertisement from './addAdvertisement';

const AddAdvertisementWrapper = () => (
  <AddAdvertisementProvider>
    <AddAdvertisement />
  </AddAdvertisementProvider>
);

export { AddAdvertisementWrapper as AddAdvertisement };
