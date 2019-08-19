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
    { id: 2, title: 'مهندسی، پتروشیمی و غذا', icon: 'icon-1'},
    { id: 3, title: 'مهندسی، پتروشیمی و غذا', icon: 'icon-1'},
    { id: 4, title: 'مهندسی، مکانیک و سیالات', icon: 'icon-1'},
    { id: 5, title: 'تحقیقات و بررسی', icon: 'icon-1'},
    { id: 6, title: 'مهندسی، پتروشیمی و غذا', icon: 'icon-1'},
    { id: 7, title: 'مراقبت و پرستاری', icon: 'icon-1'},
    { id: 8, title: 'مراقبت و پرستاری', icon: 'icon-1'},
  ],
  'GET /rest/jobs/categories/:id': [
    { id: 1, title: 'مهندسی، برنامه نویسی و طراحی وب', icon: 'icon-1'},
    { id: 2, title: 'مهندسی، پتروشیمی و غذا', icon: 'icon-1'},
    { id: 3, title: 'مهندسی، پتروشیمی و غذا', icon: 'icon-1'},
    { id: 4, title: 'مهندسی، مکانیک و سیالات', icon: 'icon-1'},
    { id: 5, title: 'تحقیقات و بررسی', icon: 'icon-1'},
    { id: 6, title: 'مهندسی، برنامه نویسی و طراحی وب', icon: 'icon-1'},
    { id: 7, title: 'مهندسی، پتروشیمی و غذا', icon: 'icon-1'},
    { id: 8, title: 'مهندسی، مکانیک و سیالات', icon: 'icon-1'},
    { id: 9, title: 'تحقیقات و بررسی', icon: 'icon-1'},
    { id: 10, title: 'مهندسی، پتروشیمی و غذا', icon: 'icon-1'},
    { id: 11, title: 'مراقبت و پرستاری', icon: 'icon-1'},
    { id: 12, title: 'مراقبت و پرستاری', icon: 'icon-1'},
    { id: 13, title: 'مهندسی، برنامه نویسی و طراحی وب', icon: 'icon-1'},
    { id: 14, title: 'مهندسی، پتروشیمی و غذا', icon: 'icon-1'},
    { id: 15, title: 'مهندسی، پتروشیمی و غذا', icon: 'icon-1'},
    { id: 16, title: 'مهندسی، مکانیک و سیالات', icon: 'icon-1'},
    { id: 17, title: 'تحقیقات و بررسی', icon: 'icon-1'},
    { id: 18, title: 'مهندسی، پتروشیمی و غذا', icon: 'icon-1'},
    { id: 19, title: 'مهندسی، برنامه نویسی و طراحی وب', icon: 'icon-1'},
    { id: 20, title: 'مهندسی، برنامه نویسی و طراحی وب', icon: 'icon-1'},
  ],
};

module.exports = proxy;
