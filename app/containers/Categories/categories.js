/**
 *
 * Categories
 *
 */

import React, { useContext, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import TopCategories from './TopCategories';
import CategoryList from './CategoryList';

import { CategoriesContext } from './categories.provider';

export function Categories() {
  const {
    selectedCategories,
    topCategories,
    categories,
    loadTopCategories,
    isFetchingTopCategories,
    loadCategories,
    isFetchingCategories,
    pushSelectedCategory,
    popCategories,
  } = useContext(CategoriesContext);

  useEffect(() => {
    loadTopCategories();
    loadCategories();
  }, []);

  const categorySelect = cat => {
    pushSelectedCategory(cat);
    loadCategories(cat);
    window.scrollTo(0, 0);
  };

  const popCategorySelected = count => {
    popCategories(count);
    loadCategories(
      selectedCategories.length > 0 ? [...selectedCategories].pop() : null,
    );
  };

  return (
    <div>
      <Helmet>
        <title>Categories</title>
        <meta name="description" content="Jobs Categories" />
      </Helmet>
      <TopCategories
        categories={{
          items: topCategories,
          isFetching: isFetchingTopCategories,
          title:
            selectedCategories.length === 0
              ? 'دسته بندی\u200Cهای برتر شغلی'
              : [...selectedCategories].pop().title,
        }}
        selectedCategories={selectedCategories}
        onSelectCategory={categorySelect}
        unSelectCategory={popCategorySelected}
      />
      {selectedCategories.length === 0 ? (
        <CategoryList
          categories={{
            items: categories,
            isFetching: isFetchingCategories,
          }}
          onSelectCategory={categorySelect}
        />
      ) : (
        ''
      )}
    </div>
  );
}

export default Categories;
