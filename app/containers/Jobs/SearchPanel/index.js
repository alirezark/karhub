import React from 'react';
import { FormattedMessage } from 'react-intl';
import MContainer from 'mui/MContainer';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import messages from './messages';
import styles from './style';
import JobSearch from 'components/JobSearch';
import IconNotify from 'assets/images/icons/notification.png';

function SearchPanel() {
  const classes = styles();

  return (
    <MContainer maxWidth="md" mt={6} className={classes.root}>
      <div className={classes.panel}>
        <Grid container spacing={3}>
          <Grid item md={9}>
            <JobSearch />
          </Grid>
          <Grid item md={3}>
            <div className={classes.divider} />
            <Button className={classes.notify}>
              <img alt="notify" src={IconNotify} />
              <FormattedMessage {...messages.notify_me} />
            </Button>
          </Grid>
        </Grid>
      </div>
    </MContainer>
  );
}

export default SearchPanel;
