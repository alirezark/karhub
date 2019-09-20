import React from 'react';
import PropTypes from 'prop-types';
import configs from 'app/config';

export const UserContext = React.createContext();

class UserProvider extends React.Component {
  DEFAULT_USER = {
    id: 0,
    isLogin: false,
  };

  constructor(props) {
    super(props);

    this.state = {
      user: {
        ...this.DEFAULT_USER,
      },
      isLoginLoading: false,
      showLoginDialog: false,
      showRegisterDialog: false,
    };
  }

  showLogin = () => {
    this.setState(prevState => ({
      ...prevState,
      showRegisterDialog: false,
      showLoginDialog: true,
    }));
  };

  showRegister = () => {
    this.setState(prevState => ({
      ...prevState,
      showRegisterDialog: true,
      showLoginDialog: false,
    }));
  };

  hideLogin = () => {
    this.setState(prevState => ({
      ...prevState,
      showLoginDialog: false,
    }));
  };

  hideRegister = () => {
    this.setState(prevState => ({
      ...prevState,
      showRegisterDialog: false,
    }));
  };

  loginRequest = (username, password) =>
    fetch(configs.services.account.login, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    }).then(response => response.json());

  handleLogin = (username, password) => {
    this.setState(state => ({ ...state, isLoginLoading: true }));
    this.loginRequest(username, password).then(user => {
      this.setState(state => ({
        ...state,
        user: {
          ...user,
          isLogin: true,
        },
        showLoginDialog: false,
        isLoginLoading: false,
      }));
    });
  };

  handleLogout = () => {
    this.setState(state => ({
      ...state,
      user: this.DEFAULT_USER,
    }));
  };

  render() {
    const {
      showLogin,
      showRegister,
      state,
      hideLogin,
      hideRegister,
      handleLogin,
      handleLogout,
    } = this;

    return (
      <UserContext.Provider
        value={{
          ...state,
          showLogin,
          showRegister,
          hideLogin,
          hideRegister,
          handleLogin,
          handleLogout,
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

UserProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default UserProvider;
