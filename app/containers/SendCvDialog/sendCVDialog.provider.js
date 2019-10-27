import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import configs from 'app/config';
import { SharedContext } from 'app/components/SharedContext';
import { SendCVDialogContext } from './sendCVDialog.context';

class SendCVDialogProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSuccessDialog: false,
      isLoadingCV: false,
      abstractCV: {},
    };
  }

  componentDidMount() {
    this.context.setContext('showSendCVDialog', false);
    this.context.setContext('sendCVJob', {});
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
    this.context.setContext('showSendCVDialog', true);
    this.context.setContext('sendCVJob', job);
  };

  handleCloseSendCVDialog = () => {
    this.context.setContext('showSendCVDialog', false);
  };

  handleSendCV = () => {
    this.context.setContext('showSendCVDialog', false);
    this.setState(prevState => ({
      ...prevState,
      showSuccessDialog: true,
    }));
  };

  handleCloseSuccessSendCV = () => {
    this.context.setContext('showSendCVDialog', false);
    this.setState(prevState => ({
      ...prevState,
      showSuccessDialog: false,
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

    const { showSendCVDialog, sendCVJob } = this.context.sharedContext;

    return (
      <SendCVDialogContext.Provider
        value={{
          ...state,
          job: sendCVJob,
          showSendCVDialog,
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
SendCVDialogProvider.contextType = SharedContext;

export default SendCVDialogProvider;
