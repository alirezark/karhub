import React from 'react';
import { FormattedMessage } from 'react-intl';
import MContainer from 'mui/MContainer';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import messages from './messages';
import JobSearch from '../../../components/JobSearch';
import MChip from '../../../mui/MChip';
import styles from './style';
import introImg from '../../../assets/images/home_1.png';

function SearchContainer() {
  const classes = styles();

  const foo = () => {};

  return (
    <MContainer maxWidth="md" mt={6} className={classes.root}>
      <Typography variant="h2" gutterBottom>
        <span className={classes.HotText}>
          <FormattedMessage {...messages.karhub} />،{' '}
        </span>
        <FormattedMessage {...messages.head1} />
      </Typography>
      <br />
      <JobSearch />
      <div className={classes.searchHistory}>
        <FormattedMessage {...messages.last_search} />
        {':'}
        <MChip label="طراح یوایکس" />
        <MChip label="طراح یوآی" />
        <MChip label="طراح گرافیک" />
        <MChip label="طراح محصول" />
        <Link className={classes.greyLink} onClick={foo} component="button">
          <FormattedMessage {...messages.delete_all} />
        </Link>
      </div>
      <Typography variant="h2" gutterBottom className={classes.head2}>
        <FormattedMessage {...messages.head2} />
        <Link className={classes.blueLink} onClick={foo} component="button">
          <FormattedMessage {...messages.employment_ad} />
        </Link>
      </Typography>

      <Grid container>
        <Grid item md={6}>
          <Typography variant="subtitle2" className={classes.subtitle2}>
            <FormattedMessage {...messages.sub_head1} />
            <Link
              className={classes.greenLink}
              onClick={foo}
              component="button"
            >
              <FormattedMessage {...messages.why_karhub} />
            </Link>
          </Typography>
          <div className={classes.employers}>
            <i className="ie-1" />
            <i className="ie-2" />
            <i className="ie-3" />
            <i className="ie-4" />
            <i className="ie-5" />
          </div>
        </Grid>
        <Grid item md={6}>
          <img className={classes.intro_img} src={introImg} />
        </Grid>
      </Grid>
    </MContainer>
  );
}

export default SearchContainer;
