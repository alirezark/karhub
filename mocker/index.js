const proxy = {
  // Priority processing.
  // apiMocker(app, path, option)
  // This is the option parameter setting for apiMocker
  _proxy: {
    proxy: {
      '/repos/(.*)': 'https://api.github.com/',
      '/:owner/:repo/raw/:ref/(.*)': 'http://127.0.0.1:2018',
    },
    changeHost: true,
    // modify the http-proxy options
    httpProxy: {
      options: {
        ignorePath: true,
      },
      listeners: {
        proxyReq(proxyReq, req, res, options) {
          console.log('proxyReq');
        },
      },
    },
  },
  // =====================
  'GET /api/user': {
    id: 1,
    username: 'kenny',
    sex: 6,
  },
  'GET /api/jobs': [
    { id:1, title: 'مدیر فنی و پشتیبانی', company: 'ایرانسل', location: 'تهران' },
    { id:2, title: 'مدیر فنی و پشتیبانی', company: 'ایرانسل', location: 'تهران' },
    { id:3, title: 'مدیر فنی و پشتیبانی', company: 'ایرانسل', location: 'تهران' },
    { id:4, title: 'مدیر فنی و پشتیبانی', company: 'ایرانسل', location: 'تهران' },
  ],
};

module.exports = proxy;
