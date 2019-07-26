import React from 'react';
import { FormattedMessage } from 'react-intl';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import messages from './messages';
import styles from './style';

function Features() {
  const classes = styles();

  return (
    <Container maxWidth="md" className={classes.root} mt={6}>
      <Grid container spacing={10}>
        <Grid Item md={3} className={classes.featBox}>
          <i className="ic-create-cv" />
          <Typography variant="h2">
            <FormattedMessage {...messages.create_cv} />
          </Typography>
          <Typography variant="body2">
            <FormattedMessage {...messages.create_cv_sub} />
          </Typography>
        </Grid>
        <Grid Item md={3} className={classes.featBox}>
          <i className="ic-tests" />
          <Typography variant="h2">
            <FormattedMessage {...messages.tests} />
          </Typography>
          <Typography variant="body2">
            <FormattedMessage {...messages.tests_sub} />
          </Typography>
        </Grid>
        <Grid Item md={3} className={classes.featBox}>
          <i className="ic-company-info" />
          <Typography variant="h2">
            <FormattedMessage {...messages.companies_info} />
          </Typography>
          <Typography variant="body2">
            <FormattedMessage {...messages.companies_info_sub} />
          </Typography>
        </Grid>
        <Grid Item md={3} className={classes.featBox}>
          <i className="ic-notify" />
          <Typography variant="h2">
            <FormattedMessage {...messages.alert} />
          </Typography>
          <Typography variant="body2">
            <FormattedMessage {...messages.alert_sub} />
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Features;
