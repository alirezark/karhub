import React from 'react';
import { MContainer } from 'mui/index';
import BreadCrumb from './contents/breadCrumb';
import FolderCVMenu from './contents/folderCVMenu';
import CV from './contents/cv';
import IntroduceRequest from './contents/introduceRequest';
import ExamRequest from './contents/examRequest';

function FolderCV() {
  return (
    <MContainer>
      <BreadCrumb />
      <FolderCVMenu />
      <CV />
      <IntroduceRequest />
      <ExamRequest />
    </MContainer>
  );
}

export default FolderCV;
