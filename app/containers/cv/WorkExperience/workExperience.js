import React from 'react';
import PropTypes from 'prop-types';
import LinearListCV from '../contents/linearListCV';

const experiences = {
  title: 'تجربیات کاری',
  list: [
    {
      title: 'مدیر فنی و بک اند دولوپر',
      txtGreen: 'شرکت:پارمید',
      txtGreen2: 'حقوق دریافتی: ۳.۰۰۰.۰۰۰ تومان',
      txtSmallBold: 'از خرداد ۹۶ - تا کنون',
      description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه مجله در ستون و سطر آنچنان که لازم است و برای شرایط فعلی.',
    },
    {
      title: 'برنامه نویس ارشد بک اند',
      txtGreen: 'شرکت:پارمید',
      txtGreen2: 'حقوق دریافتی: ۳.۲۰۰.۰۰۰ تومان',
      txtSmallBold: 'از خرداد ۹۲ - شهریور ۹۵',
      description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه مجله در ستون و سطر آنچنان که لازم است و برای شرایط فعلی.',
    },
    {
      title: 'برنامه نویس ارشد بک اند',
      txtGreen: 'شرکت:پارمید',
      txtGreen2: 'حقوق دریافتی: ۴.۰۰۰.۰۰۰ تومان',
      txtSmallBold: 'از خرداد ۹۲ - شهریور ۹۵',
    },
  ],
};

function WorkExperience(props) {
  const { editable, leftDescribe = false, size = 1 } = props;

  return (
    <LinearListCV
      icon="flaticon-cv"
      cv={experiences}
      editable={editable}
      leftDescribe={leftDescribe}
      size={size}
    />
  );
}

WorkExperience.propTypes = {
  editable: PropTypes.bool,
  leftDescribe: PropTypes.bool,
  size: PropTypes.number,
};

export default WorkExperience;
