import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import configs from 'app/config';

export const JobsContext = React.createContext();

class JobsProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      jobsList: [],
      isLoading: false,
    };
  }

  componentDidMount() {
    console.log('JOBS');
    this.loadJobs();
  }

  loadJobs = () => {
    this.setState(prevState => ({
      ...prevState,
      isLoading: true,
    }));
    axios.get(configs.services.jobs.list).then(response => {
      this.setState(prevState => ({
        ...prevState,
        isLoading: false,
        jobsList: response.data,
      }));
    });
  };

  render() {
    const { state } = this;

    return (
      <JobsContext.Provider
        value={{
          ...state,
        }}
      >
        {this.props.children}
      </JobsContext.Provider>
    );
  }
}

JobsProvider.propTypes = {
  children: PropTypes.any.isRequired,
};

export default JobsProvider;
