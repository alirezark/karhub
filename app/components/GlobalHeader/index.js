/**
 *
 * GlobalHeader
 *
 */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';
import { intlShape, injectIntl, FormattedMessage } from 'react-intl';
import MAppBar from '../../mui/MAppBar';
import { MTabs, MTab } from '../../mui/MTabs';
import messages from './messages';

import logo from '../../assets/images/logo.png';
import avatar from '../../assets/images/avatar.jpeg';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  tabs: {
    flexGrow: 1,
  },
  avatar: {
    marginRight: 5,
  },
  searchButton: {
    color: '#888888',
    marginRight: 10,
  },
}));

function GlobalHeader(props) {
  const classes = useStyles();
  const [auth] = React.useState(true);
  const [tabIndex, setTabIndex] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  function handleMenu(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function handleTabChange(e, val) {
    setTabIndex(val);
  }

  return (
    <div className={classes.root}>
      <MAppBar position="static">
        <Container>
          <Toolbar>
            <Link to="/">
              <img src={logo} alt="t" />
            </Link>
            <MTabs value={tabIndex} className={classes.tabs} onChange={handleTabChange}>
              <MTab label={props.intl.formatMessage({ ...messages.home })} />
              <MTab
                label={props.intl.formatMessage({
                  ...messages.jobs_opportunities,
                })}
              />
              <MTab
                label={props.intl.formatMessage({ ...messages.companies_info })}
              />
              <MTab label={props.intl.formatMessage({ ...messages.exam })} />
              <MTab
                label={props.intl.formatMessage({ ...messages.cv_maker })}
              />
              <MTab label={props.intl.formatMessage({ ...messages.blog })} />
            </MTabs>

            <Button
              aria-label="Account of current user"
              aria-controls="menu-appbar"
              className={classes.searchButton}
            >
              <FormattedMessage {...messages.search_csv} />
            </Button>

            {auth && (
              <div>
                <Button
                  aria-label="Account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <Avatar
                    src={avatar}
                    alt="user name"
                    className={classes.avatar}
                  />
                  مانکی دی لوفی
                </Button>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  getContentAnchorEl={null}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </Container>
      </MAppBar>
    </div>
  );
}

GlobalHeader.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(GlobalHeader);
