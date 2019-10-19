import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MDialog, MDialogContent, MDialogTitle } from 'mui/MDialog';
import { Checkbox, makeStyles, MenuItem, OutlinedInput, Typography } from '@material-ui/core';
import MTextField from 'mui/MTextField';
import MButton from 'mui/MButton';
import { PersonOutlined } from '@material-ui/icons';
import MSelect from 'mui/MSelect';

const styles = makeStyles(() => ({
  info: {
    color: '#818181',
    fontSize: 14,
    lineHeight: '26px',
  },
  formContainer: {
    maxWidth: 350,
    margin: '40px auto',
  },
  formRow: {
    display: 'flex',
    alignItems: 'center',
    margin: '20px 0',
    fontSize: 14,
    color: '#444',
    '&>div:first-child': {
      width: 100,
    },
    '&>div:last-child': {
      flexGrow: 1,
    },
  },
  formFooter: {
    textAlign: 'center',
    marginTop: 40,
  },
  btnSubmit: {
    width: 180,
  },
  select: {
    '&.MuiOutlinedInput-root': {
      '& fieldset': {
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#8E8E8C',
      },
    },
    '& .MuiSelect-icon': {
      right: 10,
    },
  },
}));

function CreateAlertDialog(props) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    period: 0,
  });
  const classes = styles();
  const { open, onClose } = props;

  const handleClose = () => {
    onClose();
  };

  const handleForm = e => {
    setForm(oldValue => ({
      ...oldValue,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <MDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      fullWidth
      maxWidth="xs"
    >
      <MDialogTitle id="customized-dialog-title" onClose={handleClose}>
        ساخت اعلان شغلی
      </MDialogTitle>
      <MDialogContent>
        <Typography className={classes.info}>
          با ساخت رزومه در کارهاب شما به راحتی می توانید با یک کلیک برای بقیه
          موقعیت های شغلی رزومه خود را ارسال کنید.
        </Typography>
        <div className={classes.formContainer}>
          <div className={classes.formRow}>
            <div>
              <MTextField
                fullWidth
                name="name"
                className="outlined-strong"
                placeholder="عنوان شغلی"
                InputProps={{ startAdornment: <PersonOutlined /> }}
                value={form.name}
                onChange={handleForm}
              />
            </div>
          </div>
          <div className={classes.formRow}>
            <div>
              <MTextField
                fullWidth
                name="email"
                className="outlined-strong"
                placeholder="ایمیل"
                InputProps={{ startAdornment: <PersonOutlined /> }}
                value={form.name}
                onChange={handleForm}
              />
            </div>
          </div>
          <div className={classes.formRow}>
            <div>
              <MSelect
                value={form.period}
                onChange={handleForm}
                className={classes.select}
                fullWidth
                input={
                  <OutlinedInput
                    labelWidth={0}
                    name="period"
                    id="outlined-age-simple"
                  />
                }
              >
                <MenuItem value={0}>روزانه</MenuItem>
                <MenuItem value={10}>هفتگی</MenuItem>
                <MenuItem value={20}>هر دو هفته</MenuItem>
                <MenuItem value={30}>ماهانه</MenuItem>
              </MSelect>
            </div>
          </div>
          <div className={classes.formFooter}>
            <MButton className={classes.btnSubmit} primary>
              ثبت
            </MButton>
          </div>
        </div>
      </MDialogContent>
    </MDialog>
  );
}

CreateAlertDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default CreateAlertDialog;
