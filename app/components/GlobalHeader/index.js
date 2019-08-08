/**
 *
 * GlobalHeader
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';
import Navigations from './navigations';
import { withRouter } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import avatar from 'app/assets/images/avatar.jpeg';
import logo from 'app/assets/images/logo.png';
import MAppBar from '../../mui/MAppBar';
import styles from './style';
import messages from './messages';

function GlobalHeader(props) {
  const classes = styles();
  const [auth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  function handleMenu(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div className={classes.root}>
      <MAppBar position="static">
        <Container>
          <Toolbar>
            <Link to="/">
              <img src={logo} alt="t" />
            </Link>

            <Navigations history={props.history} />

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
  history: PropTypes.object.isRequired,
}

export default withRouter(GlobalHeader);
