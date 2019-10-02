import React from 'react';
import {
  withStyles,
  makeStyles,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
} from '@material-ui/core';
import { Close as CloseIcon } from '@material-ui/icons';

const DialogTitleStyle = makeStyles(theme => ({
  root: {
    margin: 0,
    padding: '24px 32px 0',
  },
  title: {
    fontSize: 18,
    fontWeight: 800,
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
  },
}));

const MDialog = withStyles(() => ({
  root: {
    '& .MuiDialog-paperWidthSm': {
      maxWidth: 730,
    },
  },
}))(Dialog);

const MDialogTitle = withStyles(() => ({}))(props => {
  const classes = DialogTitleStyle();
  const { children, onClose } = props;
  return (
    <DialogTitle disableTypography className={classes.root}>
      <Typography variant="h2" className={classes.title}>
        {children}
      </Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
});

const MDialogContent = withStyles(() => ({
  root: {
    padding: '12px 32px 32px',
  },
}))(DialogContent);

const MDialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(DialogActions);

export { MDialog, MDialogTitle, MDialogContent, MDialogActions };
