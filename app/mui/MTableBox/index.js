import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core';

const TableBoxStyle = makeStyles(() => ({
  root: {
    boxShadow: '0 0 8px 1px rgba(0,0,0,.3)',
    borderRadius: 8,
    position: 'relative',
    padding: 20,
    '& table': {
      width: '100%',
      '& tr': {
        '& td': {
          borderBottom: '1px solid #f5f5f5',
          textAlign: 'center',
          '&:first-child': {
            textAlign: 'auto',
          },
        },
      },
      '& .inline-head': {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        margin: '10px 0',
        alignItems: 'center',
        '&.with-border': {
          borderRight: '1px solid #f5f5f5',
        },
        '& div': {
          padding: 5,
          '&:last-child': {
            fontWeight: 700,
          },
        },
      },
    },
  },
}));

const MTableBox = withStyles(() => ({}))(props => {
  console.log(props);
  const { children } = props;
  const classes = TableBoxStyle();

  return <div className={classes.root}>{children}</div>;
});

export default MTableBox;
