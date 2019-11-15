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
  const { editable, size = 1, leftDescribe = false } = props;

  return (
    <LinearListCV
      icon="flaticon-certified-cv"
      cv={experiences}
      editable={editable}
      size={size}
      leftDescribe={leftDescribe}
    />
  );
}

CourseExperience.propTypes = {
  editable: PropTypes.bool,
  size: PropTypes.number,
  leftDescribe: PropTypes.bool,
};

export default CourseExperience;
