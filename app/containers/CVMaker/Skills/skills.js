import React, { useState } from 'react';
import { MBtnLink, MButton, MContainer } from 'mui';
import { Typography, Grid } from '@material-ui/core';
import styles from './skills.style';
import SkillForm from './contents/skillForm';

function Skills() {
  const classes = styles();
  const [skills, setSkills] = useState([0]);

  const addSkill = () => {
    setSkills(prevState => [...prevState, prevState.length + 1]);
  };

  return (
    <div className={classes.root}>
      <MContainer smaller className={classes.container}>
        <div className={classes.form}>
          <Typography variant="h3">مهارت های خود را وارد نمایید</Typography>
          <Grid container>
            {skills.map(skill => (
              <Grid item md={12} key={skill}>
                <SkillForm />
              </Grid>
            ))}
          </Grid>
          <div className={classes.addRow}>
            <div />
            <div>
              <MButton iconic onClick={addSkill}>
                <i className="flaticon-plus" />
                اضافه کردن مهارت
              </MButton>
            </div>
          </div>
        </div>

        <div className={classes.footer}>
          <div>
            <MBtnLink to="/CVMaker/EducationExperience" iconic>
              بازگشت
            </MBtnLink>
          </div>
          <div>
            <MBtnLink to="/CVMaker/Final" primary>
              ذخیره و مرحله بعد
            </MBtnLink>
          </div>
        </div>
      </MContainer>
    </div>
  );
}

export default Skills;
