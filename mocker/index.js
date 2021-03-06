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
  // === Users requests ===
  'GET /api/user': {
    id: 1,
    username: 'kenny',
    sex: 6,
  },
  'POST /rest/user/login': (req, res) => {
    const { username, password } = req.body;
    return res.json({
      id: 2,
      role: username === 'company' ? 'company' : 'user',
      name: 'مانکی دی لوفی',
    })
  },
  'GET /rest/user/payment_history': [
    { id: 1, date: '98/02/15', type: 'پلن نقره ای', price: '۱۴۸۰۰۰ تومان', bank: 'ملی', card_number: '۶۲۱۵ **** **** ۲۵۱۰' },
    { id: 2, date: '98/03/10', type: 'پلن نقره ای', price: '۱۴۸۰۰۰ تومان', bank: 'ملی', card_number: '۶۲۱۵ **** **** ۲۵۱۰' },
    { id: 3, date: '98/05/25', type: 'پلن قهوه ای', price: '۱۰۰۰ تومان', bank: 'ملی', card_number: '۶۲۱۵ **** **** ۲۵۱۰' },
    { id: 4, date: '98/06/01', type: 'پلن طلایی', price: '۳۴۸۰۰۰ تومان', bank: 'ملی', card_number: '۶۲۱۵ **** **** ۲۵۱۰' },
  ],
  'GET /rest/user/employer_requests': [
    { id: 1, date: '98/02/15', title: 'درخواست انجام آزمون MBTI', description: 'توضیحات مربوط به این درخواست از سمت کارفرما', icon: 'icon-1' },
    { id: 2, date: '98/02/05', title: 'درخواست انجام آزمون MBTI', description: 'توضیحات مربوط به این درخواست از سمت کارفرما', icon: 'icon-2' },
    { id: 3, date: '98/05/24', title: 'درخواست انجام آزمون MBTI', description: 'توضیحات مربوط به این درخواست از سمت کارفرما', icon: 'icon-3' },
  ],
  'GET /rest/user/tests': [
    { id: 1, date: '98/02/15', title: 'آزمون هوش چندگانه', description: 'Aptitude Test', icon: 'icon-1' },
    { id: 2, date: '98/02/05', title: 'آزمون هوش هیجانی', description: 'Bar-On', icon: 'icon-2' },
    { id: 3, date: '98/05/24', title: 'آزمون شخصیت شناسی مایرز', description: 'MBTI', icon: 'icon-3' },
  ],
  'GET /rest/user': {
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
  // =====================
  // === Jobs requests ===
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
  'GET /rest/jobs/favorites': [
    { id:1, title: 'مدیر فنی و پشتیبانی', company: 'ایرانسل', location: 'تهران', icon: 'icon-1' },
    { id:2, title: 'مدیر فنی و پشتیبانی', company: 'ایرانسل', location: 'تهران', icon: 'icon-1' },
    { id:3, title: 'مدیر فنی و پشتیبانی', company: 'ایرانسل', location: 'تهران', icon: 'icon-2' },
  ],
  // =====================
  // === CV Requests ===
  'GET /rest/cv/abstract': {
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
  'GET /rest/cv/uploaded': [
    { id: 0, title: 'رزومه شماره ۱.pdf', date: '۹۸/۰۷/۱۸'},
    { id: 1, title: 'رزومه شماره ۲.pdf', date: '۹۸/۰۷/۱۹'},
    { id: 2, title: 'رزومه شماره ۳.pdf', date: '۹۸/۰۷/۲۲'},
  ],
  'GET /rest/cv/sent': [
    { id:1, title: 'مدیر فنی و پشتیبانی', company: 'ایرانسل', location: 'تهران', icon: 'icon-1', date: '98/05/03', state: 'در انتظار تایید' },
    { id:2, title: 'مدیر فنی و پشتیبانی', company: 'ایرانسل', location: 'تهران', icon: 'icon-1', date: '98/05/06', state: 'در انتظار تایید' },
    { id:3, title: 'مدیر فنی و پشتیبانی', company: 'ایرانسل', location: 'تهران', icon: 'icon-2', date: '98/06/12', state: 'در انتظار تایید' },
  ],
  // =====================
  // === Company Requests ===
  'GET /rest/company/favorites': [
    { id:1, name: 'ایرانسل', icon: 'icon-1' },
    { id:2, name: 'اسنپ فود', icon: 'icon-3' },
    { id:3, name: 'سن ایچ', icon: 'icon-2' },
    { id:4, name: 'اسنپ فود', icon: 'icon-1' },
    { id:5, name: 'ایرانسل', icon: 'icon-1' },
    { id:6, name: 'اسنپ فود', icon: 'icon-3' },
    { id:7, name: 'سن ایچ', icon: 'icon-2' },
    { id:8, name: 'اسنپ فود', icon: 'icon-1' },
  ],
  'GET /rest/company/folders': [
    {id: 0, name: 'پوشه خوب', jobType: 'طراح ارشد تجربه کاربری', resumeCount: '28', lastModified: '98/02/11'},
    {id: 1, name: 'پوشه خوب', jobType: 'طراح ارشد تجربه کاربری', resumeCount: '28', lastModified: '98/02/11'},
    {id: 2, name: 'پوشه خوب', jobType: 'طراح ارشد تجربه کاربری', resumeCount: '28', lastModified: '98/02/11'},
    {id: 3, name: 'پوشه خوب', jobType: 'طراح ارشد تجربه کاربری', resumeCount: '28', lastModified: '98/02/11'},
  ],
  'GET /rest/company/folder/:id': {
    id: 1,
    name: 'پدرام فرزین',
    lastModified: '۳ روز پیش',
    status: {
      shortList: 3,
      called: 2,
      phoneInterview: 1,
      faceToFaceInterview: 1,
      invited: 1,
      suggested: 1,
      employed: 0,
      rejected: 2,
    },
    requests: [
      {id: 0, name: 'ناصر بصیرتی', jobType: 'مدیر فنی و پشتیبانی', company: 'ایرانسل', city: 'تهران', age: 28},
      {id: 1, name: 'ناصر بصیتی', jobType: 'مدیر فنی و پشتیبانی', company: 'ایرانسل', city: 'تهران', age: 28},
      {id: 2, name: 'ناصر یرتی', jobType: 'مدیر فنی و پشتیبانی', company: 'ایرانسل', city: 'تهران', age: 28},
    ]
  },
  'GET /rest/company/credit/history': [
    {id: 0, factorNum: 2341, type: 'نقره ای', start: '98/02/11', expire: '99/09/02', status: 'فعال'},
    {id: 1, factorNum: 3541, type: 'نقره ای', start: '98/02/11', expire: '99/09/02', status: 'غیرفعال'},
  ],
  'GET /rest/company/searchCV/filters': [
    {id: 0, name: 'دسته شغلی', children: [{id: 5, name: 'بانک'}, {id: 6, name: 'IT'}, {id: 7, name: 'پزشکی'}]},
    {id: 1, name: 'سمت', children: [{id: 8, name: 'سمت اول'}, {id: 9, name: 'سمت دوم'}, {id: 10, name: 'سمت آخر'}]},
    {id: 2, name: 'تحصیلات', children: [{id: 11, name: 'دیپلم'}, {id: 12, name: 'کارشناسی ارشد'}, {id: 13, name: 'دکتری'}]},
    {id: 3, name: 'محل', children: [{id: 14, name: 'خونمون'}, {id: 15, name: 'خونشون'}, {id: 16, name: 'خونتون'}]},
    {id: 4, name: 'جنسیت', children: [{id: 17, name: 'مرد'}, {id: 18, name: 'زن'}]},
  ],
  'GET /rest/company/searchCV/search':[
    {id: 0, name: 'ناصر بصیرتی', jobType: 'مدیر فنی و پشتیبانی', company: 'ایرانسل', city: 'تهران', age: 28},
    {id: 1, name: 'ناصر بصیتی', jobType: 'مدیر فنی و پشتیبانی', company: 'ایرانسل', city: 'تهران', age: 28},
    {id: 2, name: 'ناصر یرتی', jobType: 'مدیر فنی و پشتیبانی', company: 'ایرانسل', city: 'تهران', age: 28},
    {id: 3, name: 'ناصر بصیرتی', jobType: 'مدیر فنی و پشتیبانی', company: 'ایرانسل', city: 'تهران', age: 28},
    {id: 4, name: 'ناصر بصیتی', jobType: 'مدیر فنی و پشتیبانی', company: 'ایرانسل', city: 'تهران', age: 28},
    {id: 5, name: 'ناصر یرتی', jobType: 'مدیر فنی و پشتیبانی', company: 'ایرانسل', city: 'تهران', age: 28},
    {id: 6, name: 'ناصر بصیرتی', jobType: 'مدیر فنی و پشتیبانی', company: 'ایرانسل', city: 'تهران', age: 28},
    {id: 7, name: 'ناصر بصیتی', jobType: 'مدیر فنی و پشتیبانی', company: 'ایرانسل', city: 'تهران', age: 28},
    {id: 8, name: 'ناصر یرتی', jobType: 'مدیر فنی و پشتیبانی', company: 'ایرانسل', city: 'تهران', age: 28},
  ],
  'GET /rest/company/Top': [
    {id: 1, icon: 1, name: 'ایرانسل', activeJobs: 34},
    {id: 2, icon: 2, name: 'گروه اینترنتی ایران', activeJobs: 34},
    {id: 3, icon: 1, name: 'شرکت تیرانیس', activeJobs: 34},
    {id: 4, icon: 3, name: 'ایرانسل', activeJobs: 34},
    {id: 5, icon: 1, name: 'گروه اینترنتی سن ایچ', activeJobs: 34},
    {id: 6, icon: 2, name: 'ایرانسل', activeJobs: 34},
    {id: 7, icon: 1, name: 'گروه اینترنتی سن ایچ', activeJobs: 34},
    {id: 8, icon: 3, name: 'گروه اینترنتی ایران', activeJobs: 34},
    {id: 9, icon: 2, name: 'شرکت تیرانیس', activeJobs: 34},
    {id: 10, icon: 1, name: 'گروه اینترنتی ایران', activeJobs: 34},
    {id: 11, icon: 1, name: 'گروه اینترنتی سن ایچ', activeJobs: 34},
    {id: 12, icon: 1, name: 'شرکت تیرانیس', activeJobs: 34},
  ],
  'GET /rest/company/:id': {
    name: 'شرکت نوین اندیشان پایدار',
    activeJobs: 25,
    website: 'http://google.com',
    city: 'تهران',
    description: ' با توجه به محدودیت های مختلف در حوزه مبادلات و پرداخت های بین المللی و همچنین توسعه تکنولوژی های نوین دنیابا توجه به محدودیت های مختلف در حوزه مبادلات و پرداخت های بین المللی و همچنین توسعه تکنولوژی های نوین دنیابا توجه به محدودیت های مختلف در حوزه مبادلات و پرداخت های بین المللی و همچنین توسعه تکنولوژی های نوین دنیا تجارب زیادی داریم',
    whyUs: 'با توجه به محدودیت های مختلف در حوزه مبادلات و پرداخت های بین المللی و همچنین توسعه تکنولوژی های نوین دنیا با توجه به محدودیت های مختلف در حوزه مبادلات و پرداخت های بین المللی و همچنین توسعه تکنولوژی های نوین دنیا مبادلات نوین دنیا می باشد'
  },
  'GET /rest/companies/advertisements/:filter': [
    {id: 0, name: 'طراح ارشد تجربه کاربری', date: '98/01/23', status: 'در انتظار تایید', resumeCount: '28', openedCount: '84', seenCount: '132'},
    {id: 1, name: 'طراح ارشد تجربه کاربری', date: '98/01/23', status: 'در انتظار تایید', resumeCount: '28', openedCount: '84', seenCount: '132'},
    {id: 2, name: 'طراح ارشد تجربه کاربری', date: '98/01/23', status: 'در انتظار تایید', resumeCount: '28', openedCount: '84', seenCount: '132'},
    {id: 3, name: 'طراح ارشد تجربه کاربری', date: '98/01/23', status: 'در انتظار تایید', resumeCount: '28', openedCount: '84', seenCount: '132'},
    {id: 4, name: 'طراح ارشد تجربه کاربری', date: '98/01/23', status: 'در انتظار تایید', resumeCount: '28', openedCount: '84', seenCount: '132'},
    {id: 5, name: 'طراح ارشد تجربه کاربری', date: '98/01/23', status: 'در انتظار تایید', resumeCount: '28', openedCount: '84', seenCount: '132'},
    {id: 6, name: 'طراح ارشد تجربه کاربری', date: '98/01/23', status: 'در انتظار تایید', resumeCount: '28', openedCount: '84', seenCount: '132'},
  ],
  'GET /rest/company/advertisements/:filter': (req, res) => {
    const { filter } = req.params;
    let result = [
      {id: 0, name: 'طراح ارشد تجربه کاربری', date: '98/01/23', status: 'در انتظار تایید', resumeCount: '28', openedCount: '84', seenCount: '132'},
      {id: 1, name: 'طراح ارشد تجربه کاربری', date: '98/01/23', status: 'در انتظار تایید', resumeCount: '28', openedCount: '84', seenCount: '132'},
      {id: 2, name: 'طراح ارشد تجربه کاربری', date: '98/01/23', status: 'در انتظار تایید', resumeCount: '28', openedCount: '84', seenCount: '132'},
      {id: 3, name: 'طراح ارشد تجربه کاربری', date: '98/01/23', status: 'در انتظار تایید', resumeCount: '28', openedCount: '84', seenCount: '132'},
      {id: 4, name: 'طراح ارشد تجربه کاربری', date: '98/01/23', status: 'در انتظار تایید', resumeCount: '28', openedCount: '84', seenCount: '132'},
      {id: 5, name: 'طراح ارشد تجربه کاربری', date: '98/01/23', status: 'در انتظار تایید', resumeCount: '28', openedCount: '84', seenCount: '132'},
      {id: 6, name: 'طراح ارشد تجربه کاربری', date: '98/01/23', status: 'در انتظار تایید', resumeCount: '28', openedCount: '84', seenCount: '132'},
    ];
    let count = result.length;
    if (filter != "all")
      count -= (filter == "active" ? 2 : (filter === 'draft' ? 3 : 5));
    return res.json(result.slice(0, count));
  },
  // =====================
};

module.exports = proxy;
