import React from 'react';
import { SharedContext } from 'app/components/SharedContext';

const SendCVDialogContext = React.createContext();

const withSendCVDialog = WrappedComponent =>
  class extends React.Component {
    static contextType = SharedContext;

    showSendCVDialog = job => {
      this.context.setContext('showSendCVDialog', true);
      this.context.setContext('sendCVJob', job);
    };

    render() {
      return (
        <WrappedComponent
          showSendCVDialog={this.showSendCVDialog}
          {...this.props}
        />
      );
    }
  };

export { withSendCVDialog, SendCVDialogContext };
