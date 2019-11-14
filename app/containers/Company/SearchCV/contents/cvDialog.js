import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MDialog, MDialogContent, MDialogTitle } from 'mui/MDialog';
import {
  makeStyles,
  MenuItem,
  OutlinedInput,
  Grid,
  DialogActions,
} from '@material-ui/core';
import MButton from 'mui/MButton';
import MSelect from 'mui/MSelect';
import { ShortInlineCV } from 'app/containers/cv';
import like from 'app/assets/images/icons/like.png';
import dislike from 'app/assets/images/icons/dislike.png';
import { MBtnLink } from 'mui/index';

const styles = makeStyles(() => ({
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
  selectFolderContainer: {
    padding: 30,
    margin: '0 -32px',
    borderBottom: '2px solid #ccc',
    display: 'flex',
    marginBottom: 30,
    fontWeight: 400,
    alignItems: 'center',
    '&>div:first-child': {
      flexBasis: 130,
      flexShrink: 0,
      flexGrow: 0,
    },
    '& .selectContainer': {
      flexGrow: 1,
    },
    '&>div:last-child': {
      flexBasis: '50%',
      padding: '0 20px',
      flexShrink: 0,
      flexGrow: 0,
      '& .MuiButton-root': {
        padding: '9px 30px',
        margin: '0 10px',
        '& img': {
          maxWidth: 18,
          marginRight: 10,
        },
      },
    },
  },
  footer: {
    borderTop: '2px solid #ccc',
    margin: '0 -8px',
    flexGrow: 1,
    overflow: 'hidden',
    padding: '15px 0 10px',
    '& .MuiButton-label': {
      fontWeight: 800,
    },
  },
}));

function CVDialog(props) {
  const classes = styles();
  const { open, onClose } = props;
  const [folder, setFolder] = useState(0);

  function handleChangeFolder(event) {
    setFolder(event.target.value);
  }

  const handleClose = () => {
    onClose();
  };

  return (
    <MDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      scroll="body"
      open={open}
      fullWidth
      maxWidth="md"
    >
      <MDialogTitle id="customized-dialog-title" onClose={handleClose}>
        مشاهده رزومه
      </MDialogTitle>
      <MDialogContent>
        <div className={classes.selectFolderContainer}>
          <div>انتخاب پوشه:</div>
          <div className="selectContainer">
            <MSelect
              value={folder}
              onChange={handleChangeFolder}
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
          <div>
            <MButton btnDefault lightGreen>
              <img alt="like" src={like} /> می پسندم
            </MButton>
            <MButton btnDefault lightGreen>
              <img alt="dislike" src={dislike} /> نمی پسندم
            </MButton>
          </div>
        </div>

        <ShortInlineCV />
      </MDialogContent>
      <DialogActions>
        <div className={classes.footer}>
          <Grid container spacing={8}>
            <Grid item md={3} />
            <Grid item md={3}>
              <MBtnLink linkGreen fullWidth>
                مشاهده رزومه کامل
              </MBtnLink>
            </Grid>
            <Grid item md={3}>
              <MBtnLink linkGreen fullWidth>
                اشتراک گذاری
              </MBtnLink>
            </Grid>
          </Grid>
        </div>
      </DialogActions>
    </MDialog>
  );
}

CVDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default CVDialog;
