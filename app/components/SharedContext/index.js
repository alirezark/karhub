import React from 'react';
import PropTypes from 'prop-types';

export const SharedContext = React.createContext();

class SharedContextProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sharedContext: {},
    };
  }

  setContext = (name, value) => {
    this.setState(prevState => ({
      sharedContext: {
        ...prevState.sharedContext,
        [name]: value,
      },
    }));
  };

  getContext = name => this.state.sharedContext[name];

  render() {
    const { sharedContext } = this.state;
    const { setContext, getContext } = this;
    return (
      <SharedContext.Provider
        value={{
          sharedContext,
          setContext,
          getContext,
        }}
      >
        {this.props.children}
      </SharedContext.Provider>
    );
  }
}

SharedContextProvider.propTypes = {
  children: PropTypes.any.isRequired,
};

export default SharedContextProvider;
