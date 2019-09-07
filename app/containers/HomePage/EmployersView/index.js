import React from 'react';
import { FormattedMessage } from 'react-intl';
import MContainer from 'mui/MContainer';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import QuoteCard from 'components/QuoteCard';
import messages from './messages';
import styles from './style';
import imgTestmonial from '../../../assets/images/icons/testmonial_h.png';

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

function EmployersView() {
  const classes = styles();

  return (
    <MContainer maxWidth="md" mt={6} className={classes.root}>
      <Typography variant="h1" component="h1" className={classes.sectionHead}>
        <FormattedMessage {...messages.title} />
      </Typography>
      <Grid container>
        <Grid item md={3}>
          <img
            alt="Tests"
            className={classes.section_img}
            src={imgTestmonial}
          />
        </Grid>
        <Grid item md={9}>
          <Grid container>
            {quotes.map(quote => (
              <Grid key={quote.id} item md={6}>
                <QuoteCard quote={quote} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </MContainer>
  );
}

export default EmployersView;
