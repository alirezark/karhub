import React from 'react';
import TopCopmaniesProvider from './topCompanies.provider';
import TopCompanies from './topCompanies';

const TopCompaniesWrapper = () => (
  <TopCopmaniesProvider>
    <TopCompanies />
  </TopCopmaniesProvider>
);

export { TopCompaniesWrapper as TopCompanies };
