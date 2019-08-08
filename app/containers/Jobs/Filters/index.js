import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { MenuItem, OutlinedInput } from '@material-ui/core';
import MContainer from 'mui/MContainer';
import MSelect from 'mui/MSelect';
import Fab from '@material-ui/core/Fab';
import messages from './messages';
import styles from './style';

function Filters() {
  const classes = styles();
  const [values, setValues] = useState({
    job_category: 0,
    worked_year: 0,
    job_type: 0,
    edu: 0,
    price: 0,
  });

  function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  }

  const resetFilters = () => {
    const newValues = {};
    // eslint-disable-next-line guard-for-in,no-restricted-syntax
    for (const attr in values) newValues[attr] = 0;
    setValues(newValues);
  };

  return (
    <MContainer maxWidth="md" mt={6} className={classes.root}>
      <div className={classes.filters}>
        <div className={classes.filter}>
          <div className={classes.filterTitle}><FormattedMessage {...messages.job_category} /></div>
          <MSelect
            value={values.job_category}
            onChange={handleChange}
            className={classes.filterSelect}
            input={
              <OutlinedInput
                labelWidth={0}
                name="job_category"
                id="outlined-age-simple"
              />
            }
          >
            <MenuItem value={0}>همه</MenuItem>
            <MenuItem value={10}>مهندسی کامپیوتر</MenuItem>
            <MenuItem value={20}>مهندسی شیمی</MenuItem>
            <MenuItem value={30}>مهندسی معکوس</MenuItem>
          </MSelect>
        </div>
        <div className={classes.filter}>
          <div className={classes.filterTitle}><FormattedMessage {...messages.worked_year} /></div>
          <MSelect
            value={values.worked_year}
            onChange={handleChange}
            className={classes.filterSelect}
            input={
              <OutlinedInput
                labelWidth={0}
                name="worked_year"
                id="outlined-age-simple"
              />
            }
          >
            <MenuItem value={0}>همه</MenuItem>
            <MenuItem value={10}>یک سال</MenuItem>
            <MenuItem value={20}>دو سال</MenuItem>
            <MenuItem value={30}>سه سال</MenuItem>
          </MSelect>
        </div>
        <div className={classes.filter}>
          <div className={classes.filterTitle}><FormattedMessage {...messages.job_type} /></div>
          <MSelect
            value={values.job_type}
            onChange={handleChange}
            className={classes.filterSelect}
            input={
              <OutlinedInput
                labelWidth={0}
                name="job_type"
                id="outlined-age-simple"
              />
            }
          >
            <MenuItem value={0}>همه</MenuItem>
            <MenuItem value={10}>تمام وقت</MenuItem>
            <MenuItem value={20}>نیمه وقت</MenuItem>
            <MenuItem value={30}>پاره وقت</MenuItem>
          </MSelect>
        </div>
        <div className={classes.filter}>
          <div className={classes.filterTitle}><FormattedMessage {...messages.edu} /></div>
          <MSelect
            value={values.edu}
            onChange={handleChange}
            className={classes.filterSelect}
            input={
              <OutlinedInput
                labelWidth={0}
                name="edu"
                id="outlined-age-simple"
              />
            }
          >
            <MenuItem value={0}>همه</MenuItem>
            <MenuItem value={10}>کارشناسی</MenuItem>
            <MenuItem value={20}>کارشناسی ارشد</MenuItem>
            <MenuItem value={30}>دکتری</MenuItem>
          </MSelect>
        </div>
        <div className={classes.filter}>
          <div className={classes.filterTitle}><FormattedMessage {...messages.price} /></div>
          <MSelect
            value={values.price}
            onChange={handleChange}
            className={classes.filterSelect}
            input={
              <OutlinedInput
                labelWidth={0}
                name="price"
                id="outlined-age-simple"
              />
            }
          >
            <MenuItem value={0}>همه</MenuItem>
            <MenuItem value={10}>کمتر از یک میلیون</MenuItem>
            <MenuItem value={20}>بین یک تا دو میلیون</MenuItem>
            <MenuItem value={30}>بین دو تا سه میلیون</MenuItem>
          </MSelect>
        </div>
        <div className={classes.reset}>
          <Fab className={classes.btnReset} onClick={resetFilters}>
            x
          </Fab>
        </div>
      </div>
    </MContainer>
  );
}

export default Filters;
