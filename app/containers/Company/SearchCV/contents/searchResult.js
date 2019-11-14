import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Grid, makeStyles, Typography } from '@material-ui/core';
import avatar from 'app/assets/images/avatar.jpeg';
import MButton from 'mui/MButton';

const styles = makeStyles(theme => ({
  root: {
    padding: '0px 42px 20px',
    borderRadius: 8,
    boxShadow: '0 0 6px 1px rgba(0,0,0,.2)',
  },
  head: {
    borderBottom: '1px solid #f5f5f5',
    padding: '20px 0',
    display: 'flex',
    alignItems: 'center',
    marginBottom: 20,
    '& div:first-child': {
      flexGrow: 1,
    },
    '& p': {
      fontWeight: 300,
      fontSize: 12,
      color: '#818181',
    },
  },
  avatar: {
    width: 60,
    height: 60,
  },
  request: {
    display: 'flex',
    alignItems: 'stretch',
    marginBottom: 15,
    '&>div': {
      paddingBottom: 10,
      borderBottom: '1px solid #f5f5f5',
    },
  },
  icons: {
    color: '#9B9B9B',
    fontSize: '.75rem',
    marginTop: 24,
    maxWidth: 300,
    '& i': {
      margin: '0 .5rem',
      color: '#7ecfa6',
      display: 'inline-block',
      verticalAlign: 'middle',
    },
  },
  btnDescription: {
    color: theme.palette.primary.main,
  },
  btnView: {
    color: '#3a69db',
  },
  col_avatar: {
    flexBasis: 80,
    borderBottom: 'none!important',
  },
  col_info: {
    flexBasis: 250,
    '& h3': {
      marginBottom: 20,
    },
    '& p': {
      fontSize: 12,
      color: '#000',
    },
  },
  col_icons: {
    flexGrow: 1,
    marginTop: 10,
  },
  col_btns: {
    flexBasis: 120,
    textAlign: 'right',
  },
}));

function SearchResult(props) {
  const classes = styles();
  const { result, onMoveToFolder, showCV } = props;

  // TODO: make request row as component
  return (
    <div className={classes.root}>
      <div className={classes.head}>
        <div>
          <Typography variant="h2">مدیر فنی و پشتیبانی</Typography>
        </div>
        <div>
          <Typography>نتیجه جستجو: ۱۳ مورد</Typography>
        </div>
      </div>
      {result.map(row => (
        <div key={row.id} className={classes.request}>
          <div className={classes.col_avatar}>
            <Avatar src={avatar} alt="user name" className={classes.avatar} />
          </div>
          <div className={classes.col_info}>
            <Typography variant="h3">{row.name}</Typography>
            <Typography>{row.jobType}</Typography>
          </div>
          <div className={classes.col_icons}>
            <Grid container space={5} className={classes.icons}>
              <Grid item md={4}>
                <i className="i-company" />
                {row.company}
              </Grid>
              <Grid item md={4}>
                <i className="i-location" />
                {row.city}
              </Grid>
              <Grid item md={4}>
                <i className="flaticon-calendar" />
                {row.age}
              </Grid>
            </Grid>
          </div>
          <div className={classes.col_btns}>
            <MButton
              className={classes.btnDescription}
              onClick={onMoveToFolder}
            >
              انتقال به پوشه
            </MButton>
            <MButton className={classes.btnView} onClick={showCV}>
              مشاهده
            </MButton>
          </div>
        </div>
      ))}
    </div>
  );
}

SearchResult.propTypes = {
  result: PropTypes.array,
  onMoveToFolder: PropTypes.func.isRequired,
  showCV: PropTypes.func.isRequired,
};

export default SearchResult;
