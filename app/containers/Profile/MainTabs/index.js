import React from 'react';
import classNames from 'classnames';
// import { FormattedMessage } from 'react-intl';
import MContainer from 'mui/MContainer';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
// import messages from './messages';
import icon1 from 'app/assets/images/icons/digital_marketer.png';
import icon2 from 'app/assets/images/icons/create_cv.png';
import icon3 from 'app/assets/images/icons/bar_on test.png';
import icon4 from 'app/assets/images/icons/notify.png';
import styles from './style';

function MainTabs(props) {
  const classes = styles();
  const { selected, setSelected } = props;

  return (
    <div className={classes.greyContainer}>
      <MContainer maxWidth="md" mt={6} className={classes.root}>
        <Grid container>
          <Grid item md={1} />
          <Grid item md={10}>
            <Grid container spacing={3}>
              <Grid item xs={3}>
                <div
                  className={classNames([classes.tab], {
                    selected: selected === 0,
                  })}
                  onClick={() => setSelected(0)}
                >
                  <img src={icon1} alt="settings" />
                  تنظیمات حساب کاربری
                </div>
              </Grid>
              <Grid item xs={3}>
                <div
                  className={classNames([classes.tab], {
                    selected: selected === 1,
                  })}
                  onClick={() => setSelected(1)}
                >
                  <img src={icon2} alt="settings" />
                  رزومه‌های من
                </div>
              </Grid>
              <Grid item xs={3}>
                <div
                  className={classNames([classes.tab], {
                    selected: selected === 2,
                  })}
                  onClick={() => setSelected(2)}
                >
                  <img src={icon3} alt="settings" />
                  لیست علاقه ها
                </div>
              </Grid>
              <Grid item xs={3}>
                <div
                  className={classNames([classes.tab], {
                    selected: selected === 3,
                  })}
                  onClick={() => setSelected(3)}
                >
                  <img src={icon4} alt="settings" />
                  تنظیمات اعلان‌ها
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </MContainer>
    </div>
  );
}

MainTabs.propTypes = {
  selected: PropTypes.number.isRequired,
  setSelected: PropTypes.func,
};

export default MainTabs;
