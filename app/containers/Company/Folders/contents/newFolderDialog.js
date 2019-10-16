import React from 'react';
import PropTypes from 'prop-types';
import { MDialog, MDialogContent, MDialogTitle } from 'mui/MDialog';
import { Checkbox, makeStyles } from '@material-ui/core';
import MTextField from 'mui/MTextField';
import MButton from 'mui/MButton';

const styles = makeStyles(() => ({
  formContainer: {
    maxWidth: 400,
    margin: '40px auto',
  },
  formRow: {
    display: 'flex',
    alignItems: 'center',
    margin: '5px 0',
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
}));

function NewFolderDialog(props) {
  const classes = styles();
  const { open, onClose } = props;

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
        ایجاد پوشه
      </MDialogTitle>
      <MDialogContent>
        <div className={classes.formContainer}>
          <div className={classes.formRow}>
            <div>نام پوشه‌:</div>
            <div>
              <MTextField fullWidth name="name" className="outlined-strong" />
            </div>
          </div>
          <div className={classes.formRow}>
            <div></div>
            <div className="text-right">
              <label>
                <Checkbox
                  value={0}
                  inputProps={{
                    'aria-label': 'check',
                  }}
                />
                دسترسی خصوصی
              </label>
            </div>
          </div>
          <div className={classes.formFooter}>
            <MButton className={classes.btnSubmit} primary>ثبت</MButton>
          </div>
        </div>
      </MDialogContent>
    </MDialog>
  );
}

NewFolderDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default NewFolderDialog;
