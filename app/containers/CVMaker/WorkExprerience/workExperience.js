import React, { useState } from 'react';
import { Grid, OutlinedInput, MenuItem } from '@material-ui/core';
import { MBtnLink, MButton, MContainer } from 'mui';
import MTextField from 'mui/MTextField';
import { PersonOutlined } from '@material-ui/icons';
import MSelect from 'mui/MSelect';
import styles from './workExperience.style';
import Preview from './contents/preview';

function WorkExperience() {
  const [value, setValue] = useState(-1);
  const [experiences, setExperiences] = useState([]);
  const classes = styles();

  const handleSelect = e => {
    setValue(e.target.value);
  };

  const addExperience = () => {
    setExperiences(prevState => [...prevState, prevState.length]);
  };

  return (
    <div className={classes.root}>
      <MContainer smaller className={classes.container}>
        {experiences.map((ex) => (
          <Preview key={ex} />
        ))}
        <div className={classes.form}>
          <Grid container spacing={3}>
            <Grid item md={6}>
              <MTextField
                fullWidth
                name="companyName"
                className="outlined-strong"
                placeholder="نام سازمان"
                InputProps={{ startAdornment: <PersonOutlined /> }}
              />
            </Grid>
            <Grid item md={6}>
              <MTextField
                fullWidth
                name="jobTitle"
                className="outlined-strong"
                placeholder="عنوان شغل"
                InputProps={{ startAdornment: <PersonOutlined /> }}
              />
            </Grid>
            <Grid item md={6}>
              <MSelect
                value={value}
                onChange={handleSelect}
                className={classes.select}
                fullWidth
                displayEmpty
                InputProps={{ startAdornment: <PersonOutlined /> }}
                input={
                  <OutlinedInput
                    labelWidth={0}
                    name="folder"
                    placeholder="صنعت مربوطه"
                    id="outlined-age-simple"
                    startAdornment={<PersonOutlined />}
                  />
                }
              >
                <MenuItem value="-1" disabled>
                  صنعت مربوطه
                </MenuItem>
                <MenuItem value={0}>پدرام فرزین</MenuItem>
                <MenuItem value={10}>پوشه تخصصی</MenuItem>
                <MenuItem value={20}>پوشه فرضی</MenuItem>
                <MenuItem value={30}>سر کاری</MenuItem>
              </MSelect>
            </Grid>
            <Grid item md={12}>
              <MTextField
                fullWidth
                name="description"
                multiline
                className="outlined-strong"
                placeholder="توضیحات شغل مربوطه"
                InputProps={{ startAdornment: <PersonOutlined /> }}
              />
            </Grid>
            <Grid item md={6}>
              <Grid container className={classes.alignCenter} spacing={2}>
                <Grid item md={6}>
                  <MTextField
                    fullWidth
                    name="startYear"
                    className="outlined-strong"
                    placeholder="سال شروع"
                  />
                </Grid>
                <Grid item md={6}>
                  <MTextField
                    fullWidth
                    name="startMonth"
                    className="outlined-strong"
                    placeholder="ماه شروع"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={6}>
              <Grid container spacing={2}>
                <Grid item md={6}>
                  <MTextField
                    fullWidth
                    name="startYear"
                    className="outlined-strong"
                    placeholder="سال پایان"
                  />
                </Grid>
                <Grid item md={6}>
                  <MTextField
                    fullWidth
                    name="startMonth"
                    className="outlined-strong"
                    placeholder="ماه پایان"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={6}>
              <MTextField
                fullWidth
                name="discontinueReason"
                className="outlined-strong"
                placeholder="علت قطع همکاری"
                InputProps={{ startAdornment: <PersonOutlined /> }}
              />
            </Grid>
            <Grid item md={6}>
              <MTextField
                fullWidth
                name="salary"
                className="outlined-strong"
                placeholder="آخرین حقوق دریافتی"
                InputProps={{ startAdornment: <PersonOutlined /> }}
              />
            </Grid>
          </Grid>
          <div className={classes.addRow}>
            <div />
            <div>
              <MButton iconic onClick={addExperience}>
                <i className="flaticon-plus" />
                ذخیره و اضافه کردن سابقه
              </MButton>
            </div>
          </div>
        </div>
        <div className={classes.footer}>
          <div>
            <MBtnLink to="/CVMaker/PersonalInfo" iconic>
              بازگشت
            </MBtnLink>
          </div>
          <div>
            <MBtnLink to="/CVMaker/EducationExperience" primary>
              ذخیره و مرحله بعد
            </MBtnLink>
          </div>
        </div>
      </MContainer>
    </div>
  );
}

export default WorkExperience;
