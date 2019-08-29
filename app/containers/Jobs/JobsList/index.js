import React, { useState } from 'react';
// import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import MContainer from 'mui/MContainer';
import { Grid, Typography, Box } from '@material-ui/core';
import JobCard from 'components/JobCard';
import MButton from 'mui/MButton';
import { MTab, MTabs } from 'mui/MTabs';
import MChip from 'mui/MChip';
// import messages from './messages';
import styles from './style';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={0}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function JobsList(props) {
  const classes = styles();
  const [tab, setTab] = useState('1');

  const jobs = [
    {
      id: 1,
      title: 'مدیر فنی و پشتیبانی',
      company: 'ایرانسل',
      location: 'تهران',
      icon: 1,
    },
    {
      id: 2,
      title: 'استخدام برنامه نویس',
      company: 'ایرانسل',
      location: 'تهران',
      icon: 2,
    },
    {
      id: 3,
      title: 'طراح و برنامه نویس موبایل',
      company: 'ایرانسل',
      location: 'تهران',
      icon: 3,
    },
    {
      id: 4,
      title: 'استخدام دیجتال مارکتینگ',
      company: 'ایرانسل',
      location: 'تهران',
      icon: 1,
    },
    {
      id: 5,
      title: 'طراح و برنامه نویس موبایل',
      company: 'ایرانسل',
      location: 'تهران',
      icon: 3,
    },
    {
      id: 6,
      title: 'استخدام برنامه نویس',
      company: 'ایرانسل',
      location: 'تهران',
      icon: 2,
    },
  ];

  const handleTabChange = (e, val) => {
    setTab(val);
  };

  return (
    <MContainer maxWidth="md" mt={6} className={classes.root}>
      <Grid container spacing={3}>
        <Grid item md={4}>
          <Typography variant="h2" component="h2" className={classes.head}>
            برنامه نویس و مدیر فنی
            <div className={classes.headInfo}>423 مورد</div>
          </Typography>
          {jobs.map(job => (
            <JobCard key={job.id} job={job} />
          ))}
        </Grid>
        <Grid item md={8}>
          <div className={classes.panel}>
            <Typography
              variant="h5"
              component="h5"
              className={classes.panelHead}
            >
              مدیر فنی و پشتیبانی
              <MButton
                className={classes.btnBlue}
                onClick={() => props.showSendCVDialog(jobs[0])}
                variant="contained"
              >
                ارسال رزومه
              </MButton>
            </Typography>
            <div className={classes.icoInfoContain}>
              <span className={classes.icoInfo}>
                <i className="i-company" />
                ایرانسل
              </span>
              <span className={classes.icoInfo}>
                <i className="i-location" />
                تهران
              </span>
              <span className={classes.icoInfo}>
                <i className="i-company" />
                یک هفته پیش
              </span>
              <div className={classes.btnInfoContain}>
                <MButton className={classes.icoInfo}>
                  <i className="i-location" />
                  اشتراک
                </MButton>
                <MButton className={classes.icoInfo}>
                  <i className="i-company" />
                  ذخیره
                </MButton>
              </div>
            </div>

            <div className={classes.panelLine} />

            <Typography variant="h5" component="h5" className={classes.rowInfo}>
              ۴۸ نفر برای این موقعیت شغلی رزومه خود را ارسال کرد‌ه‌اند
              <div>محدوده حقوق: ۲ میلیون تا ۴ میلیون تومان</div>
            </Typography>

            <div className={classes.panelLine} />

            <MTabs
              value={tab}
              className={classes.tabs}
              onChange={handleTabChange}
            >
              <MTab label="توضیحات" value="1" />
              <MTab label="درباره شرکت" value="2" />
            </MTabs>

            <TabPanel value={tab} index="1" className={classes.tabContent}>
              {`                برای تجربه چالشهای پیش روی یه کسب و کار مالی و طراحی راهکارهای مناسب به تیم فنی ما بپیوندید برای تجربه چالشهای پیش روی یه کسب و کار مالی و طراحی راهکارهای مناسب به تیم فنی ما بپیوندید.

                توامندی های مورد انتظار:
                - تسلط کامل بر زبان برنامه نویسی Java 8
                - تجربه بالا در توسعه سرویس های مبتنی بر j2ee با استفاده از Spring Framework
                - تجربه عملیاتی در استفاده از Spring Boot
                - تجربه کار با In-Memory Databases
                - تجربه کار با انواع Message Brokers مانند Kafka
                - تجربه توسعه سرویس های مبتنی بر معماری Microservices
                - شناخت کامل بر Spring Cloud (Service Registry - Service Discovery - Gateway Service
                - آشنایی با معماری Reactive و شناخت WebFlux
                - شناخت کامل بر Spring Cloud (Service Registry - Service Discovery - Gateway Service
                - آشنایی با معماری Reactive و شناخت WebFlux`}
              <div className={classes.panelLine} style={{ margin: '1rem 0' }} />
              <Grid container space={2}>
                <Grid item md={4} className={classes.infoTags}>
                  <Typography variant="h5">دسته بندی:</Typography>
                  <MChip className={classes.Chip} label="طراح یوایکس" />
                  <MChip className={classes.Chip} label="برنامه نویس" />
                </Grid>
                <Grid item md={4} className={classes.infoTags}>
                  <Typography variant="h5">موقعیت مکانی:</Typography>
                  <MChip className={classes.Chip} label="برنامه نویس" />
                </Grid>
                <Grid item md={4} className={classes.infoTags}>
                  <Typography variant="h5">حداقل سابقه کار:</Typography>
                  <MChip className={classes.Chip} label="سه سال" />
                </Grid>
              </Grid>
              <Grid container space={2}>
                <Grid item md={4} className={classes.infoTags}>
                  <Typography variant="h5">نوع همکاری:</Typography>
                  <MChip className={classes.Chip} label="برنامه نویس" />
                  <MChip className={classes.Chip} label="برنامه نویس" />
                  <MChip className={classes.Chip} label="برنامه نویس" />
                </Grid>
                <Grid item md={4} className={classes.infoTags}>
                  <Typography variant="h5">نوع قرارداد:</Typography>
                  <MChip
                    className={classes.Chip}
                    label="برنامه نویس و مدیر فنی"
                  />
                </Grid>
                <Grid item md={4} className={classes.infoTags}>
                  <Typography variant="h5">سطح ارشدیت:</Typography>
                  <MChip className={classes.Chip} label="مهم نیست " />
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value={tab} index="2" className={classes.tabContent}>
              {`با توجه به محدودیت‌های مختلف در حوزه مبادلات و پرداخت‌های بین‌المللی و همچنین توسعه تکنولوژی‌های نوین دنیا، سپهر به عنوان پیشگام در توسعه کسب و کارهای نوین و روشهای مبادلات نوین می‌باشد. تیم ما در ارائه محصولات جهت تسهیل مبادلات صنایع مختلف تمرکز دارد. ما همچنین در توسعه و نگهداری محصولات نرم‌افزاری، پورتال‌های تجارت الکترونیک، بازار، تجزیه و تحلیل کسب و کار تجارب زیادی داریم.  سپهر به عنوان پیشگام در توسعه کسب و کارهای نوین و روشهای مبادلات نوین می‌باشد. تیم ما در ارائه محصولات جهت تسهیل مبادلات صنایع مختلف تمرکز دارد.`}
              <Grid container spacing={2} style={{ marginTop: '1rem' }}>
                <Grid item md={3} className={classes.infoTags}>
                  <Typography variant="h5">صنعت:</Typography>
                  <MChip
                    className={classes.Chip}
                    label="برنامه نویس و مدیر فنی"
                  />
                </Grid>
                <Grid item md={3} className={classes.infoTags}>
                  <Typography variant="h5">سال تاسیس:</Typography>
                  <MChip className={classes.Chip} label="1389" />
                </Grid>
                <Grid item md={3} className={classes.infoTags}>
                  <Typography variant="h5">تعداد کارمندان:</Typography>
                  <MChip className={classes.Chip} label="۱۰۰ الی ۲۰۰ نفر" />
                </Grid>
                <Grid item md={3} className={classes.infoTags}>
                  <Typography variant="h5">تعداد کارمندان:</Typography>
                  <MChip className={classes.Chip} label="خصوصی" />
                </Grid>
              </Grid>

              <Typography
                variant="h5"
                component="h5"
                className={classes.panelHead}
                style={{ margin: 0 }}
              >
                چرا ما؟
                <MButton className={classes.btnGreenLink} variant="contained">
                  مشاهده پروفایل شرکت
                </MButton>
              </Typography>
              <Typography className={classes.tabInfo}>
                {
                  'با توجه به محدودیت‌های مختلف در حوزه مبادلات و پرداخت‌های بین‌المللی و همچنین توسعه تکنولوژی‌های نوین دنیا، سپهر به عنوان پیشگام در توسعه کسب و کارهای نوین و روشهای مبادلات نوین می‌باشد. تیم ما در ارائه محصولات جهت تسهیل مبادلات صنایع مختلف تمرکز دارد.ما همچنین در توسعه و نگهداری محصولات نرم‌افزاری، پورتال‌های تجارت الکترونیک، بازار، تجزیه و تحلیل کسب و کار تجارب زیادی داریم. '
                }
              </Typography>
            </TabPanel>
          </div>
        </Grid>
      </Grid>
    </MContainer>
  );
}

JobsList.propTypes = {
  showSendCVDialog: PropTypes.func.isRequired,
};

export default JobsList;
