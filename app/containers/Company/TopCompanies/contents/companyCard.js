import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from '@material-ui/core';
import classNames from 'classnames';
import icon1 from 'app/assets/images/icon-1.png';
import icon2 from 'app/assets/images/icon-2.png';
import icon3 from 'app/assets/images/icon-3.png';
import cardBox from 'mui/MCard/cardBox';

const styles = makeStyles(() => ({
  card: {
    ...cardBox().panel,
    display: 'flex',
    marginBottom: '-5px',
    position: 'relative',
    zIndex: 2,
    '&:hover': {
      boxShadow: '0 0 14px 0 rgba(75,187,129,0.5)',
      '& .delete-icon': {
        opacity: '.7',
      },
    },
  },
  details: {
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 1,
    cursor: 'pointer',
  },
  content: {
    flexGrow: 1,
    padding: '8px 0 16px',
    '& p': {
      fontSize: 12,
      color: '#fdb94c',
      fontWeight: 800,
    },
  },
  cover: {
    width: 100,
    backgroundSize: 'auto',
    cursor: 'pointer',
  },
  title: {
    padding: '16px 0',
    color: '#4A4A4A',
  },
}));

const selectIcon = icon => {
  if (icon === 1) return icon1;
  if (icon === 2) return icon2;
  return icon3;
};

function CompanyCard(props) {
  const classes = styles();
  const { company } = props;

  return (
    <Card className={classes.card} raised>
      <CardMedia
        className={classNames(classes.cover, 'card-cover')}
        image={selectIcon(company.icon)}
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5" className={classes.title}>
            {company.name}
          </Typography>
          <Typography>تعداد شغل فعال: {company.activeJobs}</Typography>
        </CardContent>
      </div>
    </Card>
  );
}

CompanyCard.propTypes = {
  company: PropTypes.object.isRequired,
};

export default CompanyCard;
