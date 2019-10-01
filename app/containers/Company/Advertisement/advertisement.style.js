import React from 'react';
import { makeStyles } from '@material-ui/core';

const styles = makeStyles(theme => ({
  root: {
    fontWeight: 300,
  },
  colorLight: {
    color: '#aaa',
  },
  colorBlue: {
    color: '#4990e2',
  },
  head: {
    fontWeight: 800,
    margin: '40px 0 30px',
  },
  tabs: {
    padding: 0,
    borderBottom: '.5px solid #BFE6E2',
    marginBottom: 40,
    '& button': {
      lineHeight: '3.5rem',
      fontSize: 16,
      marginRight: 25,
      fontWeight: 300,
      '&.Mui-selected': {
        marginRight: 20,
        fontWeight: 900,
      },
    },
    '& .MuiTabs-indicator': {
      height: 6,
      borderRadius: 2,
    },
  },
  btnAdd: {
    '&.MuiButton-root': {
      background: '#3a69db',
      lineHeight: '32px',
      width: 180,
      margin: 0,
    },
  },
}));

export default styles;
