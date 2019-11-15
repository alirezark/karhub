import { makeStyles } from '@material-ui/core';

const styles = makeStyles(theme => ({
  panel: {
    borderRadius: 8,
    backgroundColor: '#fff',
    boxShadow: '0 0 14px 0 rgba(148,148,148,0.3)',
    padding: '1.5rem 1rem',
  },
  tabs: {
    padding: 0,
    borderBottom: '1px solid #ccc',
    '& button': {
      fontSize: '1rem',
      lineHeight: '3.5rem',
      padding: 0,
      minWidth: 82,
      marginRight: '1rem',
      '&.Mui-selected': {
        color: theme.palette.primary.main,
      },
    },
  },
  tabContent: {
    whiteSpace: 'pre-line',
    fontSize: 14,
    color: '#606062',
    lineHeight: '1.5rem',
    padding: 0,
    marginTop: '1rem',
  },
}));

export default styles;
