import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core';

export const MAppBar = withStyles({
  root: {
    backgroundColor: '#fff',
    color: '#4A4A4A',
    boxShadow: '0 0 24px 0 rgba(197,197,197,0.5)',
  },
})(AppBar);
