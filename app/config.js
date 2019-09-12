const JOBS_SERVER = 'http://localhost:3721/rest/jobs';
const ACCOUNT_SERVER = 'http://localhost:3721/rest/user';
const CV_SERVER = 'http://localhost:3721/rest/cv';
const COMPANY_SERVER = 'http://localhost:3721/rest/company';

const configs = {
  services: {
    jobs: {
      list: `${JOBS_SERVER}`,
      topCategories: `${JOBS_SERVER}/topCategories`,
      categories: `${JOBS_SERVER}/categories`,
      favorites: `${JOBS_SERVER}/favorites`,
    },
    account: {
      login: `${ACCOUNT_SERVER}/login`,
      profile: `${ACCOUNT_SERVER}`,
      paymentHistory: `${ACCOUNT_SERVER}/payment_history`,
      employerRequests: `${ACCOUNT_SERVER}/employer_requests`,
      tests: `${ACCOUNT_SERVER}/tests`,
    },
    cv: {
      abstract: `${CV_SERVER}/abstract`,
      uploaded: `${CV_SERVER}/uploaded`,
      sent: `${CV_SERVER}/sent`,
    },
    company: {
      profile: `${COMPANY_SERVER}`,
      favorite: `${COMPANY_SERVER}/favorites`,
    },
  },
};

export default configs;
