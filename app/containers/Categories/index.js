/**
 *
 * Categories
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import * as actions from './actions';
import {
  makeSelectCategories,
  makeSelectTopCategories,
  makeSelectSelectedCategories,
} from './selectors';
import reducer from './reducer';
import {
  fetchCategories,
  fetchTopCategories,
  fetchSelectedCategory,
} from './saga';
import TopCategories from './TopCategories';
import CategoryList from './CategoryList';

export function Categories(props) {
  useInjectReducer({ key: 'categories', reducer });
  useInjectSaga({ key: 'categories', saga: fetchCategories });
  useInjectSaga({ key: 'topCategories', saga: fetchTopCategories });
  useInjectSaga({ key: 'selectedCategory', saga: fetchSelectedCategory });

  const { selectedCategories, topCategories, categories } = props;

  const categorySelect = cat => {
    console.log(cat);
    props.dispatch(actions.pushSelecteCategoryAction(cat));
    props.dispatch(actions.requestSelectedCategory(cat));
    window.scrollTo(0, 0);
  };

  const popCategorySelected = count => {
    props.dispatch(actions.popSelectedCategoryAction(count));
    props.dispatch(
      actions.requestSelectedCategory(
        props.selectedCategories.length > 0
          ? [...props.selectedCategories].pop()
          : null,
      ),
    );
  };

  return (
    <div>
      <Helmet>
        <title>Categories</title>
        <meta name="description" content="Jobs Categories" />
      </Helmet>
      <TopCategories
        categories={topCategories}
        selectedCategories={selectedCategories}
        onSelectCategory={categorySelect}
        unSelectCategory={popCategorySelected}
      />
      {selectedCategories.length === 0 ? (
        <CategoryList
          categories={categories}
          onSelectCategory={categorySelect}
        />
      ) : (
        ''
      )}
    </div>
  );
}

Categories.propTypes = {
  dispatch: PropTypes.func.isRequired,
  selectedCategories: PropTypes.array,
  topCategories: PropTypes.object,
  categories: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  categories: makeSelectCategories(),
  topCategories: makeSelectTopCategories(),
  selectedCategories: makeSelectSelectedCategories(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Categories);
