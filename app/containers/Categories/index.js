import React from 'react';
import CategoriesProvider from './categories.provider';
// eslint-disable-next-line import/no-named-default
import { default as CategoriesComponent } from './categories';

const Categories = () => (
  <CategoriesProvider>
    <CategoriesComponent />
  </CategoriesProvider>
);

export default Categories;
