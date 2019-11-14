import React from 'react';
import { InlineCV } from 'containers/cv';
import { makeStyles } from '@material-ui/core';

const styles = makeStyles(() => ({
  panel: {
    background: '#fff',
    boxShadow: '0 0 14px 0 rgba(178,178,178,0.5)',
    borderRadius: 8,
    padding: '30px 50px',
    position: 'relative',
    marginTop: '1.5rem',
    color: '#9B9B9B',
    fontSize: 12,
  },
}));

function CV() {
  const classes = styles();

  return (
    <div className={classes.panel}>
      <InlineCV />
    </div>
  );
}

export default CV;
