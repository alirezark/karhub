import React from 'react';
import PropTypes from 'prop-types';
import LinearListCV from '../contents/linearListCV';

const exams = {
  title: 'آزمون های شخصیت شناسی',
  list: [
    {
      textDescribe: {
        text: 'آزمون شخصیت شناسی MBTI',
        describe: '(فکری. احساسی. قضاوت کننده. درونگرا)',
      },
    },
    {
      textDescribe: {
        text: 'آزمون شخصیت شناسی NEO',
        describe: 'توضیح در سایت',
      },
    },
    {
      textDescribe: {
        text: 'آزمون علاقه مندی شغلی',
        describe: 'جستجوگر',
      },
    },
  ],
};

function Exams(props) {
  const { editable, larger } = props;

  return (
    <LinearListCV
      icon="flaticon-certified-cv"
      cv={exams}
      editable={editable}
      larger={larger}
    />
  );
}

Exams.propTypes = {
  editable: PropTypes.bool,
  larger: PropTypes.bool,
};

export default Exams;
