import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@material-ui/core';
import { MBtnLink, MContainer } from 'mui';
import imgCV1 from 'app/assets/images/temp/cv_sample_1.jpg';
import imgCV2 from 'app/assets/images/temp/cv_sample_2.jpg';
import imgCV3 from 'app/assets/images/temp/cv_sample_3.jpg';
import styles from './selectTemplate.style';

function SelectTemplate(props) {
  const classes = styles();
  const { history } = props;
  console.log(classes);

  const onSelectTemplate = () => {
    history.push('/CVMaker/PersonalInfo');
  };

  return (
    <div className={classes.root}>
      <MContainer smaller className={classes.container}>
        <Typography variant="h2">
          لطفا یکی از قالب های زیر را انتخاب کنید:
        </Typography>
        <div className={classes.panel}>
          <Grid container spacing={10}>
            <Grid item md={4}>
              <div className={classes.cvTemplate} onClick={onSelectTemplate}>
                <img alt="cv" src={imgCV1} />
                <div className={classes.btnSelect}>انتخاب</div>
              </div>
            </Grid>
            <Grid item md={4}>
              <div className={classes.cvTemplate} onClick={onSelectTemplate}>
                <img alt="cv" src={imgCV2} />
                <div className={classes.btnSelect}>انتخاب</div>
              </div>
            </Grid>
            <Grid item md={4}>
              <div className={classes.cvTemplate} onClick={onSelectTemplate}>
                <img alt="cv" src={imgCV3} />
                <div className={classes.btnSelect}>انتخاب</div>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className={classes.footer}>
          <div>
            <MBtnLink to="/cvMaker/intro" iconic>
              بازگشت
            </MBtnLink>
          </div>
          <div>
            <MBtnLink to="/CVMaker/PersonalInfo" iconic linkGreen>
              ادامه بدون انتخاب
              <i className="flaticon-left-arrow" />
            </MBtnLink>
          </div>
        </div>
      </MContainer>
    </div>
  );
}

SelectTemplate.propTypes = {
  history: PropTypes.object.isRequired,
};

export default SelectTemplate;
