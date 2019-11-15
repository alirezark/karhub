import React from 'react';
import PropTypes from 'prop-types';
import { MDialog, MDialogContent, MDialogTitle } from 'mui/MDialog';
import { makeStyles, Typography } from '@material-ui/core';
import MButton from 'mui/MButton';

const styles = makeStyles(() => ({
  info: {
    color: '#818181',
    fontSize: 14,
    lineHeight: '26px',
    marginBottom: 50,
  },
  linkContain: {
    display: 'flex',
    alignItems: 'center',
    width: '90%',
    margin: '20px auto',
    '& div:first-child': {
      flexGrow: 1,
    },
  },
  link: {
    border: '2px solid #8E8E8C',
    borderRadius: 50,
    padding: '12px 20px',
    margin: '0 10px',
    textAlign: 'right',
    color: '#8E8E8C',
  },
}));

// TODO: Needs link to social networks
function ShareJobDialog(props) {
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
        ساخت اعلان شغلی
      </MDialogTitle>
      <MDialogContent>
        <Typography className={classes.info}>
          شما به راحتی می توانید موقعیت شغلی مورد نظر را در شبکه های اجتماعی
          اشتراک گذاری نمایید
        </Typography>
        <Typography variant="h3">لینک موقعیت شغلی:</Typography>
        <div className={classes.linkContain}>
          <div>
            <div className={classes.link}>
              https://business.linkedin.com/talent-solutions
            </div>
          </div>
          <div>
            <MButton linkGreen>کپی کردن</MButton>
          </div>
        </div>
      </MDialogContent>
    </MDialog>
  );
}

ShareJobDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ShareJobDialog;
