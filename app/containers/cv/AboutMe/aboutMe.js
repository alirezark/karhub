import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Typography } from '@material-ui/core';
import { MButton } from 'mui/index';

const styles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  iconContain: {
    flexBasis: 60,
    paddingTop: 5,
  },
  content: {
    flexGrow: 1,
    '& h3': {
      color: theme.palette.primary.main,
      fontSize: 14,
    },
    '& p': {
      fontSize: 14,
      marginTop: 5,
      lineHeight: '24px',
    },
  },
  titleRow: {
    display: 'flex',
    alignItems: 'center',
  },
  btnEdit: {
    fontSize: 12,
    color: '#aaa',
    marginLeft: 10,
    '& i:before': {
      fontSize: 14,
      marginRight: 5,
    },
  },
}));

function AboutMe(props) {
  const classes = styles();
  const { editable } = props;

  return (
    <div className={classes.root}>
      <div className={classes.iconContain}>
        <i className="flaticon-contact" />
      </div>
      <div className={classes.content}>
        <div className={classes.titleRow}>
          <div>
            <Typography variant="h3">درباره من:</Typography>
          </div>
          <div>
            {editable && (
              <MButton className={classes.btnEdit}>
                <i className="flaticon-draw" /> ویرایش
              </MButton>
            )}
          </div>
        </div>
        <Typography>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه مجله در ستون و سطر
          آنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای.
        </Typography>
      </div>
    </div>
  );
}

AboutMe.propTypes = {
  editable: PropTypes.bool,
};

export default AboutMe;
