import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Typography } from '@material-ui/core';
import PureWidget from '../contents/pureWidget';

const styles = makeStyles(() => ({
  text: {
    fontSize: props => (props.larger ? 16 : 14),
    lineHeight: props => (props.larger ? '30px' : '24px'),
  },
}));

function AboutMe(props) {
  const { editable, larger = false } = props;
  const classes = styles({ larger });

  return (
    <PureWidget
      title="درباره من"
      icon="flaticon-contact"
      editable={editable}
      larger={larger}
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
  larger: PropTypes.bool,
};

export default AboutMe;
