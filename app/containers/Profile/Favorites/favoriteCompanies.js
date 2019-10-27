import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Typography } from '@material-ui/core';
import icon1 from 'app/assets/images/icon-1.png';
import icon2 from 'app/assets/images/icon-2.png';
import icon3 from 'app/assets/images/icon-3.png';
import classNames from 'classnames';

const styles = makeStyles(theme => ({
  companyCard: {
    display: 'inline-block',
    width: '18%',
    margin: '1%',
    textAlign: 'center',
    padding: '10px 10px 20px',
    borderRadius: 8,
    cursor: 'pointer',
    position: 'relative',
    '&:hover': {
      boxShadow: '0 0 14px 0 rgba(75,187,129,0.5)',
      '& .delete-icon': {
        display: 'block',
      },
    },
    '& h2': {
      margin: '1rem 0',
      fontSize: '1rem',
    },
  },
  viewProfile: {
    color: theme.palette.primary.main,
    fontSize: '.7rem',
  },
  deleteIcon: {
    position: 'absolute',
    top: 5,
    left: 5,
    opacity: '.7',
    cursor: 'pointer',
    display: 'none',
    '& i:before': {
      fontSize: 16,
    },
    '&:hover': {
      opacity: 1,
    },
  },
}));

const getIcon = icon => {
  if (icon === 'icon-1') return icon1;
  if (icon === 'icon-2') return icon2;
  return icon3;
};

function FavoriteCompanies(props) {
  const classes = styles();
  const { favoriteCompanies } = props;
  const [companies, setCompanies] = useState({
    list: [],
  });

  useEffect(() => {
    setCompanies({
      list: favoriteCompanies,
    });
  }, [favoriteCompanies]);

  if (!favoriteCompanies) return <div />;

  const handleDelete = index => {
    setCompanies({
      list: companies.list.filter((_, i) => i !== index),
    });
  };

  return (
    <div>
      {companies.list.map((company, index) => (
        <div className={classes.companyCard} key={company.id}>
          <div
            className={classNames(classes.deleteIcon, 'delete-icon')}
            onClick={() => handleDelete(index)}
          >
            <i className="flaticon-close" />
          </div>
          <div className={classes.companyIcon}>
            <img alt={company.name} src={getIcon(company.icon)} />
          </div>
          <Typography variant="h2">{company.name}</Typography>
          <div className={classes.viewProfile}>مشاهده پروفایل</div>
        </div>
      ))}
    </div>
  );
}

FavoriteCompanies.propTypes = {
  favoriteCompanies: PropTypes.array.isRequired,
};

export default FavoriteCompanies;
