import { makeStyles } from '@material-ui/core';

const styles = makeStyles(theme => ({
  cover: {
    height: 350,
    backgroundSize: 'cover',
    '&:before': {
      content: "''",
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.2)',
      display: 'block',
    },
  },
  panel: {
    background: '#fff',
    boxShadow: '0 0 14px 0 rgba(178,178,178,0.5)',
    borderRadius: 8,
    position: 'relative',
    marginTop: '-8rem',
    padding: 10,
    color: '#606062',
    fontSize: 12,
  },
  content: {
    padding: '1rem 2rem 0',
  },
  tabs: {
    padding: 0,
    borderBottom: '.5px solid #BFE6E2',
    '& button': {
      lineHeight: '2rem',
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
    padding: '50px 0px',
    fontSize: 14,
    minHeight: 442,
    '& label': {
      display: 'block',
      margin: '3rem 0 1.5rem',
    },
    '& .MuiTextField-root': {
      paddingRight: 20,
    },
  },
}));

export default styles;
