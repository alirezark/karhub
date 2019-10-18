import React from 'react';
import SearchCVProvider from './searchCV.provider';
import SearchCV from './searchCV';

const SearchCVWrapper = () => (
  <SearchCVProvider>
    <SearchCV />
  </SearchCVProvider>
);

export { SearchCVWrapper as SearchCV };
