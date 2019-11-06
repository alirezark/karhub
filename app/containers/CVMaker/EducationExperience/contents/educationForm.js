import React, { useState } from 'react';
import { Checkbox, Grid, makeStyles, MenuItem, OutlinedInput, Typography } from '@material-ui/core';
import MTextField from 'mui/MTextField';
import { PersonOutlined } from '@material-ui/icons';
import MSelect from 'mui/MSelect';

const styles = makeStyles(() => ({
  select: {
    '&.MuiOutlinedInput-root': {
      '& fieldset': {
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#8E8E8C',
      },
    },
    '& svg': {
      color: '#8E8E8C',
    },
    '& .MuiSelect-icon': {
      right: 10,
    },
  },
}));

function EducationForm() {
  const [value, setValue] = useState(-1);
  const [isInEducate, setIsInEducate] = useState(false);
  const classes = styles();

  const handleSelect = e => {
    setValue(e.target.value);
  };

  const handleIsInEduction = e => {
    setIsInEducate(e.target.checked);
  }

  return (
    <>
      <Typography variant="h3">سابقه تحصیلی</Typography>
      <Grid container spacing={3}>
        <Grid item md={6}>
          <MTextField
            fullWidth
            name="companyName"
            className="outlined-strong"
            placeholder="نام موسسه"
            InputProps={{ startAdornment: <PersonOutlined /> }}
          />
        </Grid>
        <Grid item md={6}>
          <MTextField
            fullWidth
            name="jobTitle"
            className="outlined-strong"
            placeholder="شهر"
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
                id="outlined-age-simple"
                startAdornment={<PersonOutlined />}
              />
            }
          >
            <MenuItem value="-1" disabled>
              مقطع تحصیلی
            </MenuItem>
            <MenuItem value={0}>دیپلم</MenuItem>
            <MenuItem value={10}>کارشناسی</MenuItem>
            <MenuItem value={20}>کارشناسی ارشد</MenuItem>
            <MenuItem value={30}>دکتری</MenuItem>
          </MSelect>
        </Grid>
        <Grid item md={6}>
          <MTextField
            fullWidth
            name="description"
            className="outlined-strong"
            placeholder="رشته تحصیلی"
            InputProps={{ startAdornment: <PersonOutlined /> }}
          />
        </Grid>
      </Grid>
      <Typography variant="h3">تاریخ فارغ التحصیلی</Typography>
      <Grid container spacing={3}>
        <Grid item md={6}>
          <Grid container spacing={2}>
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
                disabled={isInEducate}
                placeholder="سال پایان"
              />
            </Grid>
            <Grid item md={6}>
              <MTextField
                fullWidth
                name="startMonth"
                className="outlined-strong"
                disabled={isInEducate}
                placeholder="ماه پایان"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={6}>
          <Checkbox
            value={0}
            onChange={handleIsInEduction}
            inputProps={{
              'aria-label': 'check',
            }}
          />
          در حال تحصیل هستم
        </Grid>
      </Grid>
    </>
  );
}

export default EducationForm;
