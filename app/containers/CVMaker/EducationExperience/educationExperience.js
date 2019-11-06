import React, { useState } from 'react';
import { MBtnLink, MButton, MContainer } from 'mui';
import styles from './educationExperience.style';
import EducationForm from './contents/educationForm';
import CourseForm from './contents/courseForm';

function EducationExperience() {
  const classes = styles();
  const [showCourseFrom, setShowCourseForm] = useState(false);

  const handleShowCourseForm = () => {
    setShowCourseForm(true);
  };

  return (
    <div className={classes.root}>
      <MContainer smaller className={classes.container}>
        <div className={classes.form}>
          <EducationForm />
          <div className={classes.addRow}>
            <div />
            <div>
              <MButton iconic>
                <i className="flaticon-plus" />
                ذخیره و اضافه کردن سابقه
              </MButton>
            </div>
          </div>
        </div>
        <div className={classes.form}>
          {showCourseFrom ? (
            <>
              <CourseForm />
              <div className={classes.addRow}>
                <div />
                <div>
                  <MButton iconic>
                    <i className="flaticon-plus" />
                    اضافه کردن سابقه آموزشی
                  </MButton>
                </div>
              </div>
            </>
          ) : (
            <MButton
              iconic
              linkGreen
              className={classes.btnAddCourse}
              onClick={handleShowCourseForm}
            >
              <i className="flaticon-plus" /> اضافه کردن سابقه آموزشی
            </MButton>
          )}
        </div>

        <div className={classes.footer}>
          <div>
            <MBtnLink to="/CVMaker/WorkExperience" iconic>
              بازگشت
            </MBtnLink>
          </div>
          <div>
            <MBtnLink to="/CVMaker/Skills" primary>
              ذخیره و مرحله بعد
            </MBtnLink>
          </div>
        </div>
      </MContainer>
    </div>
  );
}

export default EducationExperience;
