import React from 'react';
import { makeStyles } from '@material-ui/core';
import { MBtnLink, MButton } from 'mui/index';

const styles = makeStyles(theme => ({
  root: {
    display: 'flex',
    margin: '20px 0 10px',
    alignItems: 'center',
    fontSize: 14,
    color: '#666',
    '&>div:first-child': {
      flexGrow: 1,
    },
  },
  folderDetail: {
    '& i:before': {
      fontSize: 16,
      marginRight: 5,
      verticalAlign: 'middle',
    },
    '& strong': {
      fontWeight: 500,
      marginLeft: 5,
    },
  },
  btnShare: {
    fontSize: 12,
    marginRight: 20,
    padding: '2px 20px!important',
    '& i:before': {
      color: theme.palette.primary.main,
      fontSize: 16,
    },
  },
}));

function FolderCVMenu() {
  const classes = styles();

  return(
    <div className={classes.root}>
      <div className={classes.folderDetail}>
        <i className="flaticon-folder" />
        نام پوشه:
        <strong>فرهاد</strong>
      </div>
      <div>
        <MButton iconic className={classes.btnShare}>
          <i className="flaticon-share" />
          اشتراک گذاری
        </MButton>
        <MBtnLink to="/">مشاهده رزومه آپلود شده</MBtnLink>
      </div>
    </div>
  )
}

export default FolderCVMenu;
