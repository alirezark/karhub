import React from 'react';
// import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
// import messages from './messages';
import styles from './style';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import avatar from 'app/assets/images/avatar.jpeg';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

function User(props) {
  const classes = styles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  function handleMenu(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
    props.onLogout();
  }

  return (
    <div>
      <Button
        aria-label="Account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <Avatar src={avatar} alt="user name" className={classes.avatar} />
        مانکی دی لوفی
      </Button>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>پروفایل</MenuItem>
        <MenuItem onClick={handleClose}>خروج</MenuItem>
      </Menu>
    </div>
  );
}

User.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default User;
