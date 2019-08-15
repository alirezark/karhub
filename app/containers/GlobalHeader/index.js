/**
 *
 * GlobalHeader
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectGlobalHeader from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import MAppBar from 'mui/MAppBar';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import logo from 'app/assets/images/logo.png';
import Navigations from './Navigations';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import avatar from 'app/assets/images/avatar.jpeg';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import styles from './style';

export function GlobalHeader(props) {
  useInjectReducer({ key: 'globalHeader', reducer });
  useInjectSaga({ key: 'globalHeader', saga });

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
                  <MenuItem onClick={handleClose}>پروفایل</MenuItem>
                  <MenuItem onClick={handleClose}>خروج</MenuItem>
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
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  globalHeader: makeSelectGlobalHeader(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(GlobalHeader);
