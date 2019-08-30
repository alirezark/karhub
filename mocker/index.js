/* eslint-disable */
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
  'POST /rest/user/login': {
    id: 2,
    name: 'مانکی دی لوفی',
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
  'GET /rest/user/:id': {
    name: 'مانکی دی لوفی',
    website: 'www.farhadjafari.ir',
    job: 'مدیر محصول و طراح تجربه کاربری و رابط کاربری',
    company: 'ایرانسل',
    city: 'تهران',
    mobile: '۰۹۱۲۳۴۵۶۷۸۹',
    email: 'alavi.ali@gmail.com',
    address: ' تهران، شمس آباد',
    birthDate: '۱۳۶۸/۱۲/۱۵',
  },
  'GET /rest/user/payment_history/:id': [
    { id: '1', date: '98/02/15', type: 'پلن نقره ای', price: '۱۴۸۰۰۰ تومان', bank: 'ملی', card_number: '۶۲۱۵ **** **** ۲۵۱۰' },
    { id: '2', date: '98/03/10', type: 'پلن نقره ای', price: '۱۴۸۰۰۰ تومان', bank: 'ملی', card_number: '۶۲۱۵ **** **** ۲۵۱۰' },
    { id: '3', date: '98/05/25', type: 'پلن قهوه ای', price: '۱۰۰۰ تومان', bank: 'ملی', card_number: '۶۲۱۵ **** **** ۲۵۱۰' },
    { id: '4', date: '98/06/01', type: 'پلن طلایی', price: '۳۴۸۰۰۰ تومان', bank: 'ملی', card_number: '۶۲۱۵ **** **** ۲۵۱۰' },
  ],
  'GET /rest/cv/abstract/:id': {
    country: 'ایران',
    city: 'تهران',
    mobile: '۰۹۳۶۸۶۷۵۲۰۵',
    email: 'farhad.7431@gmail.com',
    birthDate: '۱۳۶۸/۱۲/۱۵',
    job: {
      title: 'مدیر فنی و بک اند دولوپر',
      company: 'بامیلو',
      duration: 'از خرداد ۹۶ - تا کنون',
    },
    education: {
      title: 'کارشناسی مهندسی کامپیوتر',
      place: 'دانشگاه امیر کبیر',
      duration: '۱۳۹۳  -  ۱۳۸۹',
    },
  },
};

module.exports = proxy;
