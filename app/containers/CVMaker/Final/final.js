import React from 'react';
import { MContainer } from 'mui/index';
import styles from './final.style';
import Overview from './contents/overview';

function Final() {
  const classes = styles();

  return (
    <MContainer smaller className={classes.container}>
      <div className={classes.panel}>
        <Overview />
      </div>
    </MContainer>
  );
}

export default Final;
