import React from 'react';
import PropTypes from 'prop-types';
import LinearListCV from '../contents/linearListCV';

const experiences = {
  title: 'دوره ها و گواهینامه ها',
  list: [
    {
      title: 'دوره مدیریت پروژه',
      txtSmall: 'موسسه: پارمید',
      txtSmallBold: 'مهر ۹۷',
    },
    {
      title: 'طراحی و پیاده سازی دیتابیس',
      txtSmall: 'موسسه: پارمید',
      txtSmallBold: 'مهر ۹۵',
    },
  ],
};

function CourseExperience(props) {
  const { editable } = props;

  return (
    <LinearListCV
      icon="flaticon-certified-cv"
      cv={experiences}
      editable={editable}
    />
  );
}

CourseExperience.propTypes = {
  editable: PropTypes.bool,
};

export default CourseExperience;