import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MDialog, MDialogContent, MDialogTitle } from 'mui/MDialog';
import MTextField from 'mui/MTextField';
import { makeStyles, MenuItem, OutlinedInput } from '@material-ui/core';
import MButton from 'mui/MButton';
import MSelect from 'mui/MSelect';

const styles = makeStyles(() => ({
  formContainer: {
    maxWidth: 450,
    margin: '40px auto',
  },
  formRow: {
    display: 'flex',
    alignItems: 'baseline',
    margin: '20px 0',
    fontSize: 14,
    color: '#444',
    '&>div:first-child': {
      width: 140,
      paddingRight: 20,
      textAlign: 'right',
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
      },
    },
    '&.outlined-strong fieldset': {
      borderColor: '#8E8E8C',
    },
    '& .MuiSelect-icon': {
      right: 10,
    },
  },
}));

function MoveDialog(props) {
  const classes = styles();
  const { open, onClose } = props;
  const [values, setValues] = useState({
    folder: 0,
    type: 0,
    description: '',
  });

  function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  }

  const handleClose = () => {
    onClose();
  };

  return (
    <MDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      fullWidth
      maxWidth="sm"
    >
      <MDialogTitle id="customized-dialog-title" onClose={handleClose}>
        انتقال به پوشه
      </MDialogTitle>
      <MDialogContent>
        <div className={classes.formContainer}>
          <div className={classes.formRow}>
            <div>انتخاب پوشه‌:</div>
            <div>
              <MSelect
                value={values.folder}
                onChange={handleChange}
                className={classes.select}
                fullWidth
                input={
                  <OutlinedInput
                    labelWidth={0}
                    name="folder"
                    id="outlined-age-simple"
                  />
                }
              >
                <MenuItem value={0}>پدرام فرزین</MenuItem>
                <MenuItem value={10}>پوشه تخصصی</MenuItem>
                <MenuItem value={20}>پوشه فرضی</MenuItem>
                <MenuItem value={30}>سر کاری</MenuItem>
              </MSelect>
            </div>
          </div>
          <div className={classes.formRow}>
            <div>مرحله استخدامی:</div>
            <div>
              <MSelect
                value={values.folder}
                onChange={handleChange}
                className={classes.select}
                fullWidth
                input={
                  <OutlinedInput
                    labelWidth={0}
                    name="folder"
                    id="outlined-age-simple"
                  />
                }
              >
                <MenuItem value={0}>مرحله اولیه</MenuItem>
                <MenuItem value={10}>مصاحبه</MenuItem>
                <MenuItem value={20}>مصحابه تخصصی</MenuItem>
                <MenuItem value={30}>کارهای اداری</MenuItem>
              </MSelect>
            </div>
          </div>
          <div className={classes.formRow}>
            <div>توضیحات:</div>
            <div>
              <MTextField
                multiline
                fullWidth
                rows={5}
                name="description"
                className="outlined-strong"
              />
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

MoveDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default MoveDialog;
