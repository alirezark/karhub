import React from 'react';
import { FormattedMessage } from 'react-intl';
import MContainer from 'mui/MContainer';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import messages from './messages';
import styles from './style';

function Companies() {
  const classes = styles();

  return (
    <MContainer maxWidth="md" mt={6} className={classes.root}>
      <Typography variant="h2" gutterBottom className={classes.numContain}>
        <span className={classes.numText}>
          23{' '}
        </span>
        <FormattedMessage {...messages.thousand} />
      </Typography>
      <Typography component="h2" variant="h2" className={classes.title}>
        <FormattedMessage {...messages.title} />
      </Typography>
      <Grid container>
        <Grid item md={2}>
          <i className="ie-140-1" />
        </Grid>
        <Grid item md={2}>
          <i className="ie-140-2" />
        </Grid>
        <Grid item md={2}>
          <i className="ie-140-3" />
        </Grid>
        <Grid item md={2}>
          <i className="ie-140-4" />
        </Grid>
        <Grid item md={2}>
          <i className="ie-140-5" />
        </Grid>
        <Grid item md={2}>
          <i className="ie-140-6" />
        </Grid>
      </Grid>
    </MContainer>
  );
}

export default Companies;
