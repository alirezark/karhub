import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import configs from 'app/config';

export const CategoriesContext = React.createContext();

class CategoriesProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      topCategories: [],
      categories: [],
      parentId: 0,
      isFetchingTopCategories: false,
      isFetchingCategories: false,
      selectedCategories: [],
    };
  }

  loadTopCategories = () => {
    this.setState(prevState => ({
      ...prevState,
      isFetchingTopCategories: true,
    }));
    axios.get(configs.services.jobs.topCategories).then(response => {
      this.setState(prevState => ({
        ...prevState,
        isFetchingTopCategories: false,
        topCategories: response.data,
      }));
    });
  };

  loadCategories = category => {
    this.setState(prevState => ({
      ...prevState,
      isFetchingCategories: true,
    }));
    const parentId = category ? category.id : 0;
    axios
      .get(`${configs.services.jobs.categories}/${parentId}`)
      .then(response => {
        this.setState(prevState => ({
          ...prevState,
          isFetchingCategories: false,
          categories: response.data,
        }));
      });
  };

  pushSelectedCategory = category => {
    this.setState(prevState => ({
      ...prevState,
      selectedCategories: [...prevState.selectedCategories, category],
    }));
  };

  popCategories = count => {
    this.setState(prevState => ({
      ...prevState,
      selectedCategories: prevState.selectedCategories.slice(
        0,
        prevState.selectedCategories.length - count,
      ),
    }));
  };

  render() {
    const {
      state,
      loadCategories,
      loadTopCategories,
      pushSelectedCategory,
      popCategories,
    } = this;

    return (
      <CategoriesContext.Provider
        value={{
          ...state,
          loadTopCategories,
          loadCategories,
          pushSelectedCategory,
          popCategories,
        }}
      >
        {this.props.children}
      </CategoriesContext.Provider>
    );
  }
}

CategoriesProvider.propTypes = {
  children: PropTypes.any.isRequired,
};

export default CategoriesProvider;
