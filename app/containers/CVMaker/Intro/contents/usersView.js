import React from 'react';
import { makeStyles, Grid, Typography } from '@material-ui/core';
import QuoteCard from 'app/components/QuoteCard';
import imgTestmonial from 'app/assets/images/icons/testmonial_h.png';

const styles = makeStyles(() => ({
  head: {
    fontWeight: 900,
    margin: '70px 0 60px',
  },
  img: {
    float: 'right',
    marginRight: '2rem',
  },
}));

const quotes = [
  {
    id: 1,
    name: 'فرهاد جعفری',
    position: 'مدیر عامل استدیو ایکس',
    avatar: 'avatar1',
  },
  {
    id: 2,
    name: 'پدرام فرزین',
    position: 'مدیر عامل پتروشیمی',
    avatar: 'avatar2',
  },
];

function UsersView() {
  const classes = styles();

  return (
    <div>
      <Typography variant="h1" className={classes.head}>
        نظر کارجویان در مورد کارهاب
      </Typography>
      <Grid container>
        <Grid item md={3}>
          <img
            alt="Tests"
            className={classes.img}
            src={imgTestmonial}
          />
        </Grid>
        <Grid item md={9}>
          <Grid container>
            {quotes.map(quote => (
              <Grid key={quote.id} item md={6}>
                <QuoteCard quote={quote} className='card' />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default UsersView;
