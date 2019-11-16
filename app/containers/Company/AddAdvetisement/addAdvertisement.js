import React, { useState } from 'react';
import classNames from 'classnames';
import MContainer from 'mui/MContainer';
import { makeStyles, Typography, Grid, OutlinedInput, MenuItem } from '@material-ui/core';
import MTextField from 'mui/MTextField';
import { MButton } from 'mui/index';
import MSelect from 'mui/MSelect';
import PreviewDialog from './contents/previewDialog';

const styles = makeStyles(() => ({
  head: {
    margin: '40px 10px 50px ',
    fontWeight: 800,
  },
  head2: {
    marginBottom: 20,
  },
  formContain: {
    margin: '20px 110px',
    fontWeight: 300,
    color: '#9b9b9b',
  },
  flexRow: {
    display: 'flex',
    '&>div:first-child': {
      flexGrow: 1,
      alignItems: 'center',
      fontWeight: 300,
    },
  },
  txtBlue: {
    color: '#1361ff',
    fontWeight: 800,
  },
  description: {
    '&& fieldset': {
      borderRadius: '15px!important',
    },
  },
  formInfo: {
    margin: '30px 0 10px',
    '& p': {
      fontSize: 14,
      marginTop: 5,
    },
  },
  formLabeledRow: {
    marginTop: 30,
    '&>div:first-child': {
      fontSize: 14,
      marginBottom: 15,
      fontWeight: 800,
      color: '#606060',
    },
  },
  btnContain: {
    margin: '30px 0',
    textAlign: 'right',
  },
  btnCancel: {
    width: 100,
    color: '#929292',
    lineHeight: '30px',
  },
  btnSubmit: {
    width: 180,
    lineHeight: '30px',
    marginLeft: 10,
  },
  ageContain: {
    display: 'flex',
    alignItems: 'center',
    '&>div:nth-child(odd)': {
      flexBasis: '46%',
      flexShrink: 0,
      flexGrow: 0,
    },
    '&>div:nth-child(even)': {
      flexGrow: 1,
      textAlign: 'center',
    },
  },
  select: {
    '&.MuiOutlinedInput-root': {
      '& fieldset': {
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.23)',
      },
    },
    '& .MuiSelect-icon': {
      right: 10,
    },
    '& .MuiSelect-selectMenu': {
      fontWeight: 300,
    },
  },
  footer: {
    margin: '50px 0 30px',
    textAlign: 'center',
  },
}));

