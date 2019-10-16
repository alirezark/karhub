import React from 'react';
import classNames from 'classnames';
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
      '& .check-td': {
        padding: 0,
        width: 0,
        '& .MuiCheckbox-root': {
          marginLeft: -42,
          opacity: '0',
          transition: '100ms opacity ease-in',
          '&.Mui-checked': {
            opacity: 1,
          },
        },
      },
      '& tr:hover .check-td .MuiCheckbox-root': {
        opacity: '1',
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
      '& .row-checkbox': {
        marginLeft: -50,
      },
    },
  },
}));

const TableBoxThinStyle = makeStyles(() => ({
  root: {
    paddingTop: 5,
    '& table .inline-head': {
      textAlign: 'left',
      margin: '20px 0',
      alignItems: 'baseline',
      '&  div:first-child': {
        fontSize: 12,
      },
    },
  },
}));

const MTableBox = withStyles(() => ({}))(props => {
  const { children, thin } = props;
  const classes = TableBoxStyle();
  const thinClasses = TableBoxThinStyle();

  return (
    <div className={classNames(classes.root, { [thinClasses.root]: thin })}>
      {children}
    </div>
  );
});

export default MTableBox;
