import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { MContainer } from 'mui';
import styles from './steps.style';

const STEP_LOCATIONS = ['/CVMaker/SelectTemplate', '/CVMaker/PersonalInfo'];

function Steps(props) {
  const classes = styles();
  const { location } = props;
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    setActiveStep(STEP_LOCATIONS.indexOf(location.pathname));
  }, [location]);

  const stepClassNames = step =>
    classNames(classes.step, {
      step_active: activeStep === step,
      step_done: activeStep > step,
    });

  const stepRowClassName = () => `step-${activeStep}`;

  return (
    <div className={classes.root}>
      <MContainer className={classes.container}>
        <div className={classes.steps_container}>
          <div className={stepClassNames(0)}>
            <div className={classNames(classes.step_icon, 'step_icon')}>
              <div>1</div>
              <i className="flaticon-form" />
              <div className="step-title">انتخاب قالب رزومه</div>
            </div>
          </div>
          <div className={stepClassNames(1)}>
            <div className={classNames(classes.step_dots, 'step_dots')} />
            <div className={classNames(classes.step_icon, 'step_icon')}>
              <div>2</div>
              <i className="flaticon-profile" />
              <div className="step-title">مشخصات فردی</div>
            </div>
          </div>
          <div className={stepClassNames(2)}>
            <div className={classNames(classes.step_dots, 'step_dots')} />
            <div className={classNames(classes.step_icon, 'step_icon')}>
              <div>3</div>
              <i className="flaticon-portfolio" />
              <div className="step-title">سابقه شغلی</div>
            </div>
          </div>
          <div className={stepClassNames(3)}>
            <div className={classNames(classes.step_dots, 'step_dots')} />
            <div className={classNames(classes.step_icon, 'step_icon')}>
              <div>4</div>
              <i className="flaticon-certificate" />
              <div className="step-title">سابقه تحصیلی/آموزشی</div>
            </div>
          </div>
          <div className={stepClassNames(4)}>
            <div className={classNames(classes.step_dots, 'step_dots')} />
            <div className={classNames(classes.step_icon, 'step_icon')}>
              <div>5</div>
              <i className="flaticon-design-skills" />
              <div className="step-title">مهارت و علاقه مندی ها</div>
            </div>
          </div>
          <div className={classes.step_row}>
            <div className={stepRowClassName()} />
          </div>
        </div>
      </MContainer>
    </div>
  );
}

Steps.propTypes = {
  location: PropTypes.object.isRequired,
};

export default Steps;
