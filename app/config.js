const JOBS_SERVER = 'http://localhost:3721/rest';
const ACCOUNT_SERVER = 'http://localhost:3721/rest';

const configs = {
  services: {
    jobs: {
      list: `${JOBS_SERVER}/jobs`,
      topCategories: `${JOBS_SERVER}/jobs/topCategories`,
      categories: `${JOBS_SERVER}/jobs/categories`,
    },
    account: {
      profile: `${ACCOUNT_SERVER}/user/profile`,
    },
  },
};

export default configs;
