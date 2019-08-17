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
import * as actions from './actions';

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
import User from './User';
import LoginDialog from './LoginDialog';
import styles from './style';

export function GlobalHeader(props) {
  useInjectReducer({ key: 'globalHeader', reducer });
  useInjectSaga({ key: 'globalHeader', saga });
  console.log(props);

  const openLoginDialog = function() {
    props.dispatch(actions.openLoginDialogAction());
  };

  const closeLoginDialog = function() {
    props.dispatch(actions.closeLoginDialogAction());
  };

  const handleLogin = function() {
    props.dispatch(actions.setUserLoginAction());
    closeLoginDialog();
  };

  const handleLogout = function() {
    props.dispatch(actions.setUserLogoutAction());
  };

  const classes = styles();
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
            {props.user.isLogin ?
              <User user={props.user} onLogout={handleLogout}/> :
              <Button
                aria-label="Account of current user"
                aria-controls="menu-appbar"
                className={classes.searchButton}
                onClick={openLoginDialog}
              >
                ورود
              </Button>
            }
            <LoginDialog open={props.user.showLoginDialog} handleClose={closeLoginDialog} handleLogin={handleLogin}/>
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
  user: makeSelectGlobalHeader(),
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
