/**
 *
 * Categories
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import * as actions from './actions';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { makeSelectCategories, makeSelectTopCategories, makeSelectSelectedCategories } from './selectors';
import reducer from './reducer';
import { fetchCategories, fetchTopCategories, fetchSelectedCategory } from './saga';
import messages from './messages';
import TopCategories from './TopCategories';
import CategoryList from './CategoryList';

export function Categories(props) {
  useInjectReducer({ key: 'categories', reducer });
  useInjectSaga({ key: 'categories', saga: fetchCategories });
  useInjectSaga({ key: 'topCategories', saga: fetchTopCategories });
  useInjectSaga({ key: 'selectedCategory', saga: fetchSelectedCategory });

  const categorySelect = function (cat) {
    props.dispatch(actions.pushSelecteCategoryAction(cat));
    props.dispatch(actions.requestSelectedCategory(cat));
    window.scrollTo(0, 0)
  };

  const popCategorySelected = function (count) {
    props.dispatch(actions.popSelectedCategoryAction(count));
    props.dispatch(actions.requestSelectedCategory(props.selectedCategories.length > 0 ? [...props.selectedCategories].pop() : null));
  };
  console.log(props);
  return (
    <div>
      <Helmet>
        <title>Categories</title>
        <meta name="description" content="Jobs Categories" />
      </Helmet>
      <TopCategories
        categories={props.topCategories}
        selectedCategories={props.selectedCategories}
        onSelectCategory={categorySelect} unSelectCategory={popCategorySelected}/>
      {props.selectedCategories.length === 0 ? (
        <CategoryList categories={props.categories} onSelectCategory={categorySelect} />
      ) : ''}
    </div>
  );
}

Categories.propTypes = {
  dispatch: PropTypes.func.isRequired,
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
