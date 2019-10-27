import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import configs from 'app/config';

export const SendCVDialogContext = React.createContext();

class SendCVDialogProvider extends React.Component {
  DEFAULT_USER = {
    id: 0,
    isLogin: false,
  };

  constructor(props) {
    super(props);

    this.state = {
      showSendCVDialog: false,
      showSuccessDialog: false,
      isLoadingCV: false,
      job: {},
      abstractCV: {},
    };
  }

  componentDidMount() {
    console.log('CVDialog');
    this.loadAbstractCV();
  }

  loadAbstractCV = () => {
    this.setState(prevState => ({
      ...prevState,
      isLoadingCV: true,
    }));
    axios.get(configs.services.cv.abstract).then(response => {
      this.setState(prevState => ({
        ...prevState,
        isLoadingCV: false,
        abstractCV: response.data,
      }));
    });
  };

  handleShowSendCVDialog = job => {
    this.setState(prevState => ({
      ...prevState,
      showSendCVDialog: true,
      job,
    }));
  };

  handleCloseSendCVDialog = () => {
    this.setState(prevState => ({
      ...prevState,
      showSendCVDialog: false,
    }));
  };

  handleSendCV = () => {
    this.setState(prevState => ({
      ...prevState,
      showSendCVDialog: false,
      showSuccessDialog: true,
    }));
  };

  handleCloseSuccessSendCV = () => {
    this.setState(prevState => ({
      ...prevState,
      showSuccessDialog: false,
      showSendCVDialog: false,
    }));
  };

  render() {
    const {
      state,
      loadAbstractCV,
      handleShowSendCVDialog,
      handleCloseSendCVDialog,
      handleSendCV,
      handleCloseSuccessSendCV,
    } = this;

    return (
      <SendCVDialogContext.Provider
        value={{
          ...state,
          loadAbstractCV,
          handleShowSendCVDialog,
          handleCloseSendCVDialog,
          handleSendCV,
          handleCloseSuccessSendCV,
        }}
      >
        {this.props.children}
      </SendCVDialogContext.Provider>
    );
  }
}

SendCVDialogProvider.propTypes = {
  children: PropTypes.any.isRequired,
};

export default SendCVDialogProvider;