function AddAdvertisement() {
  const classes = styles();
  const [values, setValues] = useState({
    expertLevel: -1,
    soldier: -1,
    gender: -1,
  });
  const [openPreview, setOpenPreview] = useState(false);

  const handleOpenPreview = () => {
    setOpenPreview(true);
  };

  const handleClosePreview = () => {
    setOpenPreview(false);
  };

  function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <MContainer className={classes.root}>
      <Typography variant="h1" className={classes.head}>
        درج آگهی شغلی
      </Typography>
      <div className={classes.formContain}>
        <Grid container spacing={3}>
          <Grid item md={6}>
            <MTextField fullWidth name="name" placeholder="عنوان شغلی" />
          </Grid>
          <Grid item md={6}>
            <MTextField fullWidth name="name" placeholder="نوع همکاری" />
          </Grid>
          <Grid item md={6}>
            <MTextField fullWidth name="name" placeholder="دسته بندی" />
          </Grid>
          <Grid item md={6}>
            <MTextField fullWidth name="name" placeholder="شهر" />
          </Grid>
          <Grid item md={12} className={classes.flexRow}>
            <div>توضیحات</div>
            <div className={classes.txtBlue}>سازنده</div>
          </Grid>
          <Grid item md={12}>
            <MTextField
              fullWidth
              name="name"
              multiline
              className={classes.description}
              rows={5}
            />
          </Grid>
        </Grid>
        <div className={classes.formInfo}>
          <div className={classes.txtBlue}>آگهی ساز</div>
          <Typography>
            با استفاده از این بخش به راحتی می توانید با وارد جزییات یک آگهی کامل
            ساخته واحتمال گرفتن رزومه را افزایش دهید
          </Typography>
        </div>
        <div className={classes.formLabeledRow}>
          <div>اهداف شغلی</div>
          <div>
            <MTextField
              fullWidth
              multiline
              name="name"
              placeholder="به عنوان مثال افزایش فروش. افزایش نرخ بازگشت. بالا بردن نرخ درگیری کاربران و ..."
            />
          </div>
        </div>
        <div className={classes.formLabeledRow}>
          <div>لیست مسوولیت های شغلی</div>
          <div>
            <MTextField
              fullWidth
              multiline
              name="name"
              placeholder="به عنوان مثال (۱)متن مربوط به مسوولیت شغلی (۲) متن مربوط به لیست مسوولیت های شغلی"
            />
          </div>
        </div>
        <div className={classes.formLabeledRow}>
          <div>گزارش می دهد به</div>
          <div>
            <MTextField
              fullWidth
              multiline
              name="name"
              placeholder="به عنوان مثال ۱. نفر طراح محصول ۲. نفر آنالیزور"
            />
          </div>
        </div>
        <div className={classes.formLabeledRow}>
          <div>طول دوره آزمایش</div>
          <div>
            <MTextField
              fullWidth
              multiline
              name="name"
              placeholder="به عنوان مثال ۱ ماه الی ۳ ماه"
            />
          </div>
        </div>
        <div className={classes.formLabeledRow}>
          <div>ساعت کاری</div>
          <div>
            <MTextField
              fullWidth
              multiline
              name="name"
              placeholder="به عنوان مثال از ۹ صبح الی ۱۸ عصر"
            />
          </div>
        </div>
        <div className={classes.formLabeledRow}>
          <div>الزامات کاری</div>
          <div>
            <MTextField
              fullWidth
              multiline
              name="name"
              placeholder="به عنوان مثال یک سفر داخلی هر ماه ۱ بار"
            />
          </div>
        </div>
        <div className={classes.formLabeledRow}>
          <div>کمیسیون, پاداش, مزایا</div>
          <div>
            <MTextField
              fullWidth
              multiline
              name="name"
              placeholder="به عنوان مثال ۱ درصد سود فروش, ۲۰ درصد از کل فروش سالانه, طبق قانون کار"
            />
          </div>
        </div>
        <div className={classes.btnContain}>
          <MButton className={classes.btnCancel}>انصراف</MButton>
          <MButton className={classes.btnSubmit} primaryOutlined>
            ایجاد
          </MButton>
        </div>
      </div>
      <div className={classes.formContain}>
        <Typography variant="h2" className={classes.head2}>
          ویژگی ها
        </Typography>

        <Grid container spacing={3}>
          <Grid item md={6}>
            <MTextField fullWidth name="name" placeholder="عنوان شغلی" />
          </Grid>
          <Grid item md={6}>
          </Grid>
          <Grid item md={6}>
            <MTextField fullWidth name="name" placeholder="حداقل سابقه کار" />
          </Grid>
          <Grid item md={6}>
            <MSelect
              value={values.expertLevel}
              onChange={handleChange}
              className={classes.select}
              fullWidth
              input={
                <OutlinedInput
                  labelWidth={0}
                  name="expertLevel"
                  id="outlined-age-simple"
                />
              }
            >
              <MenuItem value="-1" disabled>
                سطح ارشدیت
              </MenuItem>
              <MenuItem value={0}>ارشد</MenuItem>
              <MenuItem value={10}>با تجربه</MenuItem>
              <MenuItem value={20}>تازه کار</MenuItem>
            </MSelect>
          </Grid>
          <Grid item md={6}>
            <div className={classes.ageContain}>
              <div>
                <MTextField fullWidth name="name" placeholder="سن از" />
              </div>
              <div>تا</div>
              <div>
                <MTextField fullWidth name="name" placeholder="سن" />
              </div>
            </div>
          </Grid>
          <Grid item md={6}>
            <MSelect
              value={values.soldier}
              onChange={handleChange}
              className={classes.select}
              fullWidth
              input={
                <OutlinedInput
                  labelWidth={0}
                  name="soldier"
                  id="outlined-age-simple"
                />
              }
            >
              <MenuItem value="-1" disabled>
                وضعیت سربازی
              </MenuItem>
              <MenuItem value={0}>کارت پایان خدمت</MenuItem>
              <MenuItem value={10}>معافیت دایم</MenuItem>
              <MenuItem value={20}>مشمول</MenuItem>
            </MSelect>
          </Grid>
          <Grid item md={6}>
            <MSelect
              value={values.gender}
              onChange={handleChange}
              className={classes.select}
              fullWidth
              input={
                <OutlinedInput
                  labelWidth={0}
                  name="gender"
                  id="outlined-age-simple"
                />
              }
            >
              <MenuItem value="-1" disabled>
                جنسیت
              </MenuItem>
              <MenuItem value={0}>مرد</MenuItem>
              <MenuItem value={10}>زن</MenuItem>
            </MSelect>
          </Grid>
          <Grid item md={12} className={classes.flexRow}>
            <div>توضیحات</div>
            <div className={classes.txtBlue}>سازنده</div>
          </Grid>
          <Grid item md={12}>
            <MTextField
              fullWidth
              name="name"
              multiline
              className={classes.description}
              rows={5}
            />
          </Grid>
        </Grid>
        <div className={classes.formLabeledRow}>
          <div>حدافل مدرک تحصیلی</div>
          <div>
            <MTextField
              fullWidth
              multiline
              name="name"
              placeholder="به عنوان مثال افزایش فروش. افزایش نرخ بازگشت. بالا بردن نرخ درگیری کاربران و ..."
            />
          </div>
        </div>
        <div className={classes.formLabeledRow}>
          <div>گواهینامه یا مدارک دیگر</div>
          <div>
            <MTextField
              fullWidth
              multiline
              name="name"
              placeholder="به عنوان مثال (۱)متن مربوط به مسوولیت شغلی (۲) متن مربوط به لیست مسوولیت های شغلی"
            />
          </div>
        </div>
        <div className={classes.formLabeledRow}>
          <div>دانش تخصصی</div>
          <div>
            <MTextField
              fullWidth
              multiline
              name="name"
              placeholder="به عنوان مثال ۱. نفر طراح محصول ۲. نفر آنالیزور"
            />
          </div>
        </div>
        <div className={classes.formLabeledRow}>
          <div>تخصص فردی</div>
          <div>
            <MTextField
              fullWidth
              multiline
              name="name"
              placeholder="به عنوان مثال ۱ ماه الی ۳ ماه"
            />
          </div>
        </div>
        <div className={classes.formLabeledRow}>
          <div>میزان تسلط به زبان انگلیسی</div>
          <div>
            <MTextField
              fullWidth
              multiline
              name="name"
              placeholder="به عنوان مثال از ۹ صبح الی ۱۸ عصر"
            />
          </div>
        </div>
        <div className={classes.btnContain}>
          <MButton className={classes.btnCancel}>انصراف</MButton>
          <MButton className={classes.btnSubmit} primaryOutlined>
            ایجاد
          </MButton>
        </div>
        <Grid container spacing={3}>
          <Grid item md={6}>
            <div className={classes.formLabeledRow}>
              <div>انقضای آگهی</div>
              <div>
                <MTextField
                  fullWidth
                  multiline
                  name="name"
                  placeholder="تاریخ انقضا"
                />
              </div>
            </div>
          </Grid>
        </Grid>
        <div className={classes.footer}>
          <MButton
            className={classes.btnSubmit}
            primary
            onClick={handleOpenPreview}
          >
            درج آگهی
          </MButton>
          <MButton className={classes.btnSubmit} primaryOutlined>
            ذخیره پیش نویس
          </MButton>
        </div>
      </div>
      <PreviewDialog open={openPreview} onClose={handleClosePreview} />
    </MContainer>
  );
}

export default AddAdvertisement;
