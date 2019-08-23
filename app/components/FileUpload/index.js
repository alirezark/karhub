/**
 *
 * FileUpload
 *
 */

import React, { useState } from 'react';
import MButton from 'mui/MButton';
import { withStyles, makeStyles, IconButton } from '@material-ui/core';
import PropTypes from 'prop-types';
import { Edit, Close } from '@material-ui/icons';
// import styled from 'styled-components';

const fileInfoStyle = makeStyles(theme => ({
  root: {
    border: '1px dashed',
    borderColor: theme.palette.primary.main,
    color: theme.palette.primary.main,
    display: 'flex',
    lineHeight: '28px',
    padding: '12px 6px 12px 18px',
    borderRadius: 50,
    '& div': {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
  },
  title: {
    flexGrow: 1,
  },
  icon: {
    flexBasis: '32px',
    color: '#444',
    cursor: 'pointer',
    textAlign: 'right',
    '&:hover': {
      color: '#000',
    },
  },
}));

const Button = withStyles(theme => ({
  root: {
    border: '1px dashed',
    borderColor: theme.palette.primary.main,
    backgroundColor: 'transparent',
    color: theme.palette.primary.main,
    lineHeight: '42px',
    fontSize: 18,
    fontWeight: 'bold',
  },
}))(props => <MButton {...props} />);

function GetFile(props) {
  const { title } = props;

  return (
    <div>
      <label htmlFor="raised-button-file">
        <Button fullWidth variant="contained" component="span">
          {title}
        </Button>
      </label>
    </div>
  );
}

GetFile.propTypes = {
  title: PropTypes.string.isRequired,
};

function FileInfo(props) {
  const { file, handleRemove } = props;
  const classes = fileInfoStyle();

  return (
    <div className={classes.root}>
      <div className={classes.title}>{file.name}</div>
      <div className={classes.icon}>
        <IconButton aria-label="edit" onClick={handleRemove} size='small'>
          <Close />
        </IconButton>
      </div>
      <div className={classes.icon}>
        <label htmlFor="raised-button-file">
          <IconButton aria-label="edit" component="span" size='small'>
            <Edit />
          </IconButton>
        </label>
      </div>
    </div>
  );
}

FileInfo.propTypes = {
  file: PropTypes.object.isRequired,
  handleRemove: PropTypes.func,
};

function FileUpload(props) {
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleFileUpload = function(files) {
    if(files[0])
      setUploadedFile(files[0]);
  };

  const handleRemoveFile = function() {
    setUploadedFile(null);
  };

  return (
    <div>
      <input
        style={{ display: 'none' }}
        id="raised-button-file"
        type="file"
        onChange={e => handleFileUpload(e.target.files)}
      />
      {uploadedFile === null ? (
        <GetFile {...props} />
      ) : (
        <FileInfo file={uploadedFile} handleRemove={handleRemoveFile}/>
      )}
    </div>
  );
}

FileUpload.propTypes = {
  title: PropTypes.string.isRequired,
};

export default FileUpload;
