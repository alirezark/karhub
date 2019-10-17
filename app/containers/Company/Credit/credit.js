import React, { useContext, useState } from 'react';
import classNames from 'classnames';
import { Checkbox, Grid, Typography } from '@material-ui/core';
import MContainer from 'mui/MContainer';
import MTextField from 'mui/MTextField';
import MTableBox from 'mui/MTableBox';
import MButton from 'mui/MButton';
import { CreditContext } from './credit.provider';
import styles from './credit.style';

function Credit() {
  const [hasGift, setHasGift] = useState(false);
  const { creditHistory } = useContext(CreditContext);
  const classes = styles();

  const handleChangeHasGift = e => {
    setHasGift(e.target.checked);
    setTimeout(() => {
      document.getElementsByName('giftCode')[0].focus();
    }, 30);
  };

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

      <MTableBox thin>
        <table>
          {creditHistory.map(credit => (
            <tr key={credit.id}>
              <td>
                <div className="inline-head">
                  <div>شماره فاکتور:</div>
                  <div>{credit.factorNum}</div>
                </div>
              </td>
              <td>
                <div className="inline-head">
                  <div>نوع اعتبار:</div>
                  <div>{credit.type}</div>
                </div>
              </td>
              <td>
                <div className="inline-head">
                  <div>تاریخ شروع:</div>
                  <div>{credit.start}</div>
                </div>
              </td>
              <td>
                <div className="inline-head">
                  <div>تاریخ انقضا:</div>
                  <div>{credit.expire}</div>
                </div>
              </td>
              <td>
                <Typography
                  variant="h3"
                  className={classNames({
                    [classes.colorGreen]: credit.status === 'فعال',
                    [classes.colorYellow]: credit.status === 'غیرفعال',
                  })}
                >
                  {credit.status}
                </Typography>
              </td>
            </tr>
          ))}
        </table>
      </MTableBox>
    </MContainer>
  );
}

export default Credit;
