import React from 'react';
import { Radio, Grid, Typography } from '@material-ui/core';
import { MBtnLink, MContainer } from 'mui';
import AvatarUploader from 'components/AvatarUploader';
import MTextField from 'mui/MTextField';
import { PersonOutlined } from '@material-ui/icons';
import styles from './personalInfo.style';

function PersonalInfo() {
  const classes = styles();

  return (
    <div className={classes.root}>
      <MContainer smaller className={classes.container}>
        <div className={classes.form}>
          <div className={classes.avatarContain}>
            <AvatarUploader />
            <Typography>تصویر پروفایل</Typography>
          </div>
          <Grid container spacing={3}>
            <Grid item md={6}>
              <MTextField
                fullWidth
                name="firstName"
                className="outlined-strong"
                placeholder="نام"
                InputProps={{ startAdornment: <PersonOutlined /> }}
              />
            </Grid>
            <Grid item md={6}>
              <MTextField
                fullWidth
                name="lastName"
                className="outlined-strong"
                placeholder="نام خانوادگی"
                InputProps={{ startAdornment: <PersonOutlined /> }}
              />
            </Grid>
            <Grid item md={6}>
              <MTextField
                fullWidth
                name="mobile"
                className="outlined-strong"
                placeholder="شماره موبایل"
                InputProps={{ startAdornment: <PersonOutlined /> }}
              />
            </Grid>
            <Grid item md={6}>
              <MTextField
                fullWidth
                name="email"
                className="outlined-strong"
                placeholder="ایمیل"
                InputProps={{ startAdornment: <PersonOutlined /> }}
              />
            </Grid>
            <Grid item md={6}>
              <MTextField
                fullWidth
                name="birthDate"
                className="outlined-strong"
                placeholder="تاریخ تولد"
                InputProps={{ startAdornment: <PersonOutlined /> }}
              />
            </Grid>
            <Grid item md={6}>
              <MTextField
                fullWidth
                name="city"
                className="outlined-strong"
                placeholder="شهر"
                InputProps={{ startAdornment: <PersonOutlined /> }}
              />
            </Grid>
            <Grid item md={12}>
              <MTextField
                fullWidth
                name="address"
                multiline
                className="outlined-strong"
                placeholder="آدرس"
                InputProps={{ startAdornment: <PersonOutlined /> }}
              />
            </Grid>
            <Grid item md={6}>
              <Grid container className={classes.alignCenter}>
                <Grid item md={4}>
                  وضعیت تاهل:
                </Grid>
                <Grid item md={4}>
                  <Radio
                    value={0}
                    name="marriage"
                    inputProps={{
                      'aria-label': 'check',
                    }}
                  />
                  مجرد
                </Grid>
                <Grid item md={4}>
                  <Radio
                    value={1}
                    name="marriage"
                    inputProps={{
                      'aria-label': 'check',
                    }}
                  />
                  متاهل
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={6}>
              <Grid container className={classes.alignCenter}>
                <Grid item md={4}>
                  جنسیت:
                </Grid>
                <Grid item md={4}>
                  <Radio
                    value={0}
                    name="marriage"
                    inputProps={{
                      'aria-label': 'check',
                    }}
                  />
                  مرد
                </Grid>
                <Grid item md={4}>
                  <Radio
                    value={1}
                    name="marriage"
                    inputProps={{
                      'aria-label': 'check',
                    }}
                  />
                  زن
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={6}>
              <Grid container className={classes.alignCenter}>
                <Grid item md={4}>
                  وضعیت سربازی:
                </Grid>
                <Grid item md={4}>
                  <Radio
                    value={0}
                    name="marriage"
                    inputProps={{
                      'aria-label': 'check',
                    }}
                  />
                  مشمول
                </Grid>
                <Grid item md={4}>
                  <Radio
                    value={1}
                    name="marriage"
                    inputProps={{
                      'aria-label': 'check',
                    }}
                  />
                  گذرانده
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={6}>
              <MTextField
                fullWidth
                name="city"
                className="outlined-strong"
                placeholder="نوع معافیت"
                InputProps={{ startAdornment: <PersonOutlined /> }}
              />
            </Grid>
          </Grid>
        </div>
        <div className={classes.footer}>
          <div>
            <MBtnLink to="/CVMaker/SelectTemplate" iconic>
              بازگشت
            </MBtnLink>
          </div>
          <div>
            <MBtnLink to="/CVMaker/PersonalInfo" primary>
              ذخیره و مرحله بعد
            </MBtnLink>
          </div>
        </div>
      </MContainer>
    </div>
  );
}

export default PersonalInfo;
