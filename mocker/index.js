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
  'GET /rest/jobs': [
    { id:1, title: 'مدیر فنی و پشتیبانی', company: 'ایرانسل', location: 'تهران' },
    { id:2, title: 'مدیر فنی و پشتیبانی', company: 'ایرانسل', location: 'تهران' },
    { id:3, title: 'مدیر فنی و پشتیبانی', company: 'ایرانسل', location: 'تهران' },
    { id:4, title: 'مدیر فنی و پشتیبانی', company: 'ایرانسل', location: 'تهران' },
  ],
  'GET /rest/jobs/topCategories': [
    { id: 1, title: 'مهندسی، برنامه نویسی و طراحی وب', icon: 'icon-1'},
    { id: 1, title: 'مهندسی، پتروشیمی و غذا', icon: 'icon-1'},
    { id: 1, title: 'مهندسی، پتروشیمی و غذا', icon: 'icon-1'},
    { id: 1, title: 'مهندسی، مکانیک و سیالات', icon: 'icon-1'},
    { id: 1, title: 'تحقیقات و بررسی', icon: 'icon-1'},
    { id: 1, title: 'مهندسی، پتروشیمی و غذا', icon: 'icon-1'},
    { id: 1, title: 'مراقبت و پرستاری', icon: 'icon-1'},
    { id: 1, title: 'مراقبت و پرستاری', icon: 'icon-1'},
  ],
  'GET /rest/jobs/categories/:id': [
    { id: 1, title: 'مهندسی، برنامه نویسی و طراحی وب', icon: 'icon-1'},
    { id: 1, title: 'مهندسی، پتروشیمی و غذا', icon: 'icon-1'},
    { id: 1, title: 'مهندسی، پتروشیمی و غذا', icon: 'icon-1'},
    { id: 1, title: 'مهندسی، مکانیک و سیالات', icon: 'icon-1'},
    { id: 1, title: 'تحقیقات و بررسی', icon: 'icon-1'},
    { id: 1, title: 'مهندسی، برنامه نویسی و طراحی وب', icon: 'icon-1'},
    { id: 1, title: 'مهندسی، پتروشیمی و غذا', icon: 'icon-1'},
    { id: 1, title: 'مهندسی، مکانیک و سیالات', icon: 'icon-1'},
    { id: 1, title: 'تحقیقات و بررسی', icon: 'icon-1'},
    { id: 1, title: 'مهندسی، پتروشیمی و غذا', icon: 'icon-1'},
    { id: 1, title: 'مراقبت و پرستاری', icon: 'icon-1'},
    { id: 1, title: 'مراقبت و پرستاری', icon: 'icon-1'},
    { id: 1, title: 'مهندسی، برنامه نویسی و طراحی وب', icon: 'icon-1'},
    { id: 1, title: 'مهندسی، پتروشیمی و غذا', icon: 'icon-1'},
    { id: 1, title: 'مهندسی، پتروشیمی و غذا', icon: 'icon-1'},
    { id: 1, title: 'مهندسی، مکانیک و سیالات', icon: 'icon-1'},
    { id: 1, title: 'تحقیقات و بررسی', icon: 'icon-1'},
    { id: 1, title: 'مهندسی، پتروشیمی و غذا', icon: 'icon-1'},
    { id: 1, title: 'مهندسی، برنامه نویسی و طراحی وب', icon: 'icon-1'},
    { id: 1, title: 'مهندسی، برنامه نویسی و طراحی وب', icon: 'icon-1'},
  ],
};

module.exports = proxy;
