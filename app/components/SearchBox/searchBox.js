import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import MTextField from 'mui/MTextField';
import { SearchOutlined } from '@material-ui/icons';
import styles from './style';
import MButton from 'mui/MButton';

function SearchBox(props) {
  const { onSubmit } = props;
  const classes = styles();
  return (
    <div className={classes.root}>
      <MTextField
        fullWidth
        className={classes.text}
        placeholder="جستجوی رزومه. پروفایل ..."
        InputProps={{ startAdornment: <SearchOutlined /> }}
      />

      <MButton
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={onSubmit}
      >
        جستجو
      </MButton>
    </div>
  );
}

SearchBox.propTypes = {
  onSubmit: PropTypes.func,
};

export default SearchBox;
