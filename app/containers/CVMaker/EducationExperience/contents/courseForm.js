import React from 'react';
import { Grid } from '@material-ui/core';
import MTextField from 'mui/MTextField';
import { PersonOutlined } from '@material-ui/icons';
import FileUpload from 'components/FileUpload';

function CourseForm() {
  return (
    <>
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
            placeholder="عنوان دوره"
            InputProps={{ startAdornment: <PersonOutlined /> }}
          />
        </Grid>
        <Grid item md={12}>
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
          </Grid>
        </Grid>
        <Grid item md={6}>
          <MTextField
            fullWidth
            name="jobTitle"
            className="outlined-strong"
            placeholder="مدت ساعت دوره"
            InputProps={{ startAdornment: <PersonOutlined /> }}
          />
        </Grid>
        <Grid item md={6}>
          <FileUpload title="مدرک دوره" />
        </Grid>
      </Grid>
    </>
  );
}

export default CourseForm;
