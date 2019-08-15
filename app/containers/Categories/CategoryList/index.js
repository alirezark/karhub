import React from 'react';
import { FormattedMessage } from 'react-intl';
import MContainer from 'mui/MContainer';
import PropTypes from 'prop-types';
import { Typography, Grid } from '@material-ui/core';
import CategoryCard from 'components/CategoryCard';
import messages from './messages';
import styles from './style';

function CategoryList(props) {
  const classes = styles();

  return (
    <MContainer maxWidth="md" mt={6} className={classes.root}>
      <Grid container>
        <Grid item md={1} />
        <Grid item md={11}>
          <Typography variant="h1" component="h1" className={classes.head}>
            <FormattedMessage {...messages.head} />
          </Typography>
          <Grid container spacing={4} className={classes.cardsContainer}>
            {props.categories.items.map(category => (
              <Grid item md={3}>
                <CategoryCard
                  title={category.title}
                  onClick={() => props.onSelectCategory(category)}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </MContainer>
  );
}

CategoryList.propTypes = {
  categories: PropTypes.object.isRequired,
  onSelectCategory: PropTypes.func,
};

export default CategoryList;
