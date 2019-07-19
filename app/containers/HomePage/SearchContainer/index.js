import React from 'react';
import { FormattedMessage } from 'react-intl';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import messages from './messages';
import JobSearch from '../../../components/JobSearch';

const styles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(6),
  },
  HotText: {
    color: theme.palette.primary.main,
    fontWeight: 'bold',
  },
}));

function SearchContainer() {
  const classes = styles();

  return (
    <Container maxWidth="md" mt={6} className={classes.root}>
      <Typography variant="h6" gutterBottom>
        <span className={classes.HotText}>
          <FormattedMessage {...messages.karhub} />،{' '}
        </span>
        <FormattedMessage {...messages.head1} />
      </Typography>
      <br />
      <JobSearch />
    </Container>
  );
}

export default SearchContainer;
