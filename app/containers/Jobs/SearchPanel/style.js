import { makeStyles } from '@material-ui/core';

const styles = makeStyles(theme => ({
  root: {
    marginTop: '3rem',
  },
  panel: {
    backgroundColor: '#fff',
    borderRadius: 8,
    boxShadow: '0 0 14px 0 rgba(148,148,148,0.5)',
    padding: '31px 35px',
  },
  divider: {
    width: 0,
    height: 48,
    float: 'left',
    marginTop: '6px',
    borderLeft: '1px solid #979797',
  },
  notify: {
    fontSize: 18,
    fontWeight: 800,
    color: '#606062',
    marginTop: 3,
    marginLeft: 38,
    lineHeight: '38px',
    padding: '6px 18px',
    '& img': {
      marginRight: '1rem',
      verticalAlign: 'middle',
    },
  },
}));

export default styles;
