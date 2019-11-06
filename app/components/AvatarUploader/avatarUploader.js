/**
 *
 * AvatarUploader
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
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
  width: ${props => (props.small ? '60px' : '97px')};
  height: ${props => (props.small ? '60px' : '97px')};
  position: relative;
  margin: 3px;

  & .upload-icons {
    width: ${props => (props.small ? '55px' : '90px')};
    height: ${props => (props.small ? '55px' : '90px')};
    padding: ${props => (props.small ? '10px' : '15px 30px')};
    text-align: center;
    border: ${props => (props.small ? '1px' : '2px')} dashed #ccc;
    border-radius: 45px;
    position: relative;
    cursor: pointer;

    & i:before {
      font-size: ${props => (props.small ? '18px' : '30px')};
      color: #96a7a6;
    }
    & i:last-child:before {
      font-size: ${props => (props.small ? '12px' : '20px')};
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
    right: ${props => (props.small ? '10px' : '17px')};
    top: ${props => (props.small ? '5px' : '10px')};
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
    width: ${props => (props.small ? '66px' : '97px')};
    height: ${props => (props.small ? '66px' : '97px')};
  }
`;

function AvatarUploader(props) {
  const [uploadedFile, setUploadedFile] = useState(null);
  const { small = false } = props;

  const handleFileUpload = files => {
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
        <StyledUploadIcon small={small} />
      ) : (
        <label htmlFor="avatar-upload-file">
          <StyledAvatar src={uploadedFile} small={small} />
        </label>
      )}
    </div>
  );
}

AvatarUploader.propTypes = {
  small: PropTypes.bool,
};

export default AvatarUploader;
