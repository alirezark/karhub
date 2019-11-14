import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Typography } from '@material-ui/core';
import MButton from 'mui/MButton';
import { isEmpty } from 'lodash';
import icon1 from 'app/assets/images/icon-1.png';
import icon2 from 'app/assets/images/icon-2.png';
import icon3 from 'app/assets/images/icon-3.png';

const styles = makeStyles(() => ({
  card: {
    display: 'flex',
    flexGrow: 1,
    padding: 10,
    borderRadius: 8,
    transition: '200ms',
    marginBottom: 12,
    '&:hover': {
      boxShadow: '0 0 14px 0 rgba(75,187,129,0.5)',
    },
  },
  icon: {
    flexBasis: '85px',
    display: 'flex',
    alignItems: 'center',
  },
  detail: {
    flexGrow: 1,
    '& h3': {
      fontSize: '1rem',
      fontWeight: 900,
      margin: '10px 0 1rem',
    },
    '& p': {
      fontSize: '.8rem',
    },
  },
  menu: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    '& div': {
      fontSize: '.75rem',
      color: '#9B9B9B',
      lineHeight: '24px',
      paddingRight: '1rem',
    },
  },
  btnBlue: {
    float: 'right',
    backgroundColor: '#6682C3',
    color: 'white',
    width: 180,
    height: 48,
  },
}));

const getIcon = icon => {
  if (icon === 'icon-1') return icon1;
  if (icon === 'icon-2') return icon2;
  return icon3;
};

function EmployerRequests(props) {
  const classes = styles();
  const { employerRequests } = props;

  if (isEmpty(employerRequests)) return <div />;

  return (
    <div>
      {employerRequests.map(request => (
        <div key={request.id} className={classes.card}>
          <div className={classes.icon}>
            <img alt="company" src={getIcon(request.icon)} />
          </div>
          <div className={classes.detail}>
            <Typography variant="h3">{request.title}</Typography>
            <Typography>{request.description}</Typography>
          </div>
          <div className={classes.menu}>
            <div className={classes.date}>{request.date}</div>
            <MButton className={classes.btnBlue} variant="contained">
              تایید درخواست
            </MButton>
          </div>
        </div>
      ))}
    </div>
  );
}

EmployerRequests.propTypes = {
  employerRequests: PropTypes.array,
};

export default EmployerRequests;
