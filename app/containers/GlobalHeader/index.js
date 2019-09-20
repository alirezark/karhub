/**
 *
 * GlobalHeader
 *
 */

import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import MAppBar from 'mui/MAppBar';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import logo from 'app/assets/images/logo.png';
import Button from '@material-ui/core/Button';
import { UserContext } from 'app/containers/GlobalHeader/UserProvider';
import Navigations from './Navigations';
import messages from './messages';
import User from './User';
import LoginDialog from './LoginDialog';
import RegisterDialog from './RegisterDialog';
import styles from './style';

export function GlobalHeader() {
  const {
    user,
    showLoginDialog,
    showRegisterDialog,
    showLogin,
    showRegister,
    hideLogin,
    hideRegister,
    handleLogin,
    handleLogout,
  } = useContext(UserContext);

  const classes = styles();
  return (
    <div className={classes.root}>
      <MAppBar position="static">
        <Container>
          <Toolbar>
            <Link to="/" component="a">
              <img className={classes.logo} src={logo} alt="t" />
            </Link>

            <Navigations user={user} />
            {(!user.isLogin || user.role !== 'company') && (
              <Button
                aria-label="Account of current user"
                aria-controls="menu-appbar"
                className={classes.searchButton}
              >
                <FormattedMessage {...messages.search_csv} />
              </Button>
            )}
            {user.isLogin ? (
              <User user={user} onLogout={handleLogout} />
            ) : (
              <Button
                aria-label="Account of current user"
                aria-controls="menu-appbar"
                className={classes.searchButton}
                onClick={showLogin}
              >
                ورود
              </Button>
            )}
            <LoginDialog
              open={showLoginDialog}
              handleClose={hideLogin}
              handleLogin={handleLogin}
              showRegister={showRegister}
            />
            <RegisterDialog
              open={showRegisterDialog}
              handleClose={hideRegister}
              handleRegister={handleLogin}
              showLogin={showLogin}
            />
          </Toolbar>
        </Container>
      </MAppBar>
    </div>
  );
}

export default GlobalHeader;
