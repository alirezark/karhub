import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { makeStyles, Typography } from '@material-ui/core';
import PureWidget from '../contents/pureWidget';

const SIZES = {
  TEXT_SIZE: [12, 14, 16],
  TEXT_LINE_HEIGHT: ['22px', '24px', '30px'],
};

const styles = makeStyles(() => ({
  text: {
    fontSize: props => SIZES.TEXT_SIZE[props.size],
    lineHeight: props => SIZES.TEXT_LINE_HEIGHT[props.size],
  },
}));

function AboutMe(props) {
  const { editable, size = 1, className, fullWidthContent = false } = props;
  const classes = styles({ size });

  const customClass = classNames({
    [className]: className !== undefined,
  });

  return (
    <PureWidget
      title="درباره من"
      icon="flaticon-contact"
      editable={editable}
      size={size}
      className={customClass}
      fullWidthContent={fullWidthContent}
    >
      <Typography className={classes.text}>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است چاپگرها و متون بلکه روزنامه مجله در ستون و سطر
        آنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
        متنوع با هدف بهبود ابزارهای.
      </Typography>
    </PureWidget>
  );
}

AboutMe.propTypes = {
  editable: PropTypes.bool,
  size: PropTypes.number,
  fullWidthContent: PropTypes.bool,
  className: PropTypes.string,
};

export default AboutMe;
