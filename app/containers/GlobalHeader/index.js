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
import MAppBar from 'mui/MAppBar';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import logo from 'app/assets/images/logo.png';
import Button from '@material-ui/core/Button';
import Navigations from './Navigations';
import messages from './messages';
import saga from './saga';
import reducer from './reducer';
import makeSelectGlobalHeader from './selectors';
import * as actions from './actions';
import User from './User';
import LoginDialog from './LoginDialog';
import RegisterDialog from './RegisterDialog';
import styles from './style';

export function GlobalHeader(props) {
  useInjectReducer({ key: 'globalHeader', reducer });
  useInjectSaga({ key: 'globalHeader', saga });
  const { history, user, dispatch } = props;

  const openLoginDialog = () => {
    dispatch(actions.openLoginDialogAction());
  };

  const closeLoginDialog = () => {
    dispatch(actions.closeLoginDialogAction());
  };

  const handleLogin = () => {
    dispatch(actions.setUserLoginAction());
    closeLoginDialog();
  };

  const handleLogout = () => {
    dispatch(actions.setUserLogoutAction());
  };

  const openRegisterDialog = () => {
    dispatch(actions.openRegisterDialogAction());
  };

  const closeRegisterDialog = () => {
    dispatch(actions.closeRegisterDialogAction());
  };

  const handleRegister = () => {
    dispatch(actions.setUserLoginAction());
    closeRegisterDialog();
  };

  const classes = styles();
  return (
    <div className={classes.root}>
      <MAppBar position="static">
        <Container>
          <Toolbar>
            <Link to="/" component="a">
              <img src={logo} alt="t" />
            </Link>

            <Navigations history={history} />

            <Button
              aria-label="Account of current user"
              aria-controls="menu-appbar"
              className={classes.searchButton}
            >
              <FormattedMessage {...messages.search_csv} />
            </Button>
            {user.isLogin ? (
              <User user={user} history={history} onLogout={handleLogout} />
            ) : (
              <Button
                aria-label="Account of current user"
                aria-controls="menu-appbar"
                className={classes.searchButton}
                onClick={openLoginDialog}
              >
                ورود
              </Button>
            )}
            <LoginDialog
              open={user.showLoginDialog}
              handleClose={closeLoginDialog}
              handleLogin={handleLogin}
              showRegister={openRegisterDialog}
            />
            <RegisterDialog
              open={user.showRegisterDialog}
              handleClose={closeRegisterDialog}
              handleRegister={handleRegister}
              showLogin={openLoginDialog}
            />
          </Toolbar>
        </Container>
      </MAppBar>
    </div>
  );
}

GlobalHeader.propTypes = {
  dispatch: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
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
