import { makeStyles } from '@material-ui/core';

const styles = makeStyles(theme => ({
  root: {
    marginTop: '3rem',
  },
  head: {
    fontWeight: 900,
    marginBottom: '2rem',
  },
  headInfo: {
    ...theme.typography.h2,
    color: '#606062',
    float: 'right',
    fontWeight: 500,
    margin: 0,
  },
  // panel styles
  panel: {
    borderRadius: 8,
    backgroundColor: '#fff',
    boxShadow: '0 0 14px 0 rgba(148,148,148,0.3)',
    padding: '1.5rem 1rem',
  },
  panelHead: {
    fontWeight: 900,
    marginBottom: '1rem',
    lineHeight: '3rem',
  },
  btnBlue: {
    float: 'right',
    backgroundColor: '#6682C3',
    width: 180,
    height: 48,
  },
  icoInfoContain: {
    marginBottom: '1rem',
  },
  icoInfo: {
    marginRight: '2rem',
    fontWeight: 500,
    fontSize: 12,
    color: '#606062',
    '& i': {
      marginRight: '.5rem',
    },
    '&:last-child': {
      margin: 0,
    },
  },
  btnInfoContain: {
    float: 'right',
  },
  panelLine: {
    borderTop: '1px solid #979797',
    opacity: '.5',
  },
  rowInfo: {
    fontSize: 14,
    color: '#818181',
    lineHeight: '3rem',
    '& div': {
      fontSize: 14,
      fontWeight: 900,
      float: 'right',
      margin: 0,
    },
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
  infoTags: {
    '& h5': {
      marginBottom: '.8rem',
    },
  },
  Chip: {
    border: 'none',
    margin: '0 .5rem 1rem 0',
    '& .MuiChip-label': {
      padding: '0 18px',
      minWidth: 90,
      justifyContent: 'center',
    },
  },
  btnGreenLink: {
    color: theme.palette.primary.main,
    float: 'right',
    backgroundColor: 'transparent',
    height: 48,
  },
  tabInfo: {
    fontSize: 16,
    lineHeight: '2rem',
    color: '#606062',
  },
}));

export default styles;
