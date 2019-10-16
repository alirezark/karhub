import React from 'react';
import PropTypes from 'prop-types';
import { MDialog, MDialogContent, MDialogTitle } from 'mui/MDialog';
import { Checkbox, makeStyles, Typography, Grid } from '@material-ui/core';
import MButton from 'mui/MButton';

const styles = makeStyles(() => ({
  message: {
    color: '#a5a5a5',
  },
  btnContain: {
    margin: '2rem 0 1rem',
  },
}));

function DeleteFolderDialog(props) {
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
      maxWidth="xs"
    >
      <MDialogTitle id="customized-dialog-title" onClose={handleClose}>
        حذف پوشه
      </MDialogTitle>
      <MDialogContent>
        <Typography className={classes.message}>آیا از حذف پوشه انتخابی مطمعن هستید؟</Typography>
        <Grid container spacing={2} className={classes.btnContain}>
          <Grid item xs={2} />
          <Grid item xs={4}>
            <MButton danger fullWidth variant="contained">
              بله
            </MButton>
          </Grid>
          <Grid item xs={4}>
            <MButton
              fullWidth
              btnDefault
              variant="container"
              onClick={handleClose}
            >
              خیر
            </MButton>
          </Grid>
        </Grid>
      </MDialogContent>
    </MDialog>
  );
}

DeleteFolderDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default DeleteFolderDialog;
