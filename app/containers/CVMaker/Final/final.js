import React from 'react';
import { MContainer } from 'mui/index';
import styles from './final.style';
import Overview from './contents/overview';
import CVPreview from './contents/cvPreview';

function Final() {
  const classes = styles();

  return (
    <MContainer smaller className={classes.container}>
      <div className={classes.panel}>
        <Overview />
      </div>
      <div className={classes.panel}>
        <CVPreview />
      </div>
    </MContainer>
  );
}

export default Final;
