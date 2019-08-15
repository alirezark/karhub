/**
 *
 * CategoryCard
 *
 */

import React from 'react';
import classNames from 'classnames';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import icon_data from 'app/assets/images/icons/data.png';
import cardBox from 'mui/MCard/cardBox';

const styles = makeStyles(theme => ({
  card: {
    ...cardBox().panel,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#f6f6f6',
    },
    '&:active': {
      boxShadow: '0 0 14px 0 rgba(178,178,178,0.3)',
    },
  },
  icon: {
    ...cardBox().icon,
  },
  cardContent: {
    textAlign: 'center',
    paddingBottom: '16px!important',
  },
  cardTitle: {
    height: 44,
    fontWeight: 500,
    color: '#4A4A4A',
  },
  cardTitleFlex: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '2rem 0',
  }
}));

function CategoryCard(props) {
  const classes = styles();

  const cardTitleClasses = classNames(classes.cardTitle, {
    [classes.cardTitleFlex]: props.icon === undefined,
  });

  return (
    <Card className={classes.card} raised onClick={props.onClick}>
      {props.icon ? (
        <CardMedia
          className={classes.icon}
          image={props.icon}
          title="Live from space album cover"
        />
      ) : (
        ''
      )}

      <CardContent className={classes.cardContent}>
        <Typography component="h6" variant="h6" className={cardTitleClasses}>
          {props.title}
        </Typography>
      </CardContent>
    </Card>
  );
}

CategoryCard.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.any,
  onClick: PropTypes.func,
};

CategoryCard.propTypes = {};

export default CategoryCard;
