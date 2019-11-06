import React, { useState } from 'react';
import { Grid, makeStyles, MenuItem, OutlinedInput } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import MTextField from 'mui/MTextField';
import { PersonOutlined } from '@material-ui/icons';
import MSelect from 'mui/MSelect';

const styles = makeStyles(() => ({
  root: {
    marginBottom: 10,
  },
  select: {
    '&.MuiOutlinedInput-root': {
      '& fieldset': {
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#8E8E8C',
      },
    },
    '& .MuiSelect-root>div': {
      fontSize: 14,
    },
    '& .rate': {
      display: 'none',
    },
    '& svg': {
      color: '#8E8E8C',
    },
    '& .MuiSelect-icon': {
      right: 10,
    },
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    fontSize: 12,
    color: '#313131',
    '& div:first-child': {
      flexGrow: 1,
    },
    '& .rate': {
      direction: 'rtl',
    },
  },
}));

function SkillForm() {
  const [value, setValue] = useState(-1);
  const classes = styles();

  const handleSelect = e => {
    setValue(e.target.value);
  };

  return (
    <Grid container spacing={3} className={classes.root}>
      <Grid item md={6}>
        <MTextField
          fullWidth
          name="companyName"
          className="outlined-strong"
          placeholder="مهارت"
          InputProps={{ startAdornment: <PersonOutlined /> }}
        />
      </Grid>
      <Grid item md={6}>
        <MSelect
          value={value}
          onChange={handleSelect}
          className={classes.select}
          fullWidth
          displayEmpty
          InputProps={{ startAdornment: <PersonOutlined /> }}
          input={
            <OutlinedInput
              labelWidth={0}
              name="folder"
              id="outlined-age-simple"
              startAdornment={<PersonOutlined />}
            />
          }
        >
          <MenuItem value="-1" disabled>
            میزان مهارت
          </MenuItem>
          <MenuItem value={0}>
            <div className={classes.item}>
              <div>تازه کار</div>
              <div>
                <Rating className="rate" value={1} size="small" disabled />
              </div>
            </div>
          </MenuItem>
          <MenuItem value={1}>
            <div className={classes.item}>
              <div>مبتدی</div>
              <div>
                <Rating className="rate" value={2} size="small" disabled />
              </div>
            </div>
          </MenuItem>
          <MenuItem value={2}>
            <div className={classes.item}>
              <div>ماهر</div>
              <div>
                <Rating className="rate" value={3} size="small" disabled />
              </div>
            </div>
          </MenuItem>
          <MenuItem value={3}>
            <div className={classes.item}>
              <div>مسلط</div>
              <div>
                <Rating className="rate" value={4} size="small" disabled />
              </div>
            </div>
          </MenuItem>
          <MenuItem value={4}>
            <div className={classes.item}>
              <div>پیشرفته</div>
              <div>
                <Rating className="rate" value={5} size="small" disabled />
              </div>
            </div>
          </MenuItem>
        </MSelect>
      </Grid>
    </Grid>
  );
}

export default SkillForm;
