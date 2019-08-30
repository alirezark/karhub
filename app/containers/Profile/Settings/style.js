import { makeStyles } from '@material-ui/core';

const styles = makeStyles(theme => ({
  greyContainer: {
    backgroundColor: '#F9F9F9',
    padding: '5px 0',
  },
  root: {
    marginTop: '1rem',
  },
  panel: {
    background: '#fff',
    borderRadius: 8,
    boxShadow: '0 0 14px 0 rgba(178,178,178,0.5)',
    color: '#606062',
    fontSize: 12,
  },
  tabs: {
    padding: 0,
    borderBottom: '.5px solid #BFE6E2',
    '& button': {
      lineHeight: '3.5rem',
      fontSize: 14,
      marginRight: 25,
      '&.Mui-selected': {
        marginRight: 20,
        color: theme.palette.primary.main,
        fontWeight: 900,
      },
    },
    '& .MuiTabs-indicator': {
      height: 4,
    },
  },
  tabContent: {
    padding: '10px 40px 50px',
    fontSize: 14,
    '& label': {
      display: 'block',
      margin: '3rem 0 1.5rem',
    },
    '& .MuiTextField-root': {
      paddingRight: 20,
    },
  },
  button: {
    lineHeight: '36px',
  },
  formRow: {
    marginBottom: '1.5rem',
  },
  table: {
    margin: '0 4%',
    width: '92%',
    '& th': {
      color: '#818181',
      borderBottom: '2px solid #c1c1c1',
    },
    '& td': {
      color: '#818181',
      borderBottom: 'none',
    },
  },
  historyLabel: {
    margin: '1rem 0 1rem -1rem !important',
  },
}));

export default styles;
