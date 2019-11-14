import React from 'react';
import PropTypes from 'prop-types';
import LinearListCV from '../contents/linearListCV';

const experiences = {
  title: 'تجربیات کاری',
  list: [
    {
      title: 'مدیر فنی و بک اند دولوپر',
      txtGreen: 'شرکت:پارمید',
      txtSmall: 'از خرداد ۹۶ - تا کنون',
      description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه مجله در ستون و سطر آنچنان که لازم است و برای شرایط فعلی.',
    },
    {
      title: 'برنامه نویس ارشد بک اند',
      txtGreen: 'شرکت:پارمید',
      txtSmall: 'از خرداد ۹۲ - شهریور ۹۵',
      description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه مجله در ستون و سطر آنچنان که لازم است و برای شرایط فعلی.',
    },
    {
      title: 'برنامه نویس ارشد بک اند',
      txtGreen: 'شرکت:پارمید',
      txtSmall: 'از خرداد ۹۲ - شهریور ۹۵',
    },
  ],
};

function WorkExperience(props) {
  const { editable, larger = false } = props;

  return (
    <LinearListCV
      icon="flaticon-cv"
      cv={experiences}
      editable={editable}
      larger={larger}
    />
  );
}

WorkExperience.propTypes = {
  editable: PropTypes.bool,
  larger: PropTypes.bool,
};

export default WorkExperience;
