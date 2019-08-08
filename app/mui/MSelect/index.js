import React from 'react';
import { withStyles } from '@material-ui/core';
import Select from '@material-ui/core/Select';

export const MSelectStyle = () => ({
  width: '100%',
  margin: '1rem 0',
  '& fieldset': {
    boxShadow: '0 0 8px 0 rgba(148,148,148,0.3)',
    border: 'none',
    borderRadius: 8,
  },
});

const MSelect = withStyles(() => ({
  select: {
    color: '#818181',
    fontSize: 14,
    fontWeight: 'bold',
    '&:focus': {
      backgroundColor: 'transparent',
    },
  },
}))(props => <Select {...props} />);

export default MSelect;
