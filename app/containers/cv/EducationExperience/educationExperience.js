import React from 'react';
import PropTypes from 'prop-types';
import LinearListCV from '../contents/linearListCV';

const experiences = {
  title: 'تحصیلات',
  list: [
    {
      title: 'کارشناسی ارشد مهندسی فن آوری اطلاعات',
      txtSmall: 'موسسه/دانشگاه: دانشگاه امیرکبیر',
      txtSmallBold: '1393 - 1396',
    },
    {
      title: 'کارشناسی مهندسی کامپیوتر',
      txtSmall: 'موسسه/دانشگاه: دانشگاه امیرکبیر',
      txtSmallBold: '1389 - 1393',
    },
  ],
};

function EducationExperience(props) {
  const { editable, larger = false } = props;

  return (
    <LinearListCV
      icon="flaticon-university"
      cv={experiences}
      editable={editable}
      larger={larger}
    />
  );
}

EducationExperience.propTypes = {
  editable: PropTypes.bool,
  larger: PropTypes.bool,
};

export default EducationExperience;
