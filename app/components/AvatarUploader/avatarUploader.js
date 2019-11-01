/**
 *
 * AvatarUploader
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import styles from './avatarUploader.style';
import MAvatar from 'mui/MAvatar';

const UploadIcon = props => (
  <div {...props}>
    <label htmlFor="avatar-upload-file">
      <div className="upload-icons">
        <i className="flaticon-user" />
        <i className="flaticon-plus" />
      </div>
    </label>
  </div>
);

const StyledUploadIcon = styled(UploadIcon)`
  width: 97px;
  height: 97px;
  position: relative;
  margin: 3px;

  & .upload-icons {
    width: 90px;
    height: 90px;
    padding: 15px 30px;
    text-align: center;
    border: 2px dashed #ccc;
    border-radius: 45px;
    position: relative;
    cursor: pointer;

    & i:before {
      font-size: 30px;
      color: #96a7a6;
    }
    & i:last-child:before {
      font-size: 20px;
      margin-top: -5px;
      display: block;
    }
    &:hover {
      border-color: #bbb;
    }
  }
  &:before {
    content: ' ';
    position: absolute;
    z-index: 0;
    right: 17px;
    top: 10px;
    width: 90%;
    height: 90%;
    background: #d7f0ee;
    border-radius: 60px;
  }
`;

const StyledAvatar = styled(MAvatar)`
  && {
    position: relative;
    margin: 0;
    right: 0;
    width: 97px;
    height: 97px;
  }
`;

function AvatarUploader() {
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleFileUpload = function(files) {
    const reader = new FileReader();

    reader.onloadend = () => {
      setUploadedFile(reader.result);
    };

    reader.readAsDataURL(files[0]);

    if (files[0]) setUploadedFile(files[0]);
  };

  return (
    <div>
      <input
        style={{ display: 'none' }}
        id="avatar-upload-file"
        type="file"
        onChange={e => handleFileUpload(e.target.files)}
      />
      {uploadedFile === null ? (
        <StyledUploadIcon />
      ) : (
        <label htmlFor="avatar-upload-file">
          <StyledAvatar src={uploadedFile} />
        </label>
      )}
    </div>
  );
}

AvatarUploader.propTypes = {};

export default AvatarUploader;
