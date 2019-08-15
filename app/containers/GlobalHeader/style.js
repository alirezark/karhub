import { makeStyles } from '@material-ui/core';

const styles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  avatar: {
    marginRight: 5,
  },
  searchButton: {
    color: '#888888',
    marginRight: 10,
  },
}));

export default styles;
