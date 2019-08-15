import React from 'react';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
import MContainer from 'mui/MContainer';
import PropTypes from 'prop-types';
import { Typography, Grid, Breadcrumbs, Link } from '@material-ui/core';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import CategoryCard from 'components/CategoryCard';
import imgCategory from 'app/assets/images/category_page.png';
import iconData from 'app/assets/images/icons/data.png';
import messages from './messages';
import styles from './style';

const isTopCategories = function(props) {
  return props.selectedCategories.length === 0;
};

function TopCategories(props) {
  const classes = styles();

  const cardContainerClassnames = classNames(classes.cardsContainer, {
    [classes.cardsContainerSpaceBottom]: isTopCategories(props),
  });

  const handleCardClick = function(category) {
    if (!isTopCategories(props)) props.onSelectCategory(category);
  };

  const handleBreadcrumbsClick = function(index) {
    if (index < props.selectedCategories.length - 1)
      props.unSelectCategory(props.selectedCategories.length - index - 1);
  };

  const removeSelecteds = function() {
    props.unSelectCategory(props.selectedCategories.length);
  };

  return (
    <div className={classes.greyContainer}>
      <MContainer maxWidth="md" mt={6} className={classes.root}>
        <Grid container>
          <Grid item xs={12}>
            <Breadcrumbs
              separator={<NavigateBeforeIcon fontSize="small" />}
              aria-label="breadcrumb"
              className={classes.breadcrumb}
            >
              <Typography>خانه</Typography>
              <Typography onClick={removeSelecteds}>دسته بندی شغلی</Typography>
              {props.selectedCategories.map((category, index) => (
                <Typography onClick={() => handleBreadcrumbsClick(index)}>
                  {category.title}
                </Typography>
              ))}
            </Breadcrumbs>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item md={1}>
            <img
              alt="Tests"
              className={classes.section_img}
              src={imgCategory}
            />
          </Grid>
          <Grid item md={11}>
            <Typography
              variant="h1"
              component="h1"
              className={classes.sectionHead}
            >
              {props.categories.title}
            </Typography>
            <Typography variant="subtitle2" component="p">
              <FormattedMessage {...messages.sub_head} />
            </Typography>
            <Grid container spacing={4} className={cardContainerClassnames}>
              {props.categories.items.map(category => (
                <Grid item md={3}>
                  <CategoryCard
                    title={category.title}
                    icon={isTopCategories(props) ? iconData : undefined}
                    onClick={() => handleCardClick(category)}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </MContainer>
    </div>
  );
}

TopCategories.propTypes = {
  categories: PropTypes.object.isRequired,
  selectedCategories: PropTypes.array.isRequired,
  onSelectCategory: PropTypes.func,
  unSelectCategory: PropTypes.func,
};

export default TopCategories;
