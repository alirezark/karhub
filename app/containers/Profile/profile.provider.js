import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import configs from 'app/config';

export const ProfileContext = React.createContext();

class ProfileProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: {},
      paymentHistory: [],
      abstractCV: {},
      uploadedCV: [],
      favoriteJobs: [],
      favoriteCompanies: [],
      sentCVs: [],
      employerRequests: [],
      tests: [],
      isLoading: false,
      isLoadingPayment: false,
      isLoadingUploadedCV: false,
      isLoadingAbstractCV: false,
      isLoadingFavoritesJobs: false,
      isLoadingSentCV: false,
      isLoadingFavoriteCompanies: false,
      isLoadingEmployerRequests: false,
      isLoadingTests: false,
    };
  }

  componentDidMount() {
    this.loadProfile();
  }

  loadProfile = () => {
    this.setState(prevState => ({
      ...prevState,
      isLoading: true,
    }));
    axios.get(configs.services.account.profile).then(response => {
      this.setState(prevState => ({
        ...prevState,
        isLoading: false,
        profile: response.data,
      }));
    });
  };

  loadPaymentHistory = () => {
    this.setState(prevState => ({
      ...prevState,
      isLoadingPayment: true,
    }));
    axios.get(configs.services.account.paymentHistory).then(response => {
      this.setState(prevState => ({
        ...prevState,
        isLoadingPayment: false,
        paymentHistory: response.data,
      }));
    });
  };

  loadAbstractCV = () => {
    this.setState(prevState => ({
      ...prevState,
      isLoadingAbstractCV: true,
    }));
    axios.get(configs.services.cv.abstract).then(response => {
      this.setState(prevState => ({
        ...prevState,
        isLoadingAbstractCV: false,
        abstractCV: response.data,
      }));
    });
  };

  loadUploadedCV = () => {
    this.setState(prevState => ({
      ...prevState,
      isLoadingUploadedCV: true,
    }));
    axios.get(configs.services.cv.uploaded).then(response => {
      this.setState(prevState => ({
        ...prevState,
        isLoadingUploadedCV: false,
        uploadedCV: response.data,
      }));
    });
  };

  loadFavoriteJobs = () => {
    this.setState(prevState => ({
      ...prevState,
      isLoadingFavoritesJobs: true,
    }));
    axios.get(configs.services.jobs.favorites).then(response => {
      this.setState(prevState => ({
        ...prevState,
        isLoadingFavoritesJobs: false,
        favoriteJobs: response.data,
      }));
    });
  };

  loadSentCV = () => {
    this.setState(prevState => ({
      ...prevState,
      isLoadingSentCV: true,
    }));
    axios.get(configs.services.cv.sent).then(response => {
      this.setState(prevState => ({
        ...prevState,
        isLoadingSentCV: false,
        sentCVs: response.data,
      }));
    });
  };

  loadFavoriteCompanies = () => {
    this.setState(prevState => ({
      ...prevState,
      isLoadingFavoriteCompanies: true,
    }));
    axios.get(configs.services.company.favorite).then(response => {
      this.setState(prevState => ({
        ...prevState,
        isLoadingFavoriteCompanies: false,
        favoriteCompanies: response.data,
      }));
    });
  };

  loadEmployerRequests = () => {
    this.setState(prevState => ({
      ...prevState,
      isLoadingEmployerRequests: true,
    }));
    axios.get(configs.services.account.employerRequests).then(response => {
      this.setState(prevState => ({
        ...prevState,
        isLoadingEmployerRequests: false,
        employerRequests: response.data,
      }));
    });
  };

  loadTests = () => {
    this.setState(prevState => ({
      ...prevState,
      isLoadingTests: true,
    }));
    axios.get(configs.services.account.tests).then(response => {
      this.setState(prevState => ({
        ...prevState,
        isLoadingTests: false,
        tests: response.data,
      }));
    });
  };

  render() {
    const {
      state,
      loadProfile,
      loadPaymentHistory,
      loadAbstractCV,
      loadUploadedCV,
      loadFavoriteCompanies,
      loadFavoriteJobs,
      loadSentCV,
      loadEmployerRequests,
      loadTests,
    } = this;

    return (
      <ProfileContext.Provider
        value={{
          profile: state,
          loadProfile,
          loadPaymentHistory,
          loadAbstractCV,
          loadUploadedCV,
          loadFavoriteCompanies,
          loadFavoriteJobs,
          loadSentCV,
          loadEmployerRequests,
          loadTests,
        }}
      >
        {this.props.children}
      </ProfileContext.Provider>
    );
  }
}

ProfileProvider.propTypes = {
  children: PropTypes.any.isRequired,
};

export default ProfileProvider;
