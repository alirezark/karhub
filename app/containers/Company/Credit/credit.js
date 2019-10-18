import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Checkbox, Grid, Typography } from '@material-ui/core';
import MContainer from 'mui/MContainer';
import MTextField from 'mui/MTextField';
import MButton from 'mui/MButton';
import { CreditContext } from './credit.provider';
import styles from './credit.style';
import CreditHistory from './contents/creditHistory';

function EmbeddedCredit(props) {
  const { creditHistory } = props;
  const classes = styles();

  return (
    <MContainer>
      <div className={classes.embeddedHead}>
        <div>
          <Typography variant="h1">اعتبار خریداری شده</Typography>
        </div>
        <div>
          <MButton btnBlue>خرید اعتبار</MButton>
        </div>
      </div>
      <CreditHistory creditHistory={creditHistory} />
    </MContainer>
  );
}

EmbeddedCredit.propTypes = {
  creditHistory: PropTypes.array.isRequired,
};

function Credit(props) {
  const { embedded } = props;
  const [hasGift, setHasGift] = useState(false);
  const { creditHistory } = useContext(CreditContext);
  const classes = styles();

  const handleChangeHasGift = e => {
    setHasGift(e.target.checked);
    setTimeout(() => {
      document.getElementsByName('giftCode')[0].focus();
    }, 30);
  };

  if (embedded) return <EmbeddedCredit creditHistory={creditHistory} />;

  return (
    <MContainer>
      <Grid container>
        <Grid item md={1} />
        <Grid item md={10}>
          <Grid container className={classes.headContain}>
            <Grid item md={8}>
              <Typography variant="h2">خرید اعتبار</Typography>
              <Typography>
                با خرید اعتبار کارهاب به راحتی فرد مورد نظرتو پیدا کن!
              </Typography>
            </Grid>
            <Grid item md={4}>
              <label>
                <Checkbox
                  value={hasGift}
                  onChange={handleChangeHasGift}
                  inputProps={{
                    'aria-label': 'check',
                  }}
                />
                کد هدیه دارم!
              </label>
              <MTextField
                fullWidth
                name="giftCode"
                className="outlined-strong"
                placeholder="کد هدیه خود را وارد نمایید"
                disabled={!hasGift}
              />
            </Grid>
          </Grid>

          <Grid container spacing={8}>
            <Grid item md={4}>
              <div className={classNames(classes.creditCard, 'creditYellow')}>
                <Typography variant="h2" className={classes.creditHead}>
                  یک آگهی استخدام
                </Typography>
                <Typography>انتشار هر آگهی به مدت ۳۰ روز</Typography>
                <Typography>۳ ماه فرصت استفاده از اعتبار</Typography>
                <Typography variant="h2" className={classes.creditValue}>
                  ۹۰,۰۰۰ تومان
                </Typography>
                <MButton btnBlue>خرید اعتبار</MButton>
              </div>
            </Grid>
            <Grid item md={4}>
              <div className={classNames(classes.creditCard, 'creditGreen')}>
                <Typography variant="h2" className={classes.creditHead}>
                  10 آگهی استخدام
                </Typography>
                <Typography>انتشار هر آگهی به مدت ۳۰ روز</Typography>
                <Typography>۳ ماه فرصت استفاده از اعتبار</Typography>
                <Typography variant="h2" className={classes.creditValue}>
                  ۱۷۰,۰۰۰ تومان
                </Typography>
                <MButton btnBlue>خرید اعتبار</MButton>
              </div>
            </Grid>
            <Grid item md={4}>
              <div className={classNames(classes.creditCard, 'creditPurple')}>
                <Typography variant="h2" className={classes.creditHead}>
                  20 آگهی استخدام
                </Typography>
                <Typography>انتشار هر آگهی به مدت ۳۰ روز</Typography>
                <Typography>۳ ماه فرصت استفاده از اعتبار</Typography>
                <Typography variant="h2" className={classes.creditValue}>
                  ۳۰۰,۰۰۰ تومان
                </Typography>
                <MButton btnBlue>خرید اعتبار</MButton>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Typography variant="h1" className={classes.head2}>
        اعتبارهای خریداری شده
      </Typography>

      <CreditHistory creditHistory={creditHistory} />
    </MContainer>
  );
}

Credit.propTypes = {
  embedded: PropTypes.bool,
};

export default Credit;
